Sherman's Nuxt3 boilerplate
# Cookbook
## Plug Eslint & Prettier in
### Install related packages
```bash
pnpm add -D eslint @nuxtjs/eslint-config-typescript
pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier
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


