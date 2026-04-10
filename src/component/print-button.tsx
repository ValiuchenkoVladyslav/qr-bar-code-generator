import { Button, Popover, Text } from "@radix-ui/themes";
import { Printer } from "lucide-react";
import { useInput } from "~/store/input";

async function printImage(canvas: React.RefObject<HTMLCanvasElement | null>) {
   const element = canvas.current;
   if (!element) return;

   const blob = await new Promise<Blob | null>((resolve) =>
      element.toBlob(resolve, "image/png"),
   );
   if (!blob) return;

   const url = URL.createObjectURL(blob);

   const iframe = document.createElement("iframe");
   iframe.style.position = "fixed";
   iframe.style.right = "100%";
   iframe.style.bottom = "100%";
   iframe.style.width = "0";
   iframe.style.height = "0";
   iframe.style.border = "none";
   document.body.appendChild(iframe);

   const doc = iframe.contentWindow?.document;
   if (!doc) return;

   const img = doc.createElement("img");
   img.src = url;
   img.style.maxWidth = "100%";

   img.onload = () => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();

      setTimeout(() => {
         document.body.removeChild(iframe);
         URL.revokeObjectURL(url);
      }, 1000);
   };

   const style = doc.createElement("style");
   style.textContent = `
      @page { 
         size: auto;
         margin: 0;
      }
      body { 
         margin: 0;
         display: flex;
         justify-content: center;
         align-items: center;
         height: 100vh;
      }
      img { 
         max-width: 100%; 
         height: auto; 
         display: block;
      }
   `;
   doc.head.appendChild(style);

   doc.body.appendChild(img);
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
