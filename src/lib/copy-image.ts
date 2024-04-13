export function copyImage(canvas: HTMLCanvasElement | null) {
  if (!canvas) return;

  canvas.toBlob((blob) => {
    if (!blob) return;

    void navigator.clipboard.write([
      new ClipboardItem({
        "image/png": blob,
      }),
    ]);
  }, "image/png");
}
