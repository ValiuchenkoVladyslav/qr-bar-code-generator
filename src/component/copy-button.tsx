import { Button, Popover, Text } from "@radix-ui/themes";
import { Files } from "lucide-react";
import { useInput } from "~/store/input";

function copyImage(canvas: React.RefObject<HTMLCanvasElement | null>) {
   if (!canvas.current) return;

   canvas.current.toBlob((blob) => {
      if (!blob) return;

      navigator.clipboard.write([
         new ClipboardItem({
            "image/png": blob,
         }),
      ]);
   }, "image/png");
}

export function CopyButton({
   canvas,
}: {
   canvas: React.RefObject<HTMLCanvasElement | null>;
}) {
   const { value } = useInput();

   return (
      <Popover.Root>
         <Popover.Trigger>
            <Button
               disabled={!value}
               onClick={() => copyImage(canvas)}
               size="3"
            >
               <Files size={24} />
               <Text>Copy</Text>
            </Button>
         </Popover.Trigger>
         <Popover.Content size="1" className="text-center">
            <Text>copied!</Text>
         </Popover.Content>
      </Popover.Root>
   );
}
