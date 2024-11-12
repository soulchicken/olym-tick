import cv2
import os

def extract_frames(video_path, output_folder, skip_frames):
    os.makedirs(output_folder, exist_ok=True)
    vidcap = cv2.VideoCapture(video_path)
    success, image = vidcap.read()
    count = 0
    
    while success:
        if count % skip_frames == 0:  # 지정된 간격으로 프레임 저장
            cv2.imwrite(f"{output_folder}/frame_{count:04d}.jpg", image)
        success, image = vidcap.read()
        count += 1
    vidcap.release()

# 사용 예시: 2프레임당 1프레임만 추출
video_path = 'videos/video.mp4'
output_dir = 'outputs/frames'

extract_frames(video_path, output_dir, 1)
