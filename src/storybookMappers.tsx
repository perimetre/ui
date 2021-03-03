// Here lies all the mappers that maps a non prefixed tailwind string, to its prefixed classname counterpart.
// This is needed because purge css doesn't allow us to interpolate class strings.
// This is only used for storybook, because storybook must allow us to choose all options
// Thus, this file(and should even be manually ignored) should not be included in the purge css anywhere other than the lib's own.

/*
    ##################
     Color Mappers
    ##################

    The first one is used to define the type, and all the others should use the same type.
    This ensures that if a color is added to the tailwind colors, it should be added to the first one, which will force it to be added to the other ones as well.

    So, if adding a color to the first one, make sure you add to all other color mappers too, but returning their respective class
*/
export const puiColorClassnameMap = {
  transparent: 'pui-color-transparent',
  current: 'pui-color-current',
  black: 'pui-color-black',
  white: 'pui-color-white',
  'gray-50': 'pui-color-gray-50',
  'gray-100': 'pui-color-gray-100',
  'gray-200': 'pui-color-gray-200',
  'gray-300': 'pui-color-gray-300',
  'gray-400': 'pui-color-gray-400',
  'gray-500': 'pui-color-gray-500',
  'gray-600': 'pui-color-gray-600',
  'gray-700': 'pui-color-gray-700',
  'gray-800': 'pui-color-gray-800',
  'gray-900': 'pui-color-gray-900',
  'red-50': 'pui-color-red-50',
  'red-100': 'pui-color-red-100',
  'red-200': 'pui-color-red-200',
  'red-300': 'pui-color-red-300',
  'red-400': 'pui-color-red-400',
  'red-500': 'pui-color-red-500',
  'red-600': 'pui-color-red-600',
  'red-700': 'pui-color-red-700',
  'red-800': 'pui-color-red-800',
  'red-900': 'pui-color-red-900',
  'yellow-50': 'pui-color-yellow-50',
  'yellow-100': 'pui-color-yellow-100',
  'yellow-200': 'pui-color-yellow-200',
  'yellow-300': 'pui-color-yellow-300',
  'yellow-400': 'pui-color-yellow-400',
  'yellow-500': 'pui-color-yellow-500',
  'yellow-600': 'pui-color-yellow-600',
  'yellow-700': 'pui-color-yellow-700',
  'yellow-800': 'pui-color-yellow-800',
  'yellow-900': 'pui-color-yellow-900',
  'green-50': 'pui-color-green-50',
  'green-100': 'pui-color-green-100',
  'green-200': 'pui-color-green-200',
  'green-300': 'pui-color-green-300',
  'green-400': 'pui-color-green-400',
  'green-500': 'pui-color-green-500',
  'green-600': 'pui-color-green-600',
  'green-700': 'pui-color-green-700',
  'green-800': 'pui-color-green-800',
  'green-900': 'pui-color-green-900',
  'blue-50': 'pui-color-blue-50',
  'blue-100': 'pui-color-blue-100',
  'blue-200': 'pui-color-blue-200',
  'blue-300': 'pui-color-blue-300',
  'blue-400': 'pui-color-blue-400',
  'blue-500': 'pui-color-blue-500',
  'blue-600': 'pui-color-blue-600',
  'blue-700': 'pui-color-blue-700',
  'blue-800': 'pui-color-blue-800',
  'blue-900': 'pui-color-blue-900',
  'indigo-50': 'pui-color-indigo-50',
  'indigo-100': 'pui-color-indigo-100',
  'indigo-200': 'pui-color-indigo-200',
  'indigo-300': 'pui-color-indigo-300',
  'indigo-400': 'pui-color-indigo-400',
  'indigo-500': 'pui-color-indigo-500',
  'indigo-600': 'pui-color-indigo-600',
  'indigo-700': 'pui-color-indigo-700',
  'indigo-800': 'pui-color-indigo-800',
  'indigo-900': 'pui-color-indigo-900',
  'purple-50': 'pui-color-purple-50',
  'purple-100': 'pui-color-purple-100',
  'purple-200': 'pui-color-purple-200',
  'purple-300': 'pui-color-purple-300',
  'purple-400': 'pui-color-purple-400',
  'purple-500': 'pui-color-purple-500',
  'purple-600': 'pui-color-purple-600',
  'purple-700': 'pui-color-purple-700',
  'purple-800': 'pui-color-purple-800',
  'purple-900': 'pui-color-purple-900',
  'pink-50': 'pui-color-pink-50',
  'pink-100': 'pui-color-pink-100',
  'pink-200': 'pui-color-pink-200',
  'pink-300': 'pui-color-pink-300',
  'pink-400': 'pui-color-pink-400',
  'pink-500': 'pui-color-pink-500',
  'pink-600': 'pui-color-pink-600',
  'pink-700': 'pui-color-pink-700',
  'pink-800': 'pui-color-pink-800',
  'pink-900': 'pui-color-pink-900',
  'pui-primary': 'pui-color-pui-primary',
  'pui-secondary': 'pui-color-pui-secondary',
  'pui-paragraph-0': 'pui-color-pui-paragraph-0',
  'pui-paragraph-300': 'pui-color-pui-paragraph-300',
  'pui-paragraph-500': 'pui-color-pui-paragraph-500',
  'pui-paragraph-900': 'pui-color-pui-paragraph-900',
  'pui-initial': 'pui-color-pui-initial',
  'pui-placeholder-color': 'pui-color-pui-placeholder-color',
  'pui-error': 'pui-color-pui-error',
  'pui-success': 'pui-color-pui-success'
};

