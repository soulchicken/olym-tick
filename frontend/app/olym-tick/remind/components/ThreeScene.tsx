"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // THREE 임포트 추가
import { Box3, Vector3 } from "three";

interface ThreeSceneProps {
  url: string;
}

const Model = ({ url }: ThreeSceneProps) => {
  const gltf = useGLTF(url);
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
      if (camera instanceof THREE.PerspectiveCamera) {
        const fov = (camera.fov * Math.PI) / 180;
        const distance = maxDim / (2 * Math.tan(fov / 2));
        const direction = center.clone().sub(camera.position).normalize();
        const newFov = 2 * Math.atan(maxDim / (2 * distance)) * (180 / Math.PI);

        camera.position.copy(
          center.clone().add(direction.multiplyScalar(distance))
        );
        camera.fov = newFov;
        camera.near = distance / 100;
        camera.far = distance * 100;
        camera.lookAt(center);
        camera.updateProjectionMatrix();
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

  const speed = 2; // 이동 속도

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
        camera.fov = THREE.MathUtils.clamp(
          camera.fov + event.deltaY * 0.05,
          15,
          75
        );
        camera.updateProjectionMatrix();
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

const ThreeScene: React.FC<ThreeSceneProps> = ({ url }) => {
  const [modelScene, setModelScene] = useState(null);

  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 10000000, position: [0, 100, 10] }}
      // style={{ backgroundColor: "#dddddd" }}
    >
      let ambientLight = new THREE.AmbientLight(0xffffff, 1); // Ambient Light
      <ambientLight color="white" intensity={1} />
      <pointLight intensity={1.5} position={[10, 10, 10]} />
      <directionalLight color="white" intensity={5} position={[-1, 2, 4]} />
      <Model url={url} />
      {modelScene && <FitCameraToModel object={modelScene} />}
      <OrbitControls />
      <CameraController />
    </Canvas>
  );
};

export default ThreeScene;
