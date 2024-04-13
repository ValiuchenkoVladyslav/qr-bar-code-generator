import { generateBarcode } from "barcode-tool";
import { useState } from "react";
import { TabContent } from "~/components/tab-content";
import { SaveButton } from "~/components/save-button";
import { CodeInput } from "~/components/code-input";
import { CopyButton } from "~/components/copy-button";

const canvasID = "barcode-container";

function generateBar(value: string) {
  try {
    const payload = {
      elementId: canvasID,
      value,
    };

    generateBarcode({ ...payload });
  } catch (error) {
    console.error("Error generating barcode:", String(error));
  }
}

export function BarCodeTab({ optionName }: { optionName: string }) {
  const [canvasRef, setRef] = useState<HTMLCanvasElement | null>(null);

  return (
    <TabContent value={optionName}>
      <CodeInput placeholder="Enter Bar Code text" generateFn={generateBar} />

      <canvas id={canvasID} className="max-w-full" ref={(ref) => setRef(ref)} />

      <div className="flex gap-4 pt-4">
        <SaveButton canvas={canvasRef} filename="barcode.png" />

        <CopyButton canvas={canvasRef} />
      </div>
    </TabContent>
  );
}
