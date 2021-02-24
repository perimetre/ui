## Contributing

To develop components, after cloning the repo, make sure you install the dependencies:

```bash
npm i
```

Run storybook by running

```bash
npm start
```

Run next.js if needed by running

```bash
npm run next:dev
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

- [`./src/components/UI`](./src/components) = Duck pattern for each component, with each in its own folder
- [`./src/styles`](./src/styles) = Styles for the Next/Storybook setup
- [`.src/pages`](./src/pages) = Container components and routes for Next.js

## Adding more components/css classes

1. Create a folder in [`./src/components/UI`](./src/components) with your component name
1. Create either the `index.tsx` or `index.css` file
1. If it's a CSS component, make sure to import it in [./src/components/index.css](./src/components/index.css), like it's being done with other components.
1. If it's a **Base** CSS style, make sure to import it in [./src/components/base.css](./src/components/base.css), like it's being done with other base styles.
1. If it's a React component, make sure to export it in [./src/components/index.tsx](./src/components/index.tsx), like it's being done with other components.
1. Make sure to create a compelling story in storybook for your component, providing the variants, default values and available options for different properties of your component. Check out other stories and do something similar.
1. Make sure to update the changelog.

## Adding more icons

1. Run the command `npm run next:dev`
1. Go to [http://localhost:3000/optimize](http://localhost:3000/optimize)
1. Paste your SVG in the first input (Make sure to not include any React `{}` tags, you have to convert those to html tags, it must be a plain html svg)
1. In your svg string, change any `fill` attributes that sets a color, to `fill="currentColor"`. (Only change ones that sets a color. Other fill attributes like `fill="none"` can remain intact)
1. Preview your svg in the top section, if it's broken, uncheck "Remove color attributes"(recommended to uncheck if only if it's broken)
1. Your svg should be visible and working in all modes: Original, Optimized and CSS
1. There shouldn't have any red text under the preview icons. If there is, follow the instructions of the text to fix the issue before continuing
1. Copy an existing icon file in [./src/components/icons](./src/components/icons)
1. Update the icon name (Replace tool recommended for that, `CTRL/CMD + H` on vscode)
1. Update the svg icon in the file you just copied, replacing it with what's in "Optimized SVG" in [http://localhost:3000/optimize](http://localhost:3000/optimize)
1. **Add a `{...props}` statement before the end of the first svg tag (look at how it's done in other icons)**
1. **Make sure to add a class name according to the icon type. `fill-current` or `stroke-current` (look at how it's done in other icons)**
1. Update the URL icon in the file you just copied, replacing it with what's in "uri() version" in [http://localhost:3000/optimize](http://localhost:3000/optimize)
1. Insert a new import in [./src/components/icons/index.tsx](./src/components/icons/index.tsx) that references your new icon
1. Go to [./src/components/icons/index.css](./src/components/icons/index.css), and copy the latest icon class, at the bottom
1. Paste your copied icon class, rename the last part, which contains the icon name, to your icon name, following the other classes pattern
1. Update the `url('` replacing it with what's in "uri() version".
1. Make sure `--pui-absolute-icon-size`, `width` and `height` has the correct icon size. You can look at the svg tag width/height/viewbox attribute to get the correct size
1. Run the command `npm run dev`
1. Go to the icons story
1. Select your icon
1. **Make sure your icon works with any color and any size by changing the controls and looking at the output**
1. Make sure to update the changelog.

## Resources

- [Creating a React component library](https://blog.harveydelaney.com/creating-your-own-react-component-library/) - Initial instructions in how the project was set up
- [The complete guide to publishing a React package to npm](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/) - another resource on setting up rollup
