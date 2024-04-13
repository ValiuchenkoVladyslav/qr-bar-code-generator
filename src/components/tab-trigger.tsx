import { Heading, Tabs } from "@radix-ui/themes";

export function TabTrigger({
  option,
  label,
}: {
  option: string;
  label: string;
}) {
  return (
    <Tabs.Trigger value={option}>
      <Heading size="5" className="w-[192px] text-center">
        {label}
      </Heading>
    </Tabs.Trigger>
  );
}
