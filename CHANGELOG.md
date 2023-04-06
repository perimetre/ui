# Changelog

<!-- All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### **Breaking changes**

### Changes

### Added

### Fixed -->

## [Unreleased]

### **Breaking changes**

### Changes

### Added

### Fixed

## [9.3.2] 2023-04-06

### Changes

- Changed modal `new` variant to use UI as updated designs

## [9.3.1] 2023-03-14

### Changes

- Changed modal `new` variant to use same border radius in all corners

## [9.3.0] 2023-03-13

### Added

- Added option to center modal container

## [9.2.5] 2023-01-18

### Fixed

- Fixed a bug that would cause rich text editor to fail validation (or break while validating) for complex links

## [9.2.4] 2023-01-04

### Fixed

- Fixed a bug that would cause `WYSIWYGInput` component to incorrectly render nested ordered/unordered lists
- Tweaked default list style classes from `draft-js` to conform with list styles from class `pui-prose`

## [9.2.3] 2022-12-15

### Fixed

- Fixes type of `HTMLParsedContent` component `content` prop to accept `null` values as they can be treated the same as `undefined`
- Removes pointer cursor css rule from `BaseCard` component in hover state, as the cursor is automatically changed when the component is wrapped by a link

## [9.2.2] 2022-12-13

### Fixed

- Fixes issue where changing year on date picker doesn't update calendar tooltip

## [9.2.1] 2022-12-08

### Added

- Added the ability to have different date formats in date picker input

## [9.2.0] 2022-12-07

### Added

- Added `DatePickerInput` and `DateRangePickerInput`

## [9.1.0] 2022-11-10

### Added

- Allow for both async and synchronous fetch more callbacks on `AutocompleteInput`

### Fixed

- Formik is now a peer dependency

## [9.0.0] 2022-10-23

### Changes

- Rollbacks node to 16

## [8.0.1] 2022-10-19

### Fixed

- Fixes issue with storybook and updated node

## [8.0.0] 2022-10-19

### Changes

- Updates node version to 18

### Fixed

- Makes sure that the `AutocompleteInput` `fetchMore` callback gets called on init

## [7.9.1] 2022-10-13

### Fixed

- Fix pui-btn-default button styles overwritten by anchor styles inside pui-prose class

## [7.9.1] 2022-10-05

### Fixed

- Remove list style position inside on .prose styles

## [7.9.0] 2022-09-19

### Added

- Added `AlignObjectsCenter` Icon
- Added `AlignObjectsLeft` Icon
- Added `AlignObjectsRight` Icon
- Added `JustifyObjectsBottom` Icon
- Added `JustifyObjectsCenter` Icon
- Added `JustifyObjectsTop` Icon
- Added `JustifySpaceAround` Icon
- Added `JustifySpaceBetween` Icon
- Added `JustifySpaceEvenly` Icon

## [7.8.0] 2022-09-15

### Added

- Added `ButtonStack` component

## [7.7.2] 2022-08-26

### Fixed

- Fixes dropdown showing up under rich text toolbar

## [7.7.1] 2022-08-23

### Fixed

- Makes sure `AutocompleteInput` exported properties also export the expected html props

## [7.7.0] 2022-08-22

### Changes

- Added error and success status to `AutocompleteInput`

## [7.6.0] 2022-08-22

### Changes

- Additional props passed down to `AutocompleteInput` now get forwarded to the underlying input field

## [7.5.0] 2022-08-19

### Added

- Added `FormikSubmitOnChange` component

## [7.4.0] 2022-08-17

### Added

- AutocompleteInput can now also be controlled

## [7.3.1] 2022-08-17

### Fixed

- Fixed an issue with `WYSIWYGInput` where it would skip the cursor to the start when using controlled input

## [7.3.0] 2022-08-17

### Added

- Added a controlled `htmlValueSlow` to `WYSIWYGInput`

### Fixed