export type ColorMapper = typeof puiColorClassnameMap;

export const textColorClassnameMap: ColorMapper = {
  transparent: 'text-transparent',
  current: 'text-current',
  black: 'text-black',
  white: 'text-white',
  'gray-50': 'text-gray-50',
  'gray-100': 'text-gray-100',
  'gray-200': 'text-gray-200',
  'gray-300': 'text-gray-300',
  'gray-400': 'text-gray-400',
  'gray-500': 'text-gray-500',
  'gray-600': 'text-gray-600',
  'gray-700': 'text-gray-700',
  'gray-800': 'text-gray-800',
  'gray-900': 'text-gray-900',
  'red-50': 'text-red-50',
  'red-100': 'text-red-100',
  'red-200': 'text-red-200',
  'red-300': 'text-red-300',
  'red-400': 'text-red-400',
  'red-500': 'text-red-500',
  'red-600': 'text-red-600',
  'red-700': 'text-red-700',
  'red-800': 'text-red-800',
  'red-900': 'text-red-900',
  'yellow-50': 'text-yellow-50',
  'yellow-100': 'text-yellow-100',
  'yellow-200': 'text-yellow-200',
  'yellow-300': 'text-yellow-300',
  'yellow-400': 'text-yellow-400',
  'yellow-500': 'text-yellow-500',
  'yellow-600': 'text-yellow-600',
  'yellow-700': 'text-yellow-700',
  'yellow-800': 'text-yellow-800',
  'yellow-900': 'text-yellow-900',
  'green-50': 'text-green-50',
  'green-100': 'text-green-100',
  'green-200': 'text-green-200',
  'green-300': 'text-green-300',
  'green-400': 'text-green-400',
  'green-500': 'text-green-500',
  'green-600': 'text-green-600',
  'green-700': 'text-green-700',
  'green-800': 'text-green-800',
  'green-900': 'text-green-900',
  'blue-50': 'text-blue-50',
  'blue-100': 'text-blue-100',
  'blue-200': 'text-blue-200',
  'blue-300': 'text-blue-300',
  'blue-400': 'text-blue-400',
  'blue-500': 'text-blue-500',
  'blue-600': 'text-blue-600',
  'blue-700': 'text-blue-700',
  'blue-800': 'text-blue-800',
  'blue-900': 'text-blue-900',
  'indigo-50': 'text-indigo-50',
  'indigo-100': 'text-indigo-100',
  'indigo-200': 'text-indigo-200',
  'indigo-300': 'text-indigo-300',
  'indigo-400': 'text-indigo-400',
  'indigo-500': 'text-indigo-500',
  'indigo-600': 'text-indigo-600',
  'indigo-700': 'text-indigo-700',
  'indigo-800': 'text-indigo-800',
  'indigo-900': 'text-indigo-900',
  'purple-50': 'text-purple-50',
  'purple-100': 'text-purple-100',
  'purple-200': 'text-purple-200',
  'purple-300': 'text-purple-300',
  'purple-400': 'text-purple-400',
  'purple-500': 'text-purple-500',
  'purple-600': 'text-purple-600',
  'purple-700': 'text-purple-700',
  'purple-800': 'text-purple-800',
  'purple-900': 'text-purple-900',
  'pink-50': 'text-pink-50',
  'pink-100': 'text-pink-100',
  'pink-200': 'text-pink-200',
  'pink-300': 'text-pink-300',
  'pink-400': 'text-pink-400',
  'pink-500': 'text-pink-500',
  'pink-600': 'text-pink-600',
  'pink-700': 'text-pink-700',
  'pink-800': 'text-pink-800',
  'pink-900': 'text-pink-900',
  'pui-primary': 'text-pui-primary',
  'pui-secondary': 'text-pui-secondary',
  'pui-paragraph-0': 'text-pui-paragraph-0',
  'pui-paragraph-300': 'text-pui-paragraph-300',
  'pui-paragraph-500': 'text-pui-paragraph-500',
  'pui-paragraph-900': 'text-pui-paragraph-900',
  'pui-initial': 'text-pui-initial',
  'pui-placeholder-color': 'text-pui-placeholder-color',
  'pui-error': 'text-pui-error',
  'pui-success': 'text-pui-success'
};

