import { Card, Heading, Tabs, Theme, Tooltip } from "@radix-ui/themes";
import GitHubLogo from "~/assets/github-logo.svg";
import { BarCodeTab } from "./bar-code-tab";
import { QRCodeTab } from "./qr-code-tab";

const QR_OPTION = "qr-code";
const BAR_OPTION = "bar-code";

function TabTrigger({ option, label }: { option: string; label: string }) {
   return (
      <Tabs.Trigger value={option}>
         <Heading size="5" className="w-[192px] text-center">
            {label}
         </Heading>
      </Tabs.Trigger>
   );
}

export function App() {
   return (
      <Theme appearance="dark" className="w-[480px] px-4">
         <header className="py-4 flex justify-between">
            <Heading>QR & BAR code generator</Heading>

            <Tooltip content="Project repo">
               <a
                  href="https://github.com/ValiuchenkoVladyslav/qr-bar-code-generator"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img src={GitHubLogo} alt="Project repo" />
               </a>
            </Tooltip>
         </header>

         <main className="py-4 mb-4">
            <Tabs.Root defaultValue={QR_OPTION}>
               <Tabs.List>
                  <TabTrigger option={QR_OPTION} label="QR Code" />
                  <TabTrigger option={BAR_OPTION} label="Bar Code" />
               </Tabs.List>

               <Card className="mt-4 pt-8">
                  <QRCodeTab optionName={QR_OPTION} />

                  <BarCodeTab optionName={BAR_OPTION} />
               </Card>
            </Tabs.Root>
         </main>
      </Theme>
   );
}
