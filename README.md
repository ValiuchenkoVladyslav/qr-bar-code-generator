# QR & Bar Code generator extension
- Generate QR Code
- Generate Bar Code
- Save generated code as PNG
- Copy generated code image

### [Install for Firefox](https://addons.mozilla.org/en-US/firefox/addon/qr-bar-code-generator/)
_Extension not published in Chrome, but dist can still be loaded at [chrome://extensions/](chrome://extensions/) via **"Load unpacked"** button._

## For developers
> Bun 1.1.0 runtime is required

First you need to install project dependencies:
```sh
bun install
```

Before making any changes to code, make sure to also install git hooks:
```sh
bun run prepare
```

### Running application in development mode
```sh
bun run dev
```
After that, you can open your browser on http://localhost:5173/. Any changes to code are applied automatically.

### Build for production
```sh
bun run build
```

To test your extension locally, add all files from dist/ folder to zip archive.

After that, go to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox) and press **"Load Temporary Add-on"** button. Select that archive and it will be loaded as temporary extension.
