import { extendTheme, defineStyleConfig } from '@chakra-ui/react'


const spacing = {
    space:{
        wrapSm: '1.25rem',
        wrap1Sm: '1.25rem',
        wrapMd: '2.5rem',
        wrap2Md: '10rem',
        wrapLg: '4vw',
        wrap2Lg: '16.6vw',
        wrapXLg: '60px',
        wrap2XLg: 'calc(50vw - 480px)'  ,
        wrapXXLg: '4vw',
        wrap2XXLg: '18.75vw' 
    }
};

const fontSizes = {
    bodySm: '16px',
    bodyMd: '20px',
    bodyLg: '27px',
    headingXLarge: '160px',
    headingLarge: '96px',
    headingMedium: '75px',
    headingSmall: '54px',
    headingXSmall: '36px',
    subHeadingXLarge: '80px',
    subHeadingLarge: '65px',
    subHeadingMedium: '50px',
    subHeadingSmall: '36px',
    subHeadingXSmall: '28px',
}

const breakpoints = {
    xxlDesktop: '156.25em',
    xlDesktop: '125em',
    lgDesktop: '90em',
    mdDesktop: '75em',
    smDesktop: '64em',
    lgTablet: '56.25em',
    smTablet: '37.5em',
    tablet:'48em',
    phone: '27em'
}

const fonts = {
    heading: `'Raleway', sans-serif`,
    body: `'Open Sans', sans-serif`,
}

const colors = {
    colorBlue: "#4678EF",
    bgLight: "#F9F9F9",
    bgDark: "#141517",
    textDark: "#1C1D20",
    textLight: "#FFFFFF",
    colorRed: "#FF0F0F",
    colorDark: "#141517",
    colorWhite: "#FFFFFF",
    lightGrey: "rgba(28, 29, 32, 0.2)",
    colorLight: "rgba(255, 255, 255, 0.2)"
}

// const Container = defineStyleConfig({
  
//   baseStyle: {
//     width: '100%',
//     mx: 'auto',
//     maxW: "2000px",
//     pt:20
//   },

//   sizes: {
//     base: {
//       fontSize: 'md',
//       px: spacing.space.wrap1Sm, 
//     },
//     md: {
//         pt: 36,
//         px: spacing.space.wrapMd, 
//     },
//     lg:{

//     }
//   },
//   defaultProps: {
//     size: 'md'
//   },
// })

const components = {
    Heading:{
        lineHeight: "100%",
        fontFamily: fonts.heading,
    },
    Text:{
        lineHeight: "160%",
    },
    Link: {
        textDecoration: "none"
    },
    Button:{
        outline: 'none',
        appearance: 'none'
    },
    // Container
}





const styles = {
    global: (props) => ({
        html:{
            lineHeight: 1.15
        },
        body: {
            fontFamily: fonts.body,
            color: colors.textDark,
            bg: colors.bgLight,
            lineHeight: '160%',
            minHeight: '100%',
            width: '100%',
            fontSize: 'clamp(16px, 1.2vw, 25px)'
        },
        '*, *::before, &::after': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
        },
        a: { textDecoration: 'none' },
        main: { 
            width: '100%', minHeight: '100vh'
        },
        section: {width: '100%'},
        h1:{ fontWeight: '300 !important'},
        h2:{ fontWeight: '400'},
        //   'figure > *': {width: '100%'}
    }),
}

  
const customTheme = extendTheme({
    components,
    colors,
    fontSizes,
    breakpoints,
    styles,
    fonts,
    ...spacing
})

export default customTheme