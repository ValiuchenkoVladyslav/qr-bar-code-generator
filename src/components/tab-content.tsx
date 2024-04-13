import { Tabs } from "@radix-ui/themes";

export function TabContent({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return (
    <Tabs.Content value={value}>
      <div className="h-[420px] flex flex-col items-center justify-between py-2">
        {children}
      </div>
    </Tabs.Content>
  );
}