- Fixed an issue with `WYSIWYGInput` where it would trigger the change event even when it shouldn't

## [7.2.1] 2022-08-15

### Fixed

- Fixed an issue with the autocomplete where the previous elements on the dropdown weren't being cleaned up

## [7.2.0] 2022-08-09

### Changes

- DragFileUploadInput now also expects an initialFilesDescription property

## [7.1.1] 2022-08-03

### Fixed

- Add transition to hover state

## [7.1.0] 2022-08-03

### Added

- Remove uneven borders in cards and add hover state styles

## [7.0.1] 2022-07-21

### Changes

- `HorizontalResizeablePanel` also triggers events

## [7.0.0] 2022-07-21

### Changes

- `HorizontalResizeablePanel` now expects a function as its children

## [6.0.1] 2022-07-19

### Fixed

- Remove width/height classes from horizontal resizeable panel

## [6.0.0] 2022-07-14

### Fixed

- Remove base list styles for lists, styles need to be applied on each project

## [5.2.3] 2022-07-13

### Fixed

- Change base list styles that hide bullets inside the rich text elements

## [5.2.2] 2022-07-05

### Fixed

- Add cursor-col-resize to the tailwind safelist
- Add full height classes to the right reziseable column

## [5.2.1] 2022-07-04

### Fixed

- Added full height to the `HorizontalResizeablePanel` button

## [5.2.0] 2022-06-29

### Added

- Added `HorizontalResizeablePanel` component

## [5.1.0] 2022-06-28

### Added

- Autocomplete input now has two new properties: `shouldFetchOnInit` and `loading`

### Changes

- Autocomplete input now expects loading state to be provided to it

## [5.0.0] 2022-06-27

### Added

- Added a new Autocomplete Input

### Changes

- Renamed existing Autocomplete Input to AutoComplete Dropdown

## [4.1.1] 2022-06-10

### Fixed

- Conditionally render `label` tag only when `props.label` is defined in `SelectInput`
- Fixed packages vulnerabilities. Installed missing package `downshift`

## [4.1.0] 2022-06-03

### Added

- Updated the layout of modal component
- Added props variant to choose beteween default or new layout
- Added props removePadding to modal component to allow custom styling of its child

## [4.0.1] 2022-05-25

### Changes

- Tailwindcss utilities classes alias changed
- Setup doc updated

## [4.0.0] 2022-05-19

### **Breaking changes**

- Updated Tailwind version to 3.0.23, and postcss libraries.

### Changes

- `postcss-combine-duplicated-selectors` plugin removed.

### Fixed

- `fade-in` animations

## [3.4.10] 2022-04-22

### Fixed

- Add a z-index to the modal header when absolute prop is true

## [3.4.9] 2022-04-14

### Added

- Added option to set values of type `React.ReactNode`, in addition to currently accepted type `string`, to `label` prop of `CheckboxRadioInput` component.

## [3.4.8] 2022-03-07

### Fixed

- Reverted fix in HTMLParsedContent component to stop adding `https` in all `a` tags as that can lead to bugs on email links for instance.
- Fixed critical packages vulnerabilities in dependencies

## [3.4.7] 2022-02-17

### Fixed

- fix classname required prop on BaseCard
- fix image fit on BaseCard
- update version of fontawesome devs

## [3.4.6] 2022-02-16

### Added

- Add Base card element

### Fixed

- fix HTML console error <p> wrapping a <div> element on module cards

## [3.4.5] 2022-01-26

### Changes

- Removed gradient props (gradientInitialColor, gradientMiddleColor, gradientFinalColor) from `ProgramCard` component.
- Removed gradient props (gradientInitialColor, gradientMiddleColor, gradientFinalColor) from `EventCard` component.

### Added

