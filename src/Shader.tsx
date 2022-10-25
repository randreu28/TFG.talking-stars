import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

interface Props {
  stream: MediaStream;
}

export default function Shader({ stream }: Props) {
  //Creates an analyser for the media stream
  const audioCtx = new AudioContext();
  const mic = audioCtx.createMediaStreamSource(stream);
  const analyser = audioCtx.createAnalyser();
  const FFTData = new Uint8Array(analyser.frequencyBinCount);
  analyser.fftSize = analyser.fftSize / Math.pow(2, 3); // default is 2048
  mic.connect(analyser);

  //Logs the average Hz each render frame
  useFrame(() => {
    analyser.getByteFrequencyData(FFTData);
    const avg = FFTData.reduce((prev, cur) => prev + cur / FFTData.length, 0);
    console.log(avg);
  });

  return (
    <>
      <Box />
    </>
  );
}
