import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import PermGranter from "./components/PermGranter";
import Shader from "./components/Shader";
import Signature from "./components/Signature";

export default function App() {
  const [stream, setStream] = useState<null | MediaStream>(null);

  if (stream) {
    return (
      <>
        <Signature />
        <p className="absolute inset-0 flex items-center justify-center z-10 text-white text-3xl">
          Speak up!
        </p>
        <div className="h-screen w-screen bg-gray-900 fixed">
          <Canvas>
            <Shader stream={stream} />
          </Canvas>
        </div>
      </>
    );
  } else {
    return <PermGranter setStream={setStream} />;
  }
}
