"use client";

import { PointerLockControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three"; // THREE 임포트 추가
import { Box3, Vector3 } from "three";

const Model = () => {
  const gltf = useGLTF("/models/sangam.glb");
  return <primitive object={gltf.scene} />;
};

const FitCameraToModel = ({ object }: { object: THREE.Object3D }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (object) {
      const box = new Box3().setFromObject(object);
      const center = new Vector3();
      const size = new Vector3();
      box.getCenter(center);
      box.getSize(size);

      const maxDim = Math.max(size.x, size.y, size.z);

      // 카메라가 PerspectiveCamera인지 확인
      if (camera instanceof THREE.PerspectiveCamera) {
        const fov = (camera.fov * Math.PI) / 180;
        const distance = maxDim / (2 * Math.tan(fov / 2));
        const direction = center.clone().sub(camera.position).normalize();

        camera.position.copy(
          center.clone().add(direction.multiplyScalar(distance))
        );
        camera.near = distance / 10;
        camera.far = distance * 10;
        camera.lookAt(center);
      } else {
        console.warn(
          "Camera is not a PerspectiveCamera. FitCameraToModel may not work correctly."
        );
      }
    }
  }, [object, camera]);

  return null;
};

const CameraController = () => {
  const { camera } = useThree();
  const velocity = useRef(new Vector3());
  const direction = useRef(new Vector3());
  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  const speed = 5; // 이동 속도

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "w") keys.current.w = true;
      if (event.key === "a") keys.current.a = true;
      if (event.key === "s") keys.current.s = true;
      if (event.key === "d") keys.current.d = true;
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "w") keys.current.w = false;
      if (event.key === "a") keys.current.a = false;
      if (event.key === "s") keys.current.s = false;
      if (event.key === "d") keys.current.d = false;
    };

    const handleWheel = (event: WheelEvent) => {
      if (camera instanceof THREE.PerspectiveCamera) {
        // fov 값을 휠 방향에 따라 변경
        camera.fov = THREE.MathUtils.clamp(
          camera.fov + event.deltaY * 0.05,
          15, // 최소 줌
          75 // 최대 줌
        );
        camera.updateProjectionMatrix(); // 변경된 값을 반영
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [camera]);

  useFrame((_state, delta) => {
    direction.current.set(
      Number(keys.current.d) - Number(keys.current.a),
      0,
      Number(keys.current.s) - Number(keys.current.w)
    );
    direction.current.normalize();

    velocity.current.copy(direction.current).multiplyScalar(speed * delta);

    camera.position.add(velocity.current);
  });

  return null;
};

const ThreeScene = () => {
  const gltf = useGLTF("/models/sangam.glb");
  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }} // 기본 PerspectiveCamera 설정
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* 전체적인 환경 광원 */}
      <ambientLight intensity={1} />
      {/* 특정 포인트를 강조하는 광원 */}
      <pointLight intensity={200} position={[0, 10, 0]} />

      <Model />
      <FitCameraToModel object={gltf.scene} />

      {/* PointerLockControls 추가 */}
      <PointerLockControls />

      {/* WASD 이동 컨트롤 및 마우스 휠 확대/축소 */}
      <CameraController />
    </Canvas>
  );
};

export default ThreeScene;
