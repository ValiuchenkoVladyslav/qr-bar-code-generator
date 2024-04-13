import { Heading, Theme, Tooltip, Card, Tabs } from "@radix-ui/themes";

import { TabTrigger } from "~/components/tab-trigger";

import { QRCodeTab } from "./qr-code-tab";
import { BarCodeTab } from "./bar-code-tab";

import GitHubLogo from "~/assets/github-logo.svg";

const QR_OPTION = "qr-code";
const BAR_OPTION = "bar-code";

export function App() {
  return (
    <Theme appearance="dark" className="w-[480px] px-4">
      <header className="py-4 flex justify-between">
        <Heading>QR & BAR code generator</Heading>

        <Tooltip content="Project repo">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
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