/*
    ##################
     Weight Mappers
    ##################
*/

export const fontWeightClassnameMap = {
  thin: 'font-thin',
  extralight: 'font-extralight',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold'
};

export type WeightMapper = typeof fontWeightClassnameMap;

/*
    ##################
     Animation Mappers
    ##################
*/

export const puiAnimateClassnameMap = {
  fadeIn: 'pui-animate-fadeIn',
  fadeUp: 'pui-animate-fadeUp',
  fadeDown: 'pui-animate-fadeDown',
  fadeRight: 'pui-animate-fadeRight',
  fadeLeft: 'pui-animate-fadeLeft'
};

export type AnimationMapper = typeof puiAnimateClassnameMap;

/*
    ##################
     Border style Mappers
    ##################
*/

export const borderStyleClassnameMap = {
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  double: 'border-double',
  none: 'border-none'
};

export type BorderStyleMapper = typeof borderStyleClassnameMap;

/*
    ##################
     Gap Mappers
    ##################
*/

export const puiGapClassnameMap = {
  '0': 'pui-gap-0',
  '1': 'pui-gap-1',
  '2': 'pui-gap-2',
  '3': 'pui-gap-3',
  '4': 'pui-gap-4',
  '5': 'pui-gap-5',
  '6': 'pui-gap-6',
  '7': 'pui-gap-7',
  '8': 'pui-gap-8',
  '9': 'pui-gap-9',
  '10': 'pui-gap-10',
  '11': 'pui-gap-11',
  '12': 'pui-gap-12',
  '14': 'pui-gap-14',
  '16': 'pui-gap-16',
  '20': 'pui-gap-20',
  '24': 'pui-gap-24',
  '28': 'pui-gap-28',
  '32': 'pui-gap-32',
  '36': 'pui-gap-36',
  '40': 'pui-gap-40',
  '44': 'pui-gap-44',
  '48': 'pui-gap-48',
  '52': 'pui-gap-52',
  '56': 'pui-gap-56',
  '60': 'pui-gap-60',
  '64': 'pui-gap-64',
  '72': 'pui-gap-72',
  '80': 'pui-gap-80',
  '96': 'pui-gap-96',
  auto: 'pui-gap-auto',
  px: 'pui-gap-px',
  '0.5': 'pui-gap-0.5',
  '1.5': 'pui-gap-1.5',
  '2.5': 'pui-gap-2.5',
  '3.5': 'pui-gap-3.5',
  '-0': '-pui-gap-0',
  '-1': '-pui-gap-1',
  '-2': '-pui-gap-2',
  '-3': '-pui-gap-3',
  '-4': '-pui-gap-4',
  '-5': '-pui-gap-5',
  '-6': '-pui-gap-6',
  '-7': '-pui-gap-7',
  '-8': '-pui-gap-8',
  '-9': '-pui-gap-9',
  '-10': '-pui-gap-10',
  '-11': '-pui-gap-11',
  '-12': '-pui-gap-12',
  '-14': '-pui-gap-14',
  '-16': '-pui-gap-16',
  '-20': '-pui-gap-20',
  '-24': '-pui-gap-24',
  '-28': '-pui-gap-28',
  '-32': '-pui-gap-32',
  '-36': '-pui-gap-36',
  '-40': '-pui-gap-40',
  '-44': '-pui-gap-44',
  '-48': '-pui-gap-48',
  '-52': '-pui-gap-52',
  '-56': '-pui-gap-56',
  '-60': '-pui-gap-60',
  '-64': '-pui-gap-64',
  '-72': '-pui-gap-72',
  '-80': '-pui-gap-80',
  '-96': '-pui-gap-96',
  '-px': '-pui-gap-px',
  '-0.5': '-pui-gap-0.5',
  '-1.5': '-pui-gap-1.5',
  '-2.5': '-pui-gap-2.5',
  '-3.5': '-pui-gap-3.5'
};

