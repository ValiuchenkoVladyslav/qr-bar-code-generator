import { Tabs } from "@radix-ui/themes";

export function TabContent({
   value,
   children,
}: React.PropsWithChildren<{ value: string }>) {
   return (
      <Tabs.Content value={value}>
         <div className="h-[420px] flex flex-col items-center justify-between py-2">
            {children}
         </div>
      </Tabs.Content>
   );
}
