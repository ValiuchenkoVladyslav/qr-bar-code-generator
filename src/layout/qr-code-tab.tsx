import QRCode from "qrcode";
import { useRef } from "react";
import { CodeInput } from "~/component/code-input";
import { CopyButton } from "~/component/copy-button";
import { PrintButton } from "~/component/print-button";
import { SaveButton } from "~/component/save-button";
import { TabContent } from "~/component/tab-content";

function generateQR(value: string, canvas: HTMLCanvasElement | null) {
   QRCode.toCanvas(canvas, value);
}

export function QRCodeTab({ optionName }: { optionName: string }) {
   const canvasRef = useRef<HTMLCanvasElement | null>(null);

   return (
      <TabContent value={optionName}>
         <CodeInput
            placeholder="Enter QR Code text"
            generateFn={(value: string) => generateQR(value, canvasRef.current)}
         />

         <canvas ref={canvasRef} className="max-w-full" />

         <div className="flex gap-4 pt-4">
            <SaveButton canvas={canvasRef} filename="qrcode.png" />

            <CopyButton canvas={canvasRef} />

            <PrintButton canvas={canvasRef} />
         </div>
      </TabContent>
   );
}
