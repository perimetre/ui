# @perimetre/ui

Our Design System/Component Library, we use [Tailwindcss.com](https://tailwindcss.com/) and build up our components from there. Inpired by libraries like:

- [Tailwindcss.com](https://tailwindcss.com/)
- [Chakra-ui](https://chakra-ui.com/)
- [Rebass](https://rebassjs.org/)
- [Bulma css](https://bulma.io/)
- [Ant design](https://ant.design/components/overview/)

## Installation

To install, just run

```bash
npm i @perimetre/ui
```

## Getting Started

### Importing react components:

Importing react components is as easy as doing:

```tsx
import { Card } from '@perimetre/ui';

<Card />;
```

- To use the react components make sure you have [Tailwindcss.com](https://tailwindcss.com/) set up.

### Recommended: Importing css if you have TailwindCSS set up:

Make sure you have [postcss-import](https://github.com/postcss/postcss-import), then in your `global.css` file, import our lib like so:

```css
@import '@perimetre/ui/dist/postcss/components';
```

### Importing css if you DON'T have TailwindCSS set up:

You can find two files at `./node_modules/@perimetre/ui/dist`:

- `index.css`
- `index.min.css`

Which then you can use in your project, by either importing it on `App.js/ts`, serving it on the `static`, or hosting the desired css file, and using it as a `<link>` tag.

## Contributing

To develop components, after cloning the repo, make sure you install the dependencies:

```bash
npm i
```

Run storybook by running

```bash
npm start
```

Now you can create components and its related [stories](https://storybook.js.org/docs/react/writing-stories/introduction).

## Available commands

- `prestart` - The command that runs before the start script
- `start` - Starts the development environment
- `next:dev` - Runs next.js' development environment
- `next:build` - Builds next.js' development environment
- `next:start` - Runs next.js' production environment (but you need to build first)
- `prettier` - Runs prettier CLI to clean up files
- `lints` - Runs eslint CLI to check for declared rules
- `lints:fix` - Runs eslint CLI to check for declared rules and tries to automatically fix issues if possible
- `type-check` - Runs the typescript type checked to check if there is any type error
- `check-commit` - Runs all required checks to create a commit
- `storybook` - Runs storybook
- `build-storybook` - Builds a static html version of storybook so it can be deployed
- `rollup:build` - Builds the project and outputs the dist files to generate a npm package
- `rollup:watch` - Watch for file changes and builds the project if a file has been changed
- `prepare` - The command that runs automatically by npm, before a npm package upload

## Architecture

The architecture is how we setup the repository structure:

**\*\* This project must not have any element/template/layout components because we should only have pure, ui components, with no business logic, only the logic for the component to function**

- [`./src/components/UI`](./src/components/UI) = Reusable react components
- [`./src/styles`](./src/styles) = Contains the CSS reusable components/classes.
- [`.src/stories`](./src/stories) = Storybook stories files
- [`.src/pages`](./src/pages) = Container components and routes for Next.js

## Adding more icons

- Run the command `npm run next:dev`
- Go to [http://localhost:3000/optimize](http://localhost:3000/optimize)
- Paste your SVG in the first input (Make sure to not include any React `{}` tags, you have to convert those to html tags, it must be a plain html svg)
- In your svg string, change any `fill` attributes that sets a color, to `fill="currentColor"`. (Only change ones that sets a color. Other fill attributes like `fill="none"` can remain intact)
- Preview your svg in the top section, if it's broken, uncheck "Remove color attributes"(recommended to uncheck if only if it's broken)
- Your svg should be visible and working in all modes: Original, Optimized and CSS
- There shouldn't have any red text under the preview icons. If there is, follow the instructions of the text to fix the issue before continuing
- Copy an existing icon file in [./src/components/icons](./src/components/icons)
- Update the icon name (Replace tool recommended for that, `CTRL/CMD + H` on vscode)
- Update the svg icon in the file you just copied, replacing it with what's in "Optimized SVG" in [http://localhost:3000/optimize](http://localhost:3000/optimize)
- **Add a `{...props}` statement before the end of the first svg tag (look at how it's done in other icons)**
- **Make sure to add a class name according to the icon type. `fill-current` or `stroke-current` (look at how it's done in other icons)**
- Update the URL icon in the file you just copied, replacing it with what's in "uri() version" in [http://localhost:3000/optimize](http://localhost:3000/optimize)
- Insert a new import in [./src/components/icons/index.tsx](./src/components/icons/index.tsx) that references your new icon
- Go to [./src/components/icons/index.css](./src/components/icons/index.css), and copy the latest icon class, at the bottom
- Paste your copied icon class, rename the last part, which contains the icon name, to your icon name, following the other classes pattern
- Update the `url('` replacing it with what's in "uri() version".
- Make sure `--pui-absolute-icon-size`, `width` and `height` has the correct icon size. You can look at the svg tag width/height/viewbox attribute to get the correct size
- Run the command `npm run dev`
- Go to the icons story
- Select your icon
- **Make sure your icon works with any color and any size by changing the controls and looking at the output**

## Troubleshooting

- Components look weird or broken and are potentially missing styles:

  The react components depends on having [Tailwindcss.com](https://tailwindcss.com/) installed. Make sure you have it set up first.
  Then, after that, make sure you imported the css following the steps from `Getting Started`

- Error: PostCSS plugin ${PLUGIN_NAME} requires PostCSS 8:

  Read the `Tailwind.css postcss7-compat` section

## Learn More

- [Creating a React component library](https://blog.harveydelaney.com/creating-your-own-react-component-library/) - Initial instructions in how the project was set up
- [The complete guide to publishing a React package to npm](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/) - another resource on setting up rollup

## Tailwind.css postcss7-compat

We're using **PostCSS 7** because storybook is not compatible with version 8 yet. Due to this, our PostCSS plugins(and the PostCSS _rollup plugin_) are using the latest versions before PostCSS 8 was introduced.

For the same reason, for this project, we're using Tailwind.css `postcss7-compat`:  
https://tailwindcss.com/docs/installation#post-css-7-compatibility-build
