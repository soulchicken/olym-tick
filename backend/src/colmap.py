import os
import subprocess

def run_command(command):
    """Execute a shell command."""
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    else:
        print(result.stdout)

# 폴더 설정
image_folder = 'outputs/frames'
workspace_folder = 'outputs/reconstruction'
database_path = os.path.join(workspace_folder, 'database.db')
sparse_folder = os.path.join(workspace_folder, 'sparse')
dense_folder = os.path.join(workspace_folder, 'dense')

# 1. Workspace 폴더 생성
def make_workspace():
    os.makedirs(workspace_folder, exist_ok=True)
    os.makedirs(sparse_folder, exist_ok=True)
    os.makedirs(dense_folder, exist_ok=True)

# 2. Database 생성 및 Feature 추출
def create_database():
    print("Running feature extraction...")
    run_command(f"colmap feature_extractor --database_path {database_path} --image_path {image_folder}")

# 3. Feature Matching
def feature_matching():
    print("Running feature matching...")
    run_command(f"colmap exhaustive_matcher --database_path {database_path}")

# 4. Sparse Reconstruction (SfM)
def sparse_reconstruction():
    print("Running sparse reconstruction (SfM)...")
    run_command(f"colmap mapper --database_path {database_path} --image_path {image_folder} --output_path {sparse_folder}")

# 5.1 Undistort Images
def undistort_images():
    print("Running dense reconstruction... 5-1")
    print("Running undistort images...")
    sparse_folder_one = os.path.join(sparse_folder, '0') # TODO: folder name
    run_command(f"colmap image_undistorter --image_path {image_folder} --input_path {sparse_folder_one} --output_path {dense_folder} --output_type COLMAP")

# 5.2 Stereo Matching
def stereo_matching():
    print("Running dense reconstruction... 5-2")
    print("Running stereo reconstruction...")
    run_command(f"colmap patch_match_stereo --workspace_path {dense_folder} --workspace_format COLMAP --PatchMatchStereo.geom_consistency true")

# 5.3 Fusion
def fusion():
    print("Running dense reconstruction... 5-3")
    print("Running fusion...")
    run_command(f"colmap stereo_fusion --workspace_path {dense_folder} --workspace_format COLMAP --input_type geometric --output_path {dense_folder}/fused.ply")

# 6. Texture Mapping
def texture_mapping():
    print("Running texture mapping...")
    fused_path = os.path.join(dense_folder, 'fused.ply')
    textured_model_path = os.path.join(dense_folder, 'textured_model')
    sparse_folder_one = os.path.join(sparse_folder, '0')  # Sparse reconstruction의 첫 번째 모델 폴더
    
    # 모델 변환
    run_command(f"colmap model_converter --input_path {fused_path} --output_path {textured_model_path} --output_type PLY")
    
    # 텍스처 매핑
    run_command(f"colmap texture_mapper --image_path {image_folder} --input_path {sparse_folder_one} --output_path {textured_model_path}")


# make_workspace()
# create_database()
# feature_matching()
# sparse_reconstruction()
# undistort_images()
# stereo_matching()
# fusion()
texture_mapping()

# print("3D reconstruction and texture mapping completed.")
 