- Added prop classNameBar to allow changing the styles of bar for the `EventCard` component.
- Added class `outline-none` to `ModuleCard` to prevent outline when focus the button.
- Added class `outline-none` to `ProgramCard` to prevent outline when focus the button.
- Added class `outline-none` to `EventCard` to prevent outline when focus the button.
- Added `onPressButton` callback to `EventCard` button.

### Fixed

- Fixed problem with `ModuleCard` and `ProgramCard` buttons displaying a black outline when pressed.
- Fixed problem with `EventCard` not having a button callback.

## [3.4.4] 2022-01-24

### Added

- Added prop classNameTitle to allow changing the styles of title for the `ProgramCard` component.
- Added filter props (filter variant and classNameFilter) on `ProgramCard` to display a linear gradient overlay on the top of the image.
- Added `onPressButton` callback to `ProgramCard` button.

### Fixed

- Fixed problem with `ProgramCard` not having a button callback.

## [3.4.3] 2022-01-24

### Fixed

- Add tags to event cards and fix sponsor image sizes

## [3.4.2] 2022-01-18

### Fixed

- Fix font weight for buttons in cards
- Fix the type issue in the percentage bar on ModuleCards

## [3.4.1] 2022-01-14

### Added

- Added props (classNameTitle and classNameContent) to allow changing the styles of title and content from the `ModuleCard` component.
- Added filter props (filter variant and classNameFilter) on `ModuleCard` to display a linear gradient overlay on the top of the image.
- Added `onPressButton` callback to `ModuleCard` button.

### Fixed

- Fixed problem with `ModuleCard` not having a button callback.

## [3.4.0] 2022-01-10

### Added

- Add percentage cicles component
- Add percentage list connector component
- Add percentage card Banners component
- Add percentage cirlces component
- Add images with gradient border component
- Add expert cards
- Add Event cards
- Add Program cards
- Add Resources cards

## [3.3.0] 2021-12-08

### Fixed

- Moved storybook libraries to `devDependencies` so they are not included in the package bundle
- Updated storybook libraries to fix vulnerabilities issues
- Removed `next` from `peerDependencies` since the components in the UI lib don't depend on it
- Moved `next` to `devDependencies` so it is not included in the package bundle
- Updated `next` to fix vulnerabilities issues
- Updated `formik` to fix vulnerabilities issues
- Updated `svgo` to fix vulnerabilities issues, and made code tweaks where it is used because the update involved breaking changes
- Updated other libraries to fix vulnerabilities issues

## [3.2.0] 2021-11-24

### Added

- Added imperative handler `resetInitialValue` to reset WYSIWYG rich text editor state to the value set in `defaultHtmlValue`

## [3.1.4] 2021-10-20

### Added

- Added rich-text support for inputs of type Radio and Checkbox

## [3.1.3] 2021-08-04

### Added

- Added `entityLinkTransform` function on `WYSIWYG` input to add the props `target="_blank" rel="noreferrer"` into all links `a` tags.
- Added new config into `DOMPurify.sanitize` to prevent it from replacing the `target="_blank"` prop on links.

### Fixed

- Fixed problem with links not opening on a new tab.

## [3.1.2] - 2021-07-22

### Added

- Added `replace` function on `HTMLParsedContent` to convert links without `http://` or `https://` into a valid link

### Fixed

- Fixed bug on `HTMLParsedContent` that cause the links not to redirect properly

## [3.1.1] - 2021-07-21

### Fixed

- Fixed bug on `WYSIWYGInput` component that cause the link form to not work properly

## [3.1.0] - 2021-07-12

### Added

- Added option to make WYSIWYG component toolbar always fixed at top of container

## [3.0.8] - 2021-06-23

### Fixed

- Fixed bug that would cause `WYSIWYGInput` component to send `onChange` events with stale data while initializing its editor state

## [3.0.7] - 2021-06-21

### Changes

Modify `hideBackdrop` logic to make backdrop transparent instead of hidden

## [3.0.6] - 2021-06-21

### Added

- Added minHeight at default-present with default spacing.

