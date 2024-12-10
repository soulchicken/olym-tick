import { useGLTF } from "@react-three/drei";

const SangamModel = () => {
  const gltf = useGLTF("/models/sangam.glb", true);
  return (
    <primitive
      object={gltf.scene}
      position={[0, -5, 0]} // 카메라 위치에 맞춰 조정
      scale={[0.1, 0.1, 0.1]} // 필요에 따라 크기 조정
    />
  );
};

export default SangamModel;
