import { Button, Popover, Text } from "@radix-ui/themes";
import { Printer } from "lucide-react";
import { useInput } from "~/store/input";

async function printImage(canvas: React.RefObject<HTMLCanvasElement | null>) {
   const element = canvas.current;
   if (!element) return;

   const dataUrl = element.toDataURL("image/png");

   const printWindow = window.open(
      `print.html#${encodeURIComponent(dataUrl)}`,
      "_blank",
   );

   if (printWindow) {
      printWindow.focus();
   }
}
export function PrintButton({
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
               onClick={() => printImage(canvas)}
               size="3"
            >
               <Printer size={24} />
               <Text>Print</Text>
            </Button>
         </Popover.Trigger>
         <Popover.Content size="1" className="text-center">
            <Text>Sent to printer!</Text>
         </Popover.Content>
      </Popover.Root>
   );
}
