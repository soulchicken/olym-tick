import cv2
import os

def extract_frames(video_path, output_dir, frame_rate=1):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    vidcap = cv2.VideoCapture(video_path)
    success, image = vidcap.read()
    count = 0

    while success:
        if count % frame_rate == 0:
            frame_path = os.path.join(output_dir, f"frame_{count}.jpg")
            cv2.imwrite(frame_path, image)
        success, image = vidcap.read()
        count += 1

    vidcap.release()
    print(f"Extracted {count // frame_rate} frames.")

video_path = 'videos/video.mp4'
output_dir = 'outputs/frames'
extract_frames(video_path, output_dir)
