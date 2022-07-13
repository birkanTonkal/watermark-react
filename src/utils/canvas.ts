export function imageToCanvas(imageObject:Blob) {
    const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d')!;
    let image = new Image();
    image.onload = function(){
      canvas.width = image.width;
      canvas.height = image.height;
      context!.drawImage(image, 0, 0)
      context.font = "30pt Calibri";
      context.fillText("My TEXT!", 70, 70);
    }
    console.log(imageObject)
    image.src = URL.createObjectURL(imageObject);
    console.log(image.src)
}