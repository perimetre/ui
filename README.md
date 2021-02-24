# @perimetre/ui

Our Design System/Component Library, we use [Tailwindcss.com](https://tailwindcss.com/) and build up our components from there. Inpired by libraries like:

- [Tailwindcss.com](https://tailwindcss.com/)
- [Chakra-ui](https://chakra-ui.com/)
- [Rebass](https://rebassjs.org/)
- [Bulma css](https://bulma.io/)
- [Ant design](https://ant.design/components/overview/)

## Installation

**The package is only available on Github Packages, so make sure you're setup and logged in to its registry.**

To install, just run:

```bash
npm i @perimetre/ui
```

Continue the setup by reading: [Setup](./docs/setup.md).

## Docs:

- [Setup](./docs/setup.md)
- [Contributing](./CONTRIBUTING.md)

## Troubleshooting

- Components look weird or broken and are potentially missing styles:

  The react components depends on having [Tailwindcss.com](https://tailwindcss.com/) installed. Make sure you have it set up first.
  Then, after that, make sure you imported the css following the steps from `Getting Started`

- Error: PostCSS plugin ${PLUGIN_NAME} requires PostCSS 8:

  Read the `Tailwind.css postcss7-compat` section

## Tailwind.css postcss7-compat

We're using **PostCSS 7** because storybook is not compatible with version 8 yet. Due to this, our PostCSS plugins(and the PostCSS _rollup plugin_) are using the latest versions before PostCSS 8 was introduced.

For the same reason, for this project, we're using Tailwind.css `postcss7-compat`:  
https://tailwindcss.com/docs/installation#post-css-7-compatibility-build