### Fixed

- Fixed a bug with height on the `size` property for WYSIWYG input component.

## [3.0.5] - 2021-06-21

### Added

- Added `size` property to WYSIWYG input component.

## [3.0.4] - 2021-06-09

### Added

- Added `placement` and `hideBackdrop` property to Drawer component

## [3.0.3] - 2021-06-03

### Changes

- Badge property `content` now accepts values of type number or string

### Added

- Added `placement` property to Badge component

### Fixed

- Fixed a bug that would cause Badge component to display the badge with no styles when content value is `0`

## [3.0.2] - 2021-05-19

### Changes

- Moved props ordering on Dropdown so other properties can be overidden to allow for further customization

## [3.0.1] - 2021-04-30

## Fixed

- Fixed how dompurify was getting exported

## [3.0.0] - 2021-04-30

## **Breaking changes**

- Removed `xss` package in favor of `isomorphic-dompurify`

## [2.1.4] - 2021-04-16

### Fixed

- Fixed a bug that would install mismatching versions of react/react-dom in host projects, causing hooks errors

## [2.1.3] - 2021-04-15

### Fixed

- Fixed a bug that would install mismatching versions of react/react-dom in host projects, causing hooks errors

## [2.1.2] - 2021-04-09

### Fixed

- Fixed a bug that would cause links to not display their decorators on first render of the WYSIWYGInput component

## [2.1.1] - 2021-04-08

### Fixed

- Fixed a bug that would cause links to sanitize their href tags in the HTMLParsedContent component

## [2.1.0] - 2021-03-24

### Changes

- Updated setup instructions to use Tailwind's default extractor in purgecss configuration

### Added

- Added new class `pui-container` extending Tailwind's default `container` class, but only allowing maximum width of 1280px instead of allowing up to 1536px
- Added new class `pui-container-large` extending Tailwind's default `container` class

### Fixed

- Fixed bug in postcss purge script extractor method, by changing it for Tailwind's default extractor method
- Fixed a bug in disabled buttons to display a regular cursor on hover

## [2.0.0] - 2021-03-12

### **Breaking changes**

- Updated postcss from 7 to 8 and its dependencies
- Updated setup guide to use updated libraries, and `postcss-nested@5.0.1`

### Fixed

