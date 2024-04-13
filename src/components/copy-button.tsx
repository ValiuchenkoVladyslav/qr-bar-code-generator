import { Button, Popover, Text } from "@radix-ui/themes";
import { copyImage } from "~/lib/copy-image";
import { Files } from "lucide-react";
import { useInputValue } from "~/store/input-value";

export function CopyButton({ canvas }: { canvas: HTMLCanvasElement | null }) {
  const { value } = useInputValue();

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button disabled={!value} onClick={() => copyImage(canvas)} size="3">
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
