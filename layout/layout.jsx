import React from 'react'
import Footer from './footer'
import Nav from './nav'

const Layout = ({children, dark}) => {

  return (
    <>
        <Nav/>
        <main>
            {children}
        </main>
        { window.location.pathname !== "/join" && <Footer/>}
    </>
  )
}

export default Layout