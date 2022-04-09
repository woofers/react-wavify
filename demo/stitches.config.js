import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      primary: '#bf8855',
      primaryHover: '#bf8855e6',
      secondary: '#fadc96',
      blue: '#5e9ef1',
      darkBlue: '#3268ce',
      selection: '#fff9cc'
    },
    fonts: {
      title: `'Quicksand', sans-serif`,
      body: `'Trap', sans-serif`
    },
    space: {

    },
    sizes: {

    },
    fontSizes: {

    },
    fontWeights: {

    },
    lineHeights: {

    },
    letterSpacings: {

    },
    radii: {
      1: '3px',
      2: '4px',
      3: '8px',
      4: '16px',
      round: '50%',
      pill: '9999px'
    },
    shadows: {

    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999'
    },
  },
  media: {
    xsm: '(min-width: 405px)',
    sm: '(min-width: 550px)',
    motion: '(prefers-reduced-motion)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)'
  },
  utils: {
    p: value => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value
    }),
    pt: value => ({
      paddingTop: value
    }),
    pr: value => ({
      paddingRight: value
    }),
    pb: value => ({
      paddingBottom: value
    }),
    pl: value => ({
      paddingLeft: value
    }),
    px: value => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: value => ({
      paddingTop: value,
      paddingBottom: value
    }),
    m: value => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value
    }),
    mt: value => ({
      marginTop: value
    }),
    mr: value => ({
      marginRight: value
    }),
    mb: value => ({
      marginBottom: value
    }),
    ml: value => ({
      marginLeft: value
    }),
    mx: value => ({
      marginLeft: value,
      marginRight: value
    }),
    my: value => ({
      marginTop: value,
      marginBottom: value
    }),

    ta: value => ({ textAlign: value }),

    fd: value => ({ flexDirection: value }),
    fw: value => ({ flexWrap: value }),

    ai: value => ({ alignItems: value }),
    ac: value => ({ alignContent: value }),
    jc: value => ({ justifyContent: value }),
    as: value => ({ alignSelf: value }),
    fg: value => ({ flexGrow: value }),
    fs: value => ({ flexShrink: value }),
    fb: value => ({ flexBasis: value }),

    bc: value => ({
      backgroundColor: value
    }),

    br: value => ({
      borderRadius: value
    }),
    btrr: value => ({
      borderTopRightRadius: value
    }),
    bbrr: value => ({
      borderBottomRightRadius: value
    }),
    bblr: value => ({
      borderBottomLeftRadius: value
    }),
    btlr: value => ({
      borderTopLeftRadius: value
    }),

    bs: value => ({ boxShadow: value }),

    lh: value => ({ lineHeight: value }),

    ox: value => ({ overflowX: value }),
    oy: value => ({ overflowY: value }),

    pe: value => ({ pointerEvents: value }),
    us: value => ({ WebkitUserSelect: value, userSelect: value }),

    size: value => ({
      width: value,
      height: value
    }),

    linearGradient: value => ({
      backgroundImage: `linear-gradient(${value})`
    }),

    appearance: value => ({
      WebkitAppearance: value,
      appearance: value
    }),
    userSelect: value => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    backgroundClip: value => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    })
  }
})
