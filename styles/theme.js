import { extendTheme, useBreakpoint } from '@chakra-ui/react'

const components = {
    Heading:{
        lineHeight: "107%"
    },
    Text:{
        lineHeight: "160%"
    },
    Link: {
        textDecoration: "none"
    }
}

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
    xlDesktop: '125em',
    lgDesktop: '90em',
    smDesktop: '64en',
    tablet:'48em',
    phone: '27em'
}

const colors = {
    colorBlue: "#4678EF",
    bgLight: "#F9F9F9",
    bgDark: "#141517",
    textDark: "#1C1D20",
    textLight: "#FFFFFF",
    colorRed: "#FF0F0F",
    colorDark: "#141517",
    lightGrey: "rgba(28, 29, 32, 0.2)"
}

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

const styles = {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: colors.textDark,
        bg: colors.bgLight,
        lineHeight: '150%',
        minHeight: '100%',
        width: '100%',
        letterSpacing: '3%'
      },
      '*, *::before, &::after': {
        margin: 0,
        padding: 0
      },
      a: { textDecoration: 'none' },
      main: { width: '100%', minHeight: '100vh' }
    }),
}
  
const customTheme = extendTheme({
    components,
    colors,
    fontSizes,
    breakpoints,
    styles,
    ...spacing
})

export default customTheme