export type GapMapper = typeof puiGapClassnameMap;

export const puiGapXClassnameMap: GapMapper = {
  '0': 'pui-gap-x-0',
  '1': 'pui-gap-x-1',
  '2': 'pui-gap-x-2',
  '3': 'pui-gap-x-3',
  '4': 'pui-gap-x-4',
  '5': 'pui-gap-x-5',
  '6': 'pui-gap-x-6',
  '7': 'pui-gap-x-7',
  '8': 'pui-gap-x-8',
  '9': 'pui-gap-x-9',
  '10': 'pui-gap-x-10',
  '11': 'pui-gap-x-11',
  '12': 'pui-gap-x-12',
  '14': 'pui-gap-x-14',
  '16': 'pui-gap-x-16',
  '20': 'pui-gap-x-20',
  '24': 'pui-gap-x-24',
  '28': 'pui-gap-x-28',
  '32': 'pui-gap-x-32',
  '36': 'pui-gap-x-36',
  '40': 'pui-gap-x-40',
  '44': 'pui-gap-x-44',
  '48': 'pui-gap-x-48',
  '52': 'pui-gap-x-52',
  '56': 'pui-gap-x-56',
  '60': 'pui-gap-x-60',
  '64': 'pui-gap-x-64',
  '72': 'pui-gap-x-72',
  '80': 'pui-gap-x-80',
  '96': 'pui-gap-x-96',
  auto: 'pui-gap-x-auto',
  px: 'pui-gap-x-px',
  '0.5': 'pui-gap-x-0.5',
  '1.5': 'pui-gap-x-1.5',
  '2.5': 'pui-gap-x-2.5',
  '3.5': 'pui-gap-x-3.5',
  '-0': '-pui-gap-x-0',
  '-1': '-pui-gap-x-1',
  '-2': '-pui-gap-x-2',
  '-3': '-pui-gap-x-3',
  '-4': '-pui-gap-x-4',
  '-5': '-pui-gap-x-5',
  '-6': '-pui-gap-x-6',
  '-7': '-pui-gap-x-7',
  '-8': '-pui-gap-x-8',
  '-9': '-pui-gap-x-9',
  '-10': '-pui-gap-x-10',
  '-11': '-pui-gap-x-11',
  '-12': '-pui-gap-x-12',
  '-14': '-pui-gap-x-14',
  '-16': '-pui-gap-x-16',
  '-20': '-pui-gap-x-20',
  '-24': '-pui-gap-x-24',
  '-28': '-pui-gap-x-28',
  '-32': '-pui-gap-x-32',
  '-36': '-pui-gap-x-36',
  '-40': '-pui-gap-x-40',
  '-44': '-pui-gap-x-44',
  '-48': '-pui-gap-x-48',
  '-52': '-pui-gap-x-52',
  '-56': '-pui-gap-x-56',
  '-60': '-pui-gap-x-60',
  '-64': '-pui-gap-x-64',
  '-72': '-pui-gap-x-72',
  '-80': '-pui-gap-x-80',
  '-96': '-pui-gap-x-96',
  '-px': '-pui-gap-x-px',
  '-0.5': '-pui-gap-x-0.5',
  '-1.5': '-pui-gap-x-1.5',
  '-2.5': '-pui-gap-x-2.5',
  '-3.5': '-pui-gap-x-3.5'
};
export const puiGapYClassnameMap: GapMapper = {
  '0': 'pui-gap-y-0',
  '1': 'pui-gap-y-1',
  '2': 'pui-gap-y-2',
  '3': 'pui-gap-y-3',
  '4': 'pui-gap-y-4',
  '5': 'pui-gap-y-5',
  '6': 'pui-gap-y-6',
  '7': 'pui-gap-y-7',
  '8': 'pui-gap-y-8',
  '9': 'pui-gap-y-9',
  '10': 'pui-gap-y-10',
  '11': 'pui-gap-y-11',
  '12': 'pui-gap-y-12',
  '14': 'pui-gap-y-14',
  '16': 'pui-gap-y-16',
  '20': 'pui-gap-y-20',
  '24': 'pui-gap-y-24',
  '28': 'pui-gap-y-28',
  '32': 'pui-gap-y-32',
  '36': 'pui-gap-y-36',
  '40': 'pui-gap-y-40',
  '44': 'pui-gap-y-44',
  '48': 'pui-gap-y-48',
  '52': 'pui-gap-y-52',
  '56': 'pui-gap-y-56',
  '60': 'pui-gap-y-60',
  '64': 'pui-gap-y-64',
  '72': 'pui-gap-y-72',
  '80': 'pui-gap-y-80',
  '96': 'pui-gap-y-96',
  auto: 'pui-gap-y-auto',
  px: 'pui-gap-y-px',
  '0.5': 'pui-gap-y-0.5',
  '1.5': 'pui-gap-y-1.5',
  '2.5': 'pui-gap-y-2.5',
  '3.5': 'pui-gap-y-3.5',
  '-0': '-pui-gap-y-0',
  '-1': '-pui-gap-y-1',
  '-2': '-pui-gap-y-2',
  '-3': '-pui-gap-y-3',
  '-4': '-pui-gap-y-4',
  '-5': '-pui-gap-y-5',
  '-6': '-pui-gap-y-6',
  '-7': '-pui-gap-y-7',
  '-8': '-pui-gap-y-8',
  '-9': '-pui-gap-y-9',
  '-10': '-pui-gap-y-10',
  '-11': '-pui-gap-y-11',
  '-12': '-pui-gap-y-12',
  '-14': '-pui-gap-y-14',
  '-16': '-pui-gap-y-16',
  '-20': '-pui-gap-y-20',
  '-24': '-pui-gap-y-24',
  '-28': '-pui-gap-y-28',
  '-32': '-pui-gap-y-32',
  '-36': '-pui-gap-y-36',
  '-40': '-pui-gap-y-40',
  '-44': '-pui-gap-y-44',
  '-48': '-pui-gap-y-48',
  '-52': '-pui-gap-y-52',
  '-56': '-pui-gap-y-56',
  '-60': '-pui-gap-y-60',
  '-64': '-pui-gap-y-64',
  '-72': '-pui-gap-y-72',
  '-80': '-pui-gap-y-80',
  '-96': '-pui-gap-y-96',
  '-px': '-pui-gap-y-px',
  '-0.5': '-pui-gap-y-0.5',
  '-1.5': '-pui-gap-y-1.5',
  '-2.5': '-pui-gap-y-2.5',
  '-3.5': '-pui-gap-y-3.5'
};

