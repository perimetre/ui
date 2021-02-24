# Changelog

<!-- All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### **Breaking changes**

### Added

### Fixed -->

## [Unreleased]

### **Breaking changes**

### Changes

### Added

- Added more thorough documentation

### Fixed

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
