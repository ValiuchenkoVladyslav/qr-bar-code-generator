import { TabContent } from "~/components/tab-content";

import QRCode from "qrcode";
import { useState } from "react";
import { SaveButton } from "~/components/save-button";
import { CodeInput } from "~/components/code-input";
import { CopyButton } from "~/components/copy-button";

function generateQR(value: string, canvas: HTMLCanvasElement | null) {
  void QRCode.toCanvas(canvas, value);
}

export function QRCodeTab({ optionName }: { optionName: string }) {
  const [canvasRef, setRef] = useState<HTMLCanvasElement | null>(null);

  return (
    <TabContent value={optionName}>
      {canvasRef && (
        <CodeInput
          placeholder="Enter QR Code text"
          generateFn={(value: string) => generateQR(value, canvasRef)}
        />
      )}

      <canvas ref={(ref) => setRef(ref)} className="max-w-full" />

      <div className="flex gap-4 pt-4">
        <SaveButton canvas={canvasRef} filename="qrcode.png" />

        <CopyButton canvas={canvasRef} />
      </div>
    </TabContent>
  );
}