/*
    ##################
     Grid Mappers
    ##################
*/

export const gridColsClassnameMap = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-2',
  '3': 'grid-cols-3',
  '4': 'grid-cols-4',
  '5': 'grid-cols-5',
  '6': 'grid-cols-6',
  '7': 'grid-cols-7',
  '8': 'grid-cols-8',
  '9': 'grid-cols-9',
  '10': 'grid-cols-10',
  '11': 'grid-cols-11',
  '12': 'grid-cols-12',
  none: 'grid-cols-none'
};

export type GridMapper = typeof gridColsClassnameMap;

export const gridRowsClassnameMap: GridMapper = {
  '1': 'grid-rows-1',
  '2': 'grid-rows-2',
  '3': 'grid-rows-3',
  '4': 'grid-rows-4',
  '5': 'grid-rows-5',
  '6': 'grid-rows-6',
  '7': 'grid-rows-7',
  '8': 'grid-rows-8',
  '9': 'grid-rows-9',
  '10': 'grid-rows-10',
  '11': 'grid-rows-11',
  '12': 'grid-rows-12',
  none: 'grid-rows-none'
};

/*
    ##################
     Sizing Mappers
    ##################
*/

export const widthClassnameMap = {
  '0': 'w-0',
  '1': 'w-1',
  '2': 'w-2',
  '3': 'w-3',
  '4': 'w-4',
  '5': 'w-5',
  '6': 'w-6',
  '7': 'w-7',
  '8': 'w-8',
  '9': 'w-9',
  '10': 'w-10',
  '11': 'w-11',
  '12': 'w-12',
  '14': 'w-14',
  '16': 'w-16',
  '20': 'w-20',
  '24': 'w-24',
  '28': 'w-28',
  '32': 'w-32',
  '36': 'w-36',
  '40': 'w-40',
  '44': 'w-44',
  '48': 'w-48',
  '52': 'w-52',
  '56': 'w-56',
  '60': 'w-60',
  '64': 'w-64',
  '72': 'w-72',
  '80': 'w-80',
  '96': 'w-96',
  auto: 'w-auto',
  px: 'w-px',
  '0.5': 'w-0.5',
  '1.5': 'w-1.5',
  '2.5': 'w-2.5',
  '3.5': 'w-3.5',
  '1/2': 'w-1/2',
  '1/3': 'w-1/3',
  '2/3': 'w-2/3',
  '1/4': 'w-1/4',
  '2/4': 'w-2/4',
  '3/4': 'w-3/4',
  '1/5': 'w-1/5',
  '2/5': 'w-2/5',
  '3/5': 'w-3/5',
  '4/5': 'w-4/5',
  '1/6': 'w-1/6',
  '2/6': 'w-2/6',
  '3/6': 'w-3/6',
  '4/6': 'w-4/6',
  '5/6': 'w-5/6',
  '1/12': 'w-1/12',
  '2/12': 'w-2/12',
  '3/12': 'w-3/12',
  '4/12': 'w-4/12',
  '5/12': 'w-5/12',
  '6/12': 'w-6/12',
  '7/12': 'w-7/12',
  '8/12': 'w-8/12',
  '9/12': 'w-9/12',
  '10/12': 'w-10/12',
  '11/12': 'w-11/12',
  full: 'w-full',
  screen: 'w-screen',
  min: 'w-min',
  max: 'w-max'
};

