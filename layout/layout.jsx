import React from 'react'
import Footer from './footer'
import Nav from './nav'

const Layout = ({children}) => {
  return (
    <>
        <Nav/>
        <main>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout