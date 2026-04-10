import JsBarcode from "jsbarcode";
import { useRef } from "react";
import { CodeInput } from "~/component/code-input";
import { CopyButton } from "~/component/copy-button";
import { PrintButton } from "~/component/print-button";
import { SaveButton } from "~/component/save-button";
import { TabContent } from "~/component/tab-content";

const canvasID = "barcode-container";

function generateBar(value: string) {
   try {
      JsBarcode(`#${canvasID}`, value);
   } catch (error) {
      console.error("Error generating barcode:", String(error));
   }
}

export function BarCodeTab({ optionName }: { optionName: string }) {
   const canvasRef = useRef<HTMLCanvasElement | null>(null);

   return (
      <TabContent value={optionName}>
         <CodeInput
            placeholder="Enter Bar Code text"
            generateFn={generateBar}
         />

         <canvas id={canvasID} className="max-w-full" ref={canvasRef} />

         <div className="flex gap-4 pt-4">
            <SaveButton canvas={canvasRef} filename="barcode.png" />

            <CopyButton canvas={canvasRef} />

            <PrintButton canvas={canvasRef} />
         </div>
      </TabContent>
   );
}
