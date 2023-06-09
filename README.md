Sherman's Nuxt3 boilerplate
# Cookbook
## Plug Eslint & Prettier in
### Install related packages
```bash
pnpm add -D eslint @nuxtjs/eslint-config-typescript
pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier prettier-plugin-tailwindcss
```
### Register module
// nuxt.config.ts
```typescript
export default defineNuxtConfig({
    modules: ['@nuxtjs/eslint-module'],
    tailwindcss: {}
})
```
### Create eslint configuration file
// .eslintrc
```json
{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "no-unused-expressions": "off",
    "vue/no-v-html": "off",
    "no-console": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
  "ignorePatterns": [
    "**/dist/**"
  ]
}
```
### Create prettier configuration file
// .prettierrc
```json
{
  "printWidth": 200,
  "tabWidth": 4,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "arrowParens": "always",
  "requirePragma": false,
  "insertPragma": false,
  "proseWrap": "preserve",
  "htmlWhitespaceSensitivity": "ignore",
  "vueIndentScriptAndStyle": false,
  "endOfLine": "auto",
  "embeddedLanguageFormatting": "auto",
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindConfig": "./tailwind.config.ts"
}
```

### Add eslint lint script
// package.json
```json
{
  "scripts": {
    "lint": "eslint --ext .js,.ts,.vue ."
  }
}
```

## Plug Tailwind in
### Install related packages
```bash
pnpm add -D @nuxtjs/tailwindcss
```
### Create tailwind files
// tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: '#00FF00'
                // primary: defaultTheme.colors.green
            }
        }
    }
}
```
// assets/css/tailwind.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### Register module
// nuxt.config.ts
```typescript
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config'
        // exposeConfig: false,
        // config: {},
        // injectPosition: 0,
        // viewer: true,
    }
})
```
# Plug Pinia in
### Install related packages
```bash
pnpm add @pinia/nuxt
```
### Register module
```typescript
export default defineNuxtConfig({
    modules: ['@pinia/nuxt']
})
```
# Plug VueUse in
### Install VueUse
```bash
pnpm add -D @vueuse/nuxt @vueuse/core
```
### Register module
```typescript
export default defineNuxtConfig({
    modules: ['@vueuse/nuxt']
})
```

# Plug SASS in
### Install related packages
```bash
pnpm add -D sass sass-loader
```

