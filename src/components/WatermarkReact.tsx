import { imageToCanvas } from "../utils/canvas";
import { WatermarkSource, WatermarkPosition } from "../types/props";

const WatermarkReact = (props:WatermarkSource & WatermarkPosition) => {
  console.log(props.dx);
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