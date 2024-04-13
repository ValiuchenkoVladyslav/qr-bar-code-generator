export function saveAsImage(
  canvas: HTMLCanvasElement | null,
  filename: string,
) {
  if (!canvas) return;

  const anchor = document.createElement("a");

  const image = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");

  anchor.href = image;
  anchor.download = filename;

  anchor.click();
}
