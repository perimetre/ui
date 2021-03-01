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

## Contributing to the code

- _You'll need github cli, there are different ways of doing the same thing but I think it's just easier to make the release with the github cli: https://cli.github.com/. Note that it is not the same thing as the `git` cli_

### It is recommended that you read and understand all of these before starting, they are tailwind's core concepts:

- [Preflight](https://tailwindcss.com/docs/preflight)
- [Utility-First](https://tailwindcss.com/docs/utility-first)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Hover, Focus, & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Adding Base Styles](https://tailwindcss.com/docs/adding-base-styles)
- [Extracting Components](https://tailwindcss.com/docs/extracting-components)
- [Adding New Utilities](https://tailwindcss.com/docs/adding-new-utilities)
- [Functions & Directives](https://tailwindcss.com/docs/functions-and-directives)

### Pushing your changes

1. Split the commits in small chunks of logic. For example, a single component per commit, or a single fix per commit. If you made all the changes before the commit. You can split those using the staging strategy, and then only committing the staged files.
1. Make your changes in a branch.

   - Make sure to update it with master first. You can run the command: `git checkout {BRANCH_NAME} && git fetch && git merge origin/master && git push` before working in a branch that might not be up to date. (Remember to update `{BRANCH_NAME}` to your branch name)

1. Don't commit yet. It is nice to update the `CHANGELOG.md` file in the same commit of your current change.
1. Change the `CHANGELOG.md` file, under `[Unreleased]`, and add a simple text explaining the change **for the current commit**. Also make sure to put it in the correct category, for example `Fixes`, or `Changes`, or `Added`. Do this for each commit separately
1. Now you can push the change with both the code + `CHANGELOG.md`

### Bumping the version

1. This is done in your branch and not `master`
1. After you pushed all the changes and decided you're done. Raise the `version` in package.json accordingly. Following the [semver](https://semver.org/) strategy.
1. Don't push yet.
1. Update the `CHANGELOG.md` file by adding the new version title right before the previous version but under `[Unreleased]`, date it today, copy the contents of `[Unreleased]`, remove the unused/empty headers, and add back(or delete the duplicated content in) the `[Unreleased]` template. (There's a commented version in the beginning of the file that you can copy/paste if needed).
1. Now you commit/push it with the message: `build: bumping version: {VERSION_NUMBER}`(Remember to update `{VERSION_NUMBER}` to the current version, and to remove the square brackets `{}`)
1. This way you have a separate commit only for the changes, which could be 1 or more or whatever. And a separate commit only for the version bump.
1. Now you can push it.

### Generating the npm package

1. Make PR to master
   - On your branch, do a `gh pr create -B master` command or just create it in the browser
   - You can name the PR the name of the current version for example: `1.1.9`
1. Read the instructions in the PR message, check the boxes accordingly
1. Ask for a code review.
1. The github action will start right when code is merged to `master` and a new package will be generated. After it's finished you can install the new version.
   - This process is unrelated to tagging. It will generate a package regardless of a tag/github release

### Making a release

1. After having your branch merged into `master`
1. Create a `RELEASE.md` file in the project root if you don't have one.
1. Copy **only the latest version** content from `CHANGELOG.md` and paste in your `RELEASE.md`, then save. So it has the contents for the current but not other versions, unlike the changelog file.
   - Examples: https://github.com/perimetre/ui/releases
1. Go to [this page](https://github.com/perimetre/ui/commits/master) and find your latest `bumping version` commit: https://github.com/perimetre/ui/commits/master
1. Copy the commit SHA code for that commit, the SHA code is the little number/string in the commit's right side.
   - You can click the clipboard icon which will copy the entire code
1. Now you'll need to checkout to master, pull, generate the tag, push the tag and make a release for that tag:
   - You can use this chain command:
     ```bash
     git add . && git stash && git checkout master && git pull && git tag -a v{VERSION} {COMMIT_SHA} -m "v{VERSION}" && git push origin v{VERSION} && git stash apply && gh release create v{VERSION} -F RELEASE.md
     ```
   - Note the `{VERSION}` and `{COMMIT_SHA}`. You need to replace it with the version number, example `1.1.9`, the commit sha, and remove the brackets `{}`.
   - Example:
     ```bash
     git add . && git stash && git checkout master && git pull && git tag -a v1.1.7 a4e0d64 -m "v1.1.7" && git push origin v1.1.7 && git stash apply && gh release create v1.1.7 -F RELEASE.md
     ```

### Adding more components/css classes

1. Create a folder in [`./src/components/UI`](./src/components) with your component name
1. Create either the `index.tsx` or `index.css` file, or both depending in your case.
1. If it's a CSS component, make sure to import it in [./src/components/index.css](./src/components/index.css), like it's being done with other components.
1. If it's a **Base** CSS style, make sure to import it in [./src/components/base.css](./src/components/base.css), like it's being done with other base styles.
1. If it's a React component, make sure to export it in [./src/components/index.tsx](./src/components/index.tsx), like it's being done with other components.
1. Make sure to wrap your css with the `@layer` directive, like it's being done with other components.
1. Make sure to add as much (reasonable) comments as possible
1. Make sure to create a compelling story in storybook for your component, providing the variants, default values and available options for different properties of your component. Check out other stories for components with css only and also stories for react components, and do something similar.
1. Look at other components, simple and complex ones, for example: WYSIWYGInput, TextInput, Button, Drawer, Badge, Link, Modal, FontFamily. To make sure you're following the same pattern

### Adding more icons

1. Run the command `npm run next:dev`
1. Go to [http://localhost:3000/optimize](http://localhost:3000/optimize)
1. In your svg string, change any `fill` attributes that sets a color, to `fill="currentColor"`. (Only change ones that sets a color. Other fill attributes like `fill="none"` can remain intact)
1. In your svg string, make sure to not include any React `{}` tags, you have to convert those to html tags, you must paste a plain html svg, not a react component/svg.
1. Then, paste your SVG string in the first input
1. Preview your svg in the top section, your svg should be visible and working in all modes: Original, Optimized and CSS
1. If your svg is broken:
   - Check if there are any `<defs>` tags in your svg, first. Then move them to their correlated `<use>` tags.
   - If it's still broken, uncheck "Remove color attributes" (Uncheck only if it's broken)
1. There shouldn't have any red text under the preview icons. If there is, follow the instructions of the text to fix the issue before continuing
1. Copy an existing icon file in [./src/components/icons](./src/components/icons)
1. Update the icon name everywhere in the file, and the filename itself.
1. Update the svg icon in the file you just copied, replacing it with what's in "Optimized SVG" in [http://localhost:3000/optimize](http://localhost:3000/optimize)
1. **Add the `{...props}` statement before the end of the first svg tag (look at how it's done in other icons)**
1. **Make sure to add a class name according to the icon type. `fill-current` or `stroke-current` (look at how it's done in other icons)**. To know which one you need to add. You will need to test the icon using the icon story in storybook.
1. Update the URL icon version in the file you just copied, replacing it with what's in "uri() version" in [http://localhost:3000/optimize](http://localhost:3000/optimize)
1. Insert a new import in [./src/components/icons/index.tsx](./src/components/icons/index.tsx) that references your new icon
1. Go to [./src/components/icons/index.css](./src/components/icons/index.css), and copy the latest icon class, at the bottom
1. Paste your copied icon class, rename the last part of the class name, which contains the icon name, to your icon name, following the other classes pattern
1. Update the `url('` replacing it with what's in "uri() version".
1. Make sure `--pui-absolute-icon-size`, has the correct icon size. You can look at the svg tag width/height/viewbox attribute to get the correct size
1. Run the command `npm run dev`
1. Go to the icons story
1. Select your icon in the dropdown
1. **Make sure your icon works with any color and any size by changing the controls and looking at the output, using the story**

## Resources

- [Creating a React component library](https://blog.harveydelaney.com/creating-your-own-react-component-library/) - Initial instructions in how the project was set up
- [The complete guide to publishing a React package to npm](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/) - another resource on setting up rollup