export type SizingMapper = typeof widthClassnameMap;

export const heightClassnameMap: SizingMapper = {
  '0': 'h-0',
  '1': 'h-1',
  '2': 'h-2',
  '3': 'h-3',
  '4': 'h-4',
  '5': 'h-5',
  '6': 'h-6',
  '7': 'h-7',
  '8': 'h-8',
  '9': 'h-9',
  '10': 'h-10',
  '11': 'h-11',
  '12': 'h-12',
  '14': 'h-14',
  '16': 'h-16',
  '20': 'h-20',
  '24': 'h-24',
  '28': 'h-28',
  '32': 'h-32',
  '36': 'h-36',
  '40': 'h-40',
  '44': 'h-44',
  '48': 'h-48',
  '52': 'h-52',
  '56': 'h-56',
  '60': 'h-60',
  '64': 'h-64',
  '72': 'h-72',
  '80': 'h-80',
  '96': 'h-96',
  auto: 'h-auto',
  px: 'h-px',
  '0.5': 'h-0.5',
  '1.5': 'h-1.5',
  '2.5': 'h-2.5',
  '3.5': 'h-3.5',
  '1/2': 'h-1/2',
  '1/3': 'h-1/3',
  '2/3': 'h-2/3',
  '1/4': 'h-1/4',
  '2/4': 'h-2/4',
  '3/4': 'h-3/4',
  '1/5': 'h-1/5',
  '2/5': 'h-2/5',
  '3/5': 'h-3/5',
  '4/5': 'h-4/5',
  '1/6': 'h-1/6',
  '2/6': 'h-2/6',
  '3/6': 'h-3/6',
  '4/6': 'h-4/6',
  '5/6': 'h-5/6',
  '1/12': 'h-1/12',
  '2/12': 'h-2/12',
  '3/12': 'h-3/12',
  '4/12': 'h-4/12',
  '5/12': 'h-5/12',
  '6/12': 'h-6/12',
  '7/12': 'h-7/12',
  '8/12': 'h-8/12',
  '9/12': 'h-9/12',
  '10/12': 'h-10/12',
  '11/12': 'h-11/12',
  full: 'h-full',
  screen: 'h-screen',
  min: 'h-min',
  max: 'h-max'
};

/*
    ##################
     Clamp Mappers
    ##################
*/

export const clampClassnameMap = {
  none: 'line-clamp-none',
  '1': 'line-clamp-1',
  '2': 'line-clamp-2',
  '3': 'line-clamp-3',
  '4': 'line-clamp-4',
  '5': 'line-clamp-5',
  '6': 'line-clamp-6'
};

export type ClampMapper = typeof clampClassnameMap;

/*
    ##################
     Min Width Mappers
    ##################
*/

// min-w-
export const minWidthClassnameMap = {
  '0': 'min-w-0',
  '1': 'min-w-1',
  '2': 'min-w-2',
  '3': 'min-w-3',
  '4': 'min-w-4',
  '5': 'min-w-5',
  '6': 'min-w-6',
  '7': 'min-w-7',
  '8': 'min-w-8',
  '9': 'min-w-9',
  '10': 'min-w-10',
  '11': 'min-w-11',
  '12': 'min-w-12',
  '14': 'min-w-14',
  '16': 'min-w-16',
  '20': 'min-w-20',
  '24': 'min-w-24',
  '28': 'min-w-28',
  '32': 'min-w-32',
  '36': 'min-w-36',
  '40': 'min-w-40',
  '44': 'min-w-44',
  '48': 'min-w-48',
  '52': 'min-w-52',
  '56': 'min-w-56',
  '60': 'min-w-60',
  '64': 'min-w-64',
  '72': 'min-w-72',
  '80': 'min-w-80',
  '96': 'min-w-96',
  full: 'min-w-full',
  min: 'min-w-min',
  max: 'min-w-max',
  auto: 'min-w-auto',
  px: 'min-w-px',
  '0.5': 'min-w-0.5',
  '1.5': 'min-w-1.5',
  '2.5': 'min-w-2.5',
  '3.5': 'min-w-3.5',
  '1/2vw': 'min-w-1/2vw',
  '1/3vw': 'min-w-1/3vw',
  '2/3vw': 'min-w-2/3vw',
  '1/4vw': 'min-w-1/4vw',
  '2/4vw': 'min-w-2/4vw',
  '3/4vw': 'min-w-3/4vw',
  '1/5vw': 'min-w-1/5vw',
  '2/5vw': 'min-w-2/5vw',
  '3/5vw': 'min-w-3/5vw',
  '4/5vw': 'min-w-4/5vw',
  '1/6vw': 'min-w-1/6vw',
  '2/6vw': 'min-w-2/6vw',
  '3/6vw': 'min-w-3/6vw',
  '4/6vw': 'min-w-4/6vw',
  '5/6vw': 'min-w-5/6vw',
  '1/12vw': 'min-w-1/12vw',
  '2/12vw': 'min-w-2/12vw',
  '3/12vw': 'min-w-3/12vw',
  '4/12vw': 'min-w-4/12vw',
  '5/12vw': 'min-w-5/12vw',
  '6/12vw': 'min-w-6/12vw',
  '7/12vw': 'min-w-7/12vw',
  '8/12vw': 'min-w-8/12vw',
  '9/12vw': 'min-w-9/12vw',
  '10/12vw': 'min-w-10/12vw',
  '11/12vw': 'min-w-11/12vw',
  'screen-90': 'min-w-screen-90',
  screen: 'min-w-screen',
  initial: 'min-w-initial'
};

export type MinWidthMapper = typeof minWidthClassnameMap;