- Fixed a bug in the integration of the PostCSS plugin `postcss-nested` with `tailwind` by downgrading `postcss-nested@5.0.1` until [known issue gets fixed](https://github.com/tailwindlabs/tailwindcss/issues/2423#issuecomment-756580590)
- Added recommended [Next.js settings](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins) to custom PostCSS configuration file and to recommended PostCSS instructions in docs

## [1.4.4] - 2021-03-11

### Changes

- Changed last example in the WYSIWYGInput docs to use the new HTMLParsedContent component to render the html generated by the input

### Fixed

- Fixed a bug in the WYSIWYGInput where the margin between some kind of elements like paragraphs was not being applied in the editor
- Added the same sanitization rules from the WYSIWYGInput to the HTMLParsedContent

## [1.4.3] - 2021-03-10

### Fixed

- Fixed a bug where the WYSIWYGInput styles were being all filtered out
- Fixed a bug where the WYSIWYGInput inside a form was making the form submit when clicked on the styles or link buttons

## [1.4.2] - 2021-03-08

### Fixed

- Fixed an issue where purgecss was purging more than it needed to
- Fixed a bug where the WYSIWYGInput text align buttons were not toggling correctly when switching from an alignment to another

## [1.4.1] - 2021-03-04

### Fixed

- Typescript declaration files are now being exported in the `src` folder. Updated the npm lookup to consider that folder now.

## [1.4.0] - 2021-03-04

### Changes

- Removed `DOMPurify` in favor of `xss` for sanitization due to server side rendering compatibility. `xss` is used instead of `isomorphic-dompurify` because the latter includes the JSDOM in a manner that rollup cannot correctly build it.
- Moved string interpolation in favor of classname mappers on components.
- Moved string interpolation in favor of classname mappers on stories.

### Added

- The following components were added:
  - HTMLParsedContent
  - DragFileUploadInput
- `WYSIWYGInput` now also sanitizes `defaultHtmlValue`

### Fixed

- Fixed an issue in `WYSIWYGInput` where its max-width would be limited due to the `prose` class
- Fixed an issue with the `Button` component classes where the classnames would overlap, and no classname would be returned in the end
- Fixed an issue where purgecss wasn't considering the storybook folder

## [1.3.2] - 2021-03-03

### Fixed

- Added missing export for `SelectInput` component

## [1.3.1] - 2021-03-02

### Changes

- Overriding tailwind prose default color values for our colors

### Fixed

- Added type definition for new `getPlainText` method in WYSIWYGInput component

## [1.3.0] - 2021-03-02

### Added

- Added `getPlainText` method to `useImperativeHandle` hook in WYSIWYGInput component

## [1.2.0] - 2021-03-01

### Added

- Added Grid component

## [1.1.11] - 2021-02-26

### Fixed

- Fixed an issue where the button classes weren't being applied if using icon variant

## [1.1.10] - 2021-02-26

### Changes

- Button component now allows `ref` forwarding

## [1.1.9] - 2021-02-26

### Fixed

- Absolute position of drawer in relation to screen fixed to also lock beginning of drawer to left side of screen

## [1.1.8] - 2021-02-25

### Fixed

- Added missing Icons export

## [1.1.7] - 2021-02-25

### **Breaking changes**

- Icon class `pui-absolute-icon` now needs a pseudo element suffix `-after` or `-before`

### Changes

- Icons now works regardless of pseudo element

### Fixed

- On useAutocomplete, removed a place where the onChange method shouldn't get called. Or else the input itself would fill its contents with the selection

## [1.1.6] - 2021-02-25

### Changes

- Refactored autocomplete logic to export it in a hook

## [1.1.5] - 2021-02-24

### Added

- Search icon

## [1.1.4] - 2021-02-24

### Added

- Added more thorough documentation

### Fixed

- Fixed an issue with the rich text editor bullets where they were getting duplicated

## [1.1.3] - 2021-02-23

### Fixed

- Fixed "module not found" problem when importing the lib and correctly exported generated types

## [1.1.2] - 2021-02-23

### Fixed

- Trying to fix "module not found" problem when importing the lib

## [1.1.1] - 2021-02-23

### Fixed

- Fixed a build issue to correctly build dynamic/chunk imports

## [1.1.0] - 2021-02-23

### Changes

- Changed how classnames were conditionally joined/concatenated
- Icons now already have their related stroke/fill class in them, instead of relying that to be added externally every time an icon was added

### Added

- The following components were added:
  - Select Input
  - Modal
  - Tooltip
  - Dropdown
  - Expander
  - Badge
  - WYSIWYG Input
- Made CSS icons more generic
- Added textEllipsis base class
- `DropdownInput` now also has an example of _selected_ options
- Added datalist example to `TextInput` component
- Added react wrapper for more big/complex components to avoid repetition
- Added `after:` class variant utility
- Added `pui-gap` utility

### Fixed

- Fixed folder casing using correct react casing
- Fixed a missing class in storybook
- Fixed story that was using the incorrect naming

## [1.0.1] - 2021-02-10

### Fixed

- Fixed an issue with how the `Drawer` component was getting exported

## [1.0.0] - 2021-02-10

### Added

- The following components were added:
  - Button
  - Chip
  - Alert
  - Text input
  - Checkbox
  - Radio
  - Animations
  - Sekeleton
  - Spinner
  - Scrollbar
  - Link
  - Drawer
- Added an example of using the line clamp plugin
- Added common icons

### Fixed

- Fixed characters like "g" getting cut in text inputs
