import subprocess
import os

def run_colmap_command(command):
    """COLMAP 명령어를 실행하는 함수."""
    try:
        print(f"Running command: {' '.join(command)}")
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error while running COLMAP command: {e}")

def feature_extraction(database_path, image_path):
    """COLMAP 특징점 추출 (Feature Extraction)"""
    command = [
        "colmap", "feature_extractor",
        "--database_path", database_path,
        "--image_path", image_path
    ]
    run_colmap_command(command)

def feature_matching(database_path):
    """COLMAP 특징 매칭 (Feature Matching)"""
    command = [
        "colmap", "exhaustive_matcher",
        "--database_path", database_path
    ]
    run_colmap_command(command)

def sparse_reconstruction(database_path, image_path, sparse_output_path):
    """COLMAP sparse reconstruction (SfM)"""
    if not os.path.exists(sparse_output_path):
        os.makedirs(sparse_output_path)
    
    command = [
        "colmap", "mapper",
        "--database_path", database_path,
        "--image_path", image_path,
        "--output_path", sparse_output_path
    ]
    run_colmap_command(command)


def merge_sparse_models(sparse_folder_paths, output_folder):
    """
    COLMAP model_merger 명령어를 사용하여 여러 개의 sparse 모델을 병합합니다.
    
    Parameters:
    sparse_folder_paths (list): 병합할 각 sparse 폴더의 경로 리스트 (0, 1, 2, ... 경로를 포함한 리스트)
    output_folder (str): 병합된 모델을 저장할 경로 (예: 'sparse_merged')
    """
    # 병합 폴더가 없으면 생성
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    # 첫 번째 폴더부터 시작해서 순차적으로 병합
    merged_path = sparse_folder_paths[0]  # 첫 번째 폴더로 초기화
    for next_sparse_path in sparse_folder_paths[1:]:
        command = [
            "colmap", "model_merger",
            "--input_path1", merged_path,
            "--input_path2", next_sparse_path,
            "--output_path", output_folder
        ]
        try:
            subprocess.run(command, check=True)
            print(f"Successfully merged {merged_path} and {next_sparse_path} into {output_folder}")
            # 병합 결과를 다음 단계의 입력으로 사용
            merged_path = output_folder
        except subprocess.CalledProcessError as e:
            print(f"Error merging {merged_path} and {next_sparse_path}: {e}")
            break

def dense_reconstruction(sparse_path, dense_output_path):
    """COLMAP 밀집 재구성 (Dense Reconstruction)"""
    if not os.path.exists(dense_output_path):
        os.makedirs(dense_output_path)

    # Undistort images
    undistort_command = [
        "colmap", "image_undistorter",
        "--image_path", image_path,
        "--input_path", os.path.join(sparse_path,"0"),  # 병합된 모델 경로
        "--output_path", dense_output_path
    ]
    run_colmap_command(undistort_command)

    # Dense stereo
    stereo_command = [
        "colmap", "patch_match_stereo",
        "--workspace_path", dense_output_path
    ]
    run_colmap_command(stereo_command)

    # Stereo fusion
    fusion_command = [
        "colmap", "stereo_fusion",
        "--workspace_path", dense_output_path,
        "--output_path", os.path.join(dense_output_path, "fused.ply")
    ]
    run_colmap_command(fusion_command)

def meshing(dense_output_path):
    """COLMAP 메쉬 생성 (Meshing)"""
    meshed_output_path = os.path.join(dense_output_path, "meshed.ply")
    command = [
        "colmap", "poisson_mesher",
        "--input_path", os.path.join(dense_output_path, "fused.ply"),
        "--output_path", meshed_output_path,
        "--point_weight", "1.0",  # 기본값을 사용하거나 낮춰볼 수 있음
        "--depth", "10"  # 기본 깊이 설정
    ]
    run_colmap_command(command)

def texturing(meshed_output_path, textured_output_path):
    """COLMAP 텍스처링 (Texturing)"""
    if not os.path.exists(textured_output_path):
        os.makedirs(textured_output_path)
    
    command = [
        "colmap", "model_converter",
        "--input_path", meshed_output_path,
        "--output_path", textured_output_path,
        "--output_type", "PLY"
    ]
    run_colmap_command(command)

# 경로 설정
database_path = "./database.db"
image_path = "outputs/frames"
sparse_output_path = "./sparse"
dense_output_path = "./dense"
textured_output_path = "./textured_model"

# COLMAP 실행 순서

# 이미지에서 특징점을 추출하는 함수
# feature_extraction(database_path, image_path)

# 여러 이미지 간의 특징점을 매칭하는 함수
# feature_matching(database_path)

# Sparse reconstruction을 실행하여 카메라 위치와 3D 포인트를 추정
# sparse_reconstruction(database_path, image_path, sparse_output_path)

# sparse 폴더 목록 (0, 1, 2, ... 폴더가 위치한 경로)
sparse_folders = [f"sparse/{i}" for i in range(1)]
output_merged_folder = "sparse_merged"
# 병합 실행
# merge_sparse_models(sparse_folders, output_merged_folder)

# 밀집 재구성 단계에서 3D 포인트 클라우드를 생성
dense_reconstruction(sparse_output_path, dense_output_path)

# 3D 포인트 클라우드에서 메쉬 모델을 생성
meshing(dense_output_path)

# 생성된 메쉬 모델에 텍스처를 입히는 단계
texturing(os.path.join(dense_output_path, "meshed.ply"), textured_output_path)
