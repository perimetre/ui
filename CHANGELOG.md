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

- Overriding tailwind prose default color values for our colors

### Added

### Fixed

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
