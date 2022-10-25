import { Box } from "@react-three/drei";

interface Props {
  stream: MediaStream;
}

//ref:
//https://github.com/mrdoob/three.js/blob/master/examples/webaudio_visualizer.html

export default function Shader({ stream }: Props) {
  //..handleStream and display shader
  return (
    <>
      <Box />
    </>
  );
}
