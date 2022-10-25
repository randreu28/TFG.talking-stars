import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import PermGranter from "./components/PermGranter";
import Shader from "./Shader";

export default function App() {
  const [isUserReady, setIsUserReady] = useState<null | MediaStream>(null);

  if (isUserReady) {
    return (
      <div className="h-screen w-screen fixed">
        <Canvas>
          <OrbitControls />
          <Shader stream={isUserReady} />
        </Canvas>
      </div>
    );
  } else {
    return <PermGranter setIsUserReady={setIsUserReady} />;
  }
}
