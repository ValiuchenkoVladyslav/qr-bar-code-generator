import { Button, Popover, Text } from "@radix-ui/themes";
import { Download } from "lucide-react";
import { useInput } from "~/store/input";

function saveAsImage(
   canvas: React.RefObject<HTMLCanvasElement | null>,
   filename: string,
) {
   if (!canvas.current) return;

   const anchor = document.createElement("a");

   const image = canvas.current
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

   anchor.href = image;
   anchor.download = filename;

   anchor.click();
}

export function SaveButton({
   canvas,
   filename,
}: {
   canvas: React.RefObject<HTMLCanvasElement | null>;
   filename: string;
}) {
   const { value } = useInput();

   return (
      <Popover.Root>
         <Popover.Trigger>
            <Button
               disabled={!value}
               onClick={() => saveAsImage(canvas, filename)}
               size="3"
            >
               <Download size={24} />
               <Text>Download</Text>
            </Button>
         </Popover.Trigger>
         <Popover.Content size="1" className="text-center">
            <Text>downloaded!</Text>
         </Popover.Content>
      </Popover.Root>
   );
}
