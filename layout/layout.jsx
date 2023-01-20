import React from 'react'
import Footer from './footer'
import Nav from './nav'
import { useRouter } from 'next/navigation';

const Layout = ({children, dark, noFooter}) => {
  const router = useRouter();
  console.log(router.pathname)

  return (
    <>
        <Nav/>
        <main>
            {children}
        </main>
        { !noFooter && <Footer/>}
    </>
  )
}

export default Layout