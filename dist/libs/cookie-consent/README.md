# cookie-consent

## Install

### 1. Add `.npmrc` with `personal token` instead of `<auth_token>`

```text
@gc:registry=https://gitlab.geekcoders.cz/api/v4/packages/npm/
//gitlab.geekcoders.cz/api/v4/packages/npm/:_authToken= "<auth_token>"
//gitlab.geekcoders.cz/api/v4/projects/:_authToken=<auth_token>
```

### 2. Install package

#### a) Install using npm

```bash
npm install @gc/cookie-consent
```

#### b) Install using yarn

```bash
yarn add @gc/cookie-consent
```

[//]: # '#### c) TODO: unpkg?'
[//]: #
[//]: # '```'
[//]: # 'https://unpkg.geekcoders.cz/@gc/cookies-consent@1.0.0/styles.css'
[//]: # 'https://unpkg.geekcoders.cz/@gc/cookies-consent@1.0.0/index.js'
[//]: # '```'

## Usage

### 1. Usage in React

```tsx
import ReactDOM from 'react-dom'
import React, { StrictMode } from 'react'
import 'cookie-consent-module/dist/index.css'
import { GCCookieConsent } from 'cookie-consent-module'

ReactDOM.render(
  <StrictMode>
    <GCCookieConsent localization="cs" usedCookiesType={['analytics', 'ad', 'personalization']} />
  </StrictMode>,
  document.getElementById('root')
)
```

### 2. Usage in webpack

```js
import { init } from '@geekcoders/cookies-consent-module'
import '@geekcoders/cookies-consent-module/dist/index.css'

init(
  {
    localization: 'cs',
    usedCookiesType: ['analytics', 'ad', 'personalization'],
    link: '/path-to-gdpr',
  },
  document.getElementById('gc-cookie-consent')
)
```

### 3. Usage in HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
    <link href="path-to-package/dist/index.css" rel="stylesheet" type="text/css" />
    ...
  </head>
  <body>
    ...
    <script src="path-to-package/dist/index.umd.js" type="text/javascript"></script>
    <script>
      GCCookieConsent.init(
        {
          localization: 'cs',
          usedCookiesType: ['analytics', 'ad', 'personalization'],
          link: '/path-to-gdpr',
        },
        document.getElementById('gc-cookie-consent')
      )
    </script>
    ...
  </body>
</html>
```

## Optional values

```html
...
<script>
  GCCookieConsent.init(
    {
      localization: 'cs',
      usedCookiesType: ['analytics', 'ad', 'personalization'],
      link: '/path-to-gdpr',
    },
    document.getElementById('gc-cookie-consent')
  )
</script>
...
```

#### OR

```tsx
...
<GCCookieConsent
  localization='cs'
  usedCookiesType={['analytics', 'ad', 'personalization']}
  link={'/path-to-gdpr'}
/>
...
```

## Styling

```css
:root {
  --gc-cc-color-checkbox: 22 163 74;

  --gc-cc-color-info-panel-bg: 255 255 255;
  --gc-cc-color-info-panel-link: 22 163 74;
  --gc-cc-color-info-panel-text: 50 50 50;

  --gc-cc-color-info-panel-primary-button-bg-hover: 21 128 61;
  --gc-cc-color-info-panel-primary-button-bg: 22 163 74;
  --gc-cc-color-info-panel-primary-button-border-hover: 255 255 255;
  --gc-cc-color-info-panel-primary-button-border: 255 255 255;
  --gc-cc-color-info-panel-primary-button-ring: 255 255 255;
  --gc-cc-color-info-panel-primary-button-text-hover: 255 255 255;
  --gc-cc-color-info-panel-primary-button-text: 255 255 255;

  --gc-cc-color-info-panel-secondary-button-bg-hover: 40 40 40;
  --gc-cc-color-info-panel-secondary-button-bg: transparent;
  --gc-cc-color-info-panel-secondary-button-border-hover: 255 255 255;
  --gc-cc-color-info-panel-secondary-button-border: 255 255 255;
  --gc-cc-color-info-panel-secondary-button-ring: 255 255 255;
  --gc-cc-color-info-panel-secondary-button-text-hover: 255 255 255;
  --gc-cc-color-info-panel-secondary-button-text: 255 255 255;

  --gc-cc-color-settings-panel-bg: 255 2 255;
  --gc-cc-color-settings-panel-link: 22 163 74;
  --gc-cc-color-settings-panel-text: 50 50 50;

  --gc-cc-color-settings-panel-primary-button-bg-hover: 21 128 61;
  --gc-cc-color-settings-panel-primary-button-bg: 22 163 74;
  --gc-cc-color-settings-panel-primary-button-border-hover: 255 255 255;
  --gc-cc-color-settings-panel-primary-button-border: 255 255 255;
  --gc-cc-color-settings-panel-primary-button-ring: 255 255 255;
  --gc-cc-color-settings-panel-primary-button-text-hover: 255 255 255;
  --gc-cc-color-settings-panel-primary-button-text: 255 255 255;

  --gc-cc-color-settings-panel-secondary-button-bg-hover: 40 40 40;
  --gc-cc-color-settings-panel-secondary-button-bg: 50 50 50;
  --gc-cc-color-settings-panel-secondary-button-border-hover: 255 255 255;
  --gc-cc-color-settings-panel-secondary-button-border: 255 255 255;
  --gc-cc-color-settings-panel-secondary-button-ring: 255 255 255;
  --gc-cc-color-settings-panel-secondary-button-text-hover: 255 255 255;
  --gc-cc-color-settings-panel-secondary-button-text: 255 255 255;

  --gc-cc-color-trigger-bg: 243 244 246;
  --gc-cc-color-trigger-text: 156 163 175;
}
```

## Running unit tests

Run `nx test shared-cookie-consent` to execute the unit tests via [Jest](https://jestjs.io).
