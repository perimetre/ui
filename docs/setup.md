## Setting up - Next/React project

The lib is only compatible with PostCSS 7(Read more below). And it is required that you have tailwind set up first.

You will need:

- tailwindcss@tailwindcss/postcss7-compat
- postcss@^7
- autoprefixer@^9
- postcss-import@12.0.1
- postcss-nested@4.2.3
- postcss-combine-media-query@1.0.1
- postcss-combine-duplicated-selectors@9.4.0

### It is recommended that you read and understand all of these before starting, they are tailwind's core concepts:

- [Preflight](https://tailwindcss.com/docs/preflight)
- [Optimizing for Production](https://tailwindcss.com/docs/optimizing-for-production)
- [Utility-First](https://tailwindcss.com/docs/utility-first)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Hover, Focus, & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Adding Base Styles](https://tailwindcss.com/docs/adding-base-styles)
- [Extracting Components](https://tailwindcss.com/docs/extracting-components)
- [Adding New Utilities](https://tailwindcss.com/docs/adding-new-utilities)
- [Functions & Directives](https://tailwindcss.com/docs/functions-and-directives)

### Setting up tailwind

1. Go to [Tailwind.css getting started](https://tailwindcss.com/docs/installation), and follow the instructions. But before that, remember that you need to use the PostCSS 7 compat version, and the same is true for the PostCSS plugins.
1. Here's a "do it all" npm install command that installs the correct/expected versions:
   ```bash
   npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 postcss-import@12.0.1 postcss-nested@4.2.3 postcss-combine-media-query@1.0.1 postcss-combine-duplicated-selectors@9.4.0
   ```
1. Proceed the tailwind setup as usual. Following that instruction page.

### Adding the lib to tailwind.

1. Edit the `tailwind.config.js` file, adding the following `preset`:
   ```diff
   module.exports = {
      purge: [
         './pages/**/*.{js,ts,jsx,tsx,css}',
         './components/**/*.{js,ts,jsx,tsx,css}',
   +     './node_modules/@perimetre/ui/**/*.{js,ts,jsx,tsx,css}',
   +     '!./node_modules/@perimetre/ui/**/storybookMappers.tsx'
      ],
      darkMode: false, // or 'media' or 'class'
      theme: {
         extend: {}
      },
      variants: {
         extend: {}
      },
      plugins: [],
   +  // eslint-disable-next-line @typescript-eslint/no-var-requires
   +  presets: [require('@perimetre/ui').defaultPreset]
   };
   ```
2. [Check out the preset to learn more about the values](../src/presets/default-preset.js)

### Importing the font

> This is not required but heavily recommended, refer to `Importing the component files individually and/or not having the font.css files` for more information.

1. As you can see in the [../src/index.css file](../src/index.css) you'll have to import later. It already applies the [base `pui-font-family`](../src/components/FontFamily/index.css) class. So you need to import the font before that file.
1. It is not required but you might want to read [this tweet: https://twitter.com/leeerob/status/1345554815158546432](https://twitter.com/leeerob/status/1345554815158546432).
1. Make sure you have the font files, they are not included with the lib.
1. Create a `font.css` file just like [this one: ../src/styles/font.css](../src/styles/font.css).
1. If you followed the tailwind setup you probably have `globals.css` file that has all the tailwind imports, imported in a `_app.tsx` file
1. Open the same `globals.css` file.
1. Import your `font.css` in the first line of your `global.css` file. [Example: ../src/styles/globals.css](../src/styles/globals.css)
   ```diff
   + @import './font.css';
   +
   /* https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports */
   @import 'tailwindcss/base';
   @import 'tailwindcss/components';
   @import 'tailwindcss/utilities';
   ```
1. You can see in your `font.css` that it expects the font file to be served at `${domain}/fonts/${...multiple font files...}`. So you need to add the font files on your current app yourself. [This is an example on next.js](../src/pages/_document.tsx), and [another one on storybook.](../.storybook/preview-head.html), in both cases the "public" folder is statically served. Next.js does it automatically, where on storybook we have a `-s` setting declaring the public folder to be statically served.
1. You can change the path to the font files, you just have to statically serve them, just make sure to update everywhere accordingly.

### Importing the required css

1. If you followed the tailwind setup you probably have `globals.css` file that has all the tailwind imports, imported in a `_app.tsx` file
1. Open the same `globals.css` file.
1. Add `@import '@perimetre/ui/dist/postcss/index.css';` right after the last tailwind import. Like so:

   ```diff
   @import './font.css';

   /* https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports */
   @import 'tailwindcss/base';
   @import 'tailwindcss/components';
   @import 'tailwindcss/utilities';
   -
   +
   + @import '@perimetre/ui/dist/postcss/index.css';
   +
   ```

1. You should now be able to use the `.pui` classes and the components that use those classes.

#### Importing the component files individually and/or not having the font.css files:

> This is not required if you already have it setup in the method explained above

1. You can import the component files individually in your `globals.css` by importing them in the correct order like this:
   ```diff
   /* https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports */
   @import 'tailwindcss/base';
   + @import '@perimetre/ui/dist/postcss/components/base.css';
   @import 'tailwindcss/components';
   + @import '@perimetre/ui/dist/postcss/components/index.css';
   @import 'tailwindcss/utilities';
   ```
1. You should now be able to use the `.pui` classes and the components that use those classes.

### Importing react components:

Importing react components is as easy as doing:

```tsx
import { Dropdown } from '@perimetre/ui';

<Dropdown />;
```

## Setting up - Static project, without Next/React

After installing the lib you can find two files at `./node_modules/@perimetre/ui/dist`:

- `index.css`
- `index.min.css`

Which then you can use in your project however you want, by either importing it on `App.js/ts`, serving it on `static`, or hosting the desired css file and using it as a `<link>` tag.
