import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";

const Model = () => {
  const modelRef = useRef();

  useEffect(() => {
    const loader = new ColladaLoader();
    loader.load("/models/두1/gift.dae", (collada) => {
      modelRef.current = collada.scene;
    });
  }, []);

  return <primitive object={modelRef.current} />;
};

export default function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
