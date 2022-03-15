// Ref: https://tailwindcss.com/docs/presets#creating-a-preset
module.exports = {
  // Default theme: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7
  theme: {
    extend: {
      colors: {
        // Theme colors:
        'pui-primary': 'var(--pui-primary, #00BF6F)',
        'pui-secondary': 'var(--pui-secondary, #2A3C47)',
        'pui-paragraph': {
          // White text color, to use on primary/secondary backgrounds
          0: 'var(--pui-paragraph-0, #fff)',
          // Ligher, placeholder, blockquote text color
          300: 'var(--pui-paragraph-300, #ABABAB)',
          // Default text color
          500: 'var(--pui-paragraph-500, #666666)',
          // Title and bolder color
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
        'fade-into': {
          from: {
            opacity: '0'
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'fade-in': {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        'skeleton-background': {
          from: {
            backgroundPosition: '100vw'
          },
          to: {
            backgroundPosition: '0vw'
          }
        }
      },
      animation: {
        'fade-into': 'fade-into 0.5s ease-out 0s both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'skeleton-background': 'skeleton-background 2s ease infinite, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
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
      /**
       * Returns the minHeight values
       *
       * @param theme the provided tailwind theme
       */
      minHeight: (theme) => ({
        auto: 'auto',
        ...theme('spacing')
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
        // Default styling: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
        DEFAULT: {
          css: {
            // The default color
            color: theme('colors.pui-paragraph.500'),
            a: {
              color: theme('colors.pui-primary'),
              '&:hover': { color: theme('colors.pui-secondary') },
              '&:visited': { color: theme('colors.pui-secondary') }
            },
            strong: {
              color: theme('colors.pui-paragraph.900')
            },
            blockquote: {
              color: theme('colors.pui-paragraph.300')
            },
            h1: {
              color: theme('colors.pui-paragraph.900')
            },
            h2: {
              color: theme('colors.pui-paragraph.900')
            },
            h3: {
              color: theme('colors.pui-paragraph.900')
            },
            h4: {
              color: theme('colors.pui-paragraph.900')
            },
            'figure figcaption': {
              color: theme('colors.pui-paragraph.300')
            },
            code: {
              color: theme('colors.pui-paragraph.900')
            },
            'a code': {
              color: theme('colors.pui-paragraph.900')
            },
            pre: {
              color: theme('colors.pui-paragraph.300')
            },
            thead: {
              color: theme('colors.pui-paragraph.900')
            },
            // The color of the ol numbers
            'ol > li::before': {
              color: theme('colors.pui-paragraph.900'),
              fontWeight: '600'
            },
            // The color of the li bullets
            'ul > li::before': {
              backgroundColor: theme('colors.pui-paragraph.900')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('../plugins/varPlaceholderColorPlugin'),
    require('../plugins/gapPlugin')
  ]
};
