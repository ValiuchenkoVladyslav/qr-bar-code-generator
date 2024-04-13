import { Button, Popover, Text } from "@radix-ui/themes";
import { Download } from "lucide-react";
import { saveAsImage } from "~/lib/save-as-image";
import { useInputValue } from "~/store/input-value";

export function SaveButton({
  canvas,
  filename,
}: {
  canvas: HTMLCanvasElement | null;
  filename: string;
}) {
  const { value } = useInputValue();

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
