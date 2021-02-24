// Ref: https://tailwindcss.com/docs/presets#creating-a-preset
module.exports = {
  // Ref: https://tailwindcss.com/docs/hover-focus-and-other-states#default-variants-reference
  variants: {
    'pui-placeholder-color': ['after'],
    extend: {
      backgroundColor: ['after']
    }
  },
  // Default theme: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7
  theme: {
    extend: {
      colors: {
        // Theme colors:
        'pui-primary': 'var(--pui-primary, #00BF6F)',
        'pui-secondary': 'var(--pui-secondary, #2A3C47)',
        'pui-paragraph': {
          0: 'var(--pui-paragraph-0, #fff)',
          300: 'var(--pui-paragraph-300, #ABABAB)',
          500: 'var(--pui-paragraph-500, #666666)',
          900: 'var(--pui-paragraph-900, #333333)'
        },
        // --------------- Colors under this are not theme related, and only are here so tailwind can generate helpers for them
        // Add a reset color
        'pui-initial': 'initial',
        // Adds a "placeholder" color option so it can be replaced
        'pui-placeholder-color': 'var(--pui-placeholder-color, var(--pui-primary, #00BF6F))',
        // #EF4444 = Tailwind's red-500
        'pui-error': 'var(--pui-error-color, #EF4444)',
        // #34D399 = Tailwind's green-400
        'pui-success': 'var(--pui-success-color, #34D399)'
      },
      keyframes: {
        fadeInto: {
          to: {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        fadeIn: {
          to: {
            opacity: '1'
          }
        },
        skeletonBackground: {
          from: {
            backgroundPosition: '100vw'
          },
          to: {
            backgroundPosition: '0vw'
          }
        }
      },
      /**
       * Returns the minWidth values
       *
       * @param theme the provided tailwind theme
       */
      minWidth: (theme) => ({
        auto: 'auto',
        ...theme('spacing'),
        // Adds defaults with related percentages of screen width.
        // The percentage values are the same default percentage values of tailwind's width values. But with vw(view width) instead of %
        // Ref: https://github.com/tailwindlabs/tailwindcss/blob/e2fcb92b1be0bf2429c90f223aa98aff741660d7/stubs/defaultConfig.stub.js#L675
        '1/2vw': '50vw',
        '1/3vw': '33.333333vw',
        '2/3vw': '66.666667vw',
        '1/4vw': '25vw',
        '2/4vw': '50vw',
        '3/4vw': '75vw',
        '1/5vw': '20vw',
        '2/5vw': '40vw',
        '3/5vw': '60vw',
        '4/5vw': '80vw',
        '1/6vw': '16.666667vw',
        '2/6vw': '33.333333vw',
        '3/6vw': '50vw',
        '4/6vw': '66.666667vw',
        '5/6vw': '83.333333vw',
        '1/12vw': '8.333333vw',
        '2/12vw': '16.666667vw',
        '3/12vw': '25vw',
        '4/12vw': '33.333333vw',
        '5/12vw': '41.666667vw',
        '6/12vw': '50vw',
        '7/12vw': '58.333333vw',
        '8/12vw': '66.666667vw',
        '9/12vw': '75vw',
        '10/12vw': '83.333333vw',
        '11/12vw': '91.666667vw',
        full: '100%',
        'screen-90': '90vw',
        screen: '100vw',
        min: 'min-content',
        max: 'max-content',
        initial: 'initial'
      }),
      height: {
        '5/12vh': '41.666667vh'
      },
      /**
       * Extends tailwind typography
       *
       * @param theme the provided tailwind theme
       */
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.pui-paragraph.500'),
            'ul > li::before': {
              backgroundColor: theme('colors.pui-paragraph.500')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('../plugins/afterVariantPlugin'),
    require('../plugins/varPlaceholderColorPlugin'),
    require('../plugins/gapPlugin')
  ]
};