// {
//   "colorOptions": [
//     "transparent",
//     "current",
//     "black",
//     "white",
//     "gray-50",
//     "gray-100",
//     "gray-200",
//     "gray-300",
//     "gray-400",
//     "gray-500",
//     "gray-600",
//     "gray-700",
//     "gray-800",
//     "gray-900",
//     "red-50",
//     "red-100",
//     "red-200",
//     "red-300",
//     "red-400",
//     "red-500",
//     "red-600",
//     "red-700",
//     "red-800",
//     "red-900",
//     "yellow-50",
//     "yellow-100",
//     "yellow-200",
//     "yellow-300",
//     "yellow-400",
//     "yellow-500",
//     "yellow-600",
//     "yellow-700",
//     "yellow-800",
//     "yellow-900",
//     "green-50",
//     "green-100",
//     "green-200",
//     "green-300",
//     "green-400",
//     "green-500",
//     "green-600",
//     "green-700",
//     "green-800",
//     "green-900",
//     "blue-50",
//     "blue-100",
//     "blue-200",
//     "blue-300",
//     "blue-400",
//     "blue-500",
//     "blue-600",
//     "blue-700",
//     "blue-800",
//     "blue-900",
//     "indigo-50",
//     "indigo-100",
//     "indigo-200",
//     "indigo-300",
//     "indigo-400",
//     "indigo-500",
//     "indigo-600",
//     "indigo-700",
//     "indigo-800",
//     "indigo-900",
//     "purple-50",
//     "purple-100",
//     "purple-200",
//     "purple-300",
//     "purple-400",
//     "purple-500",
//     "purple-600",
//     "purple-700",
//     "purple-800",
//     "purple-900",
//     "pink-50",
//     "pink-100",
//     "pink-200",
//     "pink-300",
//     "pink-400",
//     "pink-500",
//     "pink-600",
//     "pink-700",
//     "pink-800",
//     "pink-900",
//     "pui-primary",
//     "pui-secondary",
//     "pui-paragraph-0",
//     "pui-paragraph-300",
//     "pui-paragraph-500",
//     "pui-paragraph-900",
//     "pui-initial",
//     "pui-placeholder-color",
//     "pui-error",
//     "pui-success",
//   ],
//   "weightOptions": [
//     "thin",
//     "extralight",
//     "light",
//     "normal",
//     "medium",
//     "semibold",
//     "bold",
//     "extrabold",
//     "black"
//   ],
//   "borderStyleOptions": [
//     "dashed",
//     "dotted",
//     "double",
//     "none"
//   ],
//   "fontSizeOptions": [
//     "xs",
//     "sm",
//     "base",
//     "lg",
//     "xl",
//     "2xl",
//     "3xl",
//     "4xl",
//     "5xl",
//     "6xl",
//     "7xl",
//     "8xl",
//     "9xl"
//   ],
//   "widthHeightOptions": [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "14",
//     "16",
//     "20",
//     "24",
//     "28",
//     "32",
//     "36",
//     "40",
//     "44",
//     "48",
//     "52",
//     "56",
//     "60",
//     "64",
//     "72",
//     "80",
//     "96",
//     "auto",
//     "px",
//     "0.5",
//     "1.5",
//     "2.5",
//     "3.5",
//     "1/2",
//     "1/3",
//     "2/3",
//     "1/4",
//     "2/4",
//     "3/4",
//     "1/5",
//     "2/5",
//     "3/5",
//     "4/5",
//     "1/6",
//     "2/6",
//     "3/6",
//     "4/6",
//     "5/6",
//     "1/12",
//     "2/12",
//     "3/12",
//     "4/12",
//     "5/12",
//     "6/12",
//     "7/12",
//     "8/12",
//     "9/12",
//     "10/12",
//     "11/12",
//     "full",
//     "screen",
//     "min",
//     "max"
//   ],
//   "clampOptions": [
//     "none",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6"
//   ],
//   "minWidthOptions": [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "14",
//     "16",
//     "20",
//     "24",
//     "28",
//     "32",
//     "36",
//     "40",
//     "44",
//     "48",
//     "52",
//     "56",
//     "60",
//     "64",
//     "72",
//     "80",
//     "96",
//     "full",
//     "min",
//     "max",
//     "auto",
//     "px",
//     "0.5",
//     "1.5",
//     "2.5",
//     "3.5",
//     "1/2vw",
//     "1/3vw",
//     "2/3vw",
//     "1/4vw",
//     "2/4vw",
//     "3/4vw",
//     "1/5vw",
//     "2/5vw",
//     "3/5vw",
//     "4/5vw",
//     "1/6vw",
//     "2/6vw",
//     "3/6vw",
//     "4/6vw",
//     "5/6vw",
//     "1/12vw",
//     "2/12vw",
//     "3/12vw",
//     "4/12vw",
//     "5/12vw",
//     "6/12vw",
//     "7/12vw",
//     "8/12vw",
//     "9/12vw",
//     "10/12vw",
//     "11/12vw",
//     "screen-90",
//     "screen",
//     "initial"
//   ],
//   "marginPaddingOptions": [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "14",
//     "16",
//     "20",
//     "24",
//     "28",
//     "32",
//     "36",
//     "40",
//     "44",
//     "48",
//     "52",
//     "56",
//     "60",
//     "64",
//     "72",
//     "80",
//     "96",
//     "auto",
//     "px",
//     "0.5",
//     "1.5",
//     "2.5",
//     "3.5",
//     "-0",
//     "-1",
//     "-2",
//     "-3",
//     "-4",
//     "-5",
//     "-6",
//     "-7",
//     "-8",
//     "-9",
//     "-10",
//     "-11",
//     "-12",
//     "-14",
//     "-16",
//     "-20",
//     "-24",
//     "-28",
//     "-32",
//     "-36",
//     "-40",
//     "-44",
//     "-48",
//     "-52",
//     "-56",
//     "-60",
//     "-64",
//     "-72",
//     "-80",
//     "-96",
//     "-px",
//     "-0.5",
//     "-1.5",
//     "-2.5",
//     "-3.5"
//   ],
//   "gridColumnOptions": [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "none",
//     null
//   ],
//   "gridRowOptions": [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "none",
//     null
//   ]
// }
