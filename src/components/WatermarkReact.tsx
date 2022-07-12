import { imageToCanvas } from "../utils/canvas";
import { WatermarkStyle } from "../types/props";

const WatermarkReact = ({}:WatermarkStyle) => {
  return (
    <>
      <input
        type="file"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.files != null) {
            imageToCanvas(event.target.files[0])
          }
        }}
      />
      <canvas id="canvas"/>
    </>
  );

  
}
export default WatermarkReact