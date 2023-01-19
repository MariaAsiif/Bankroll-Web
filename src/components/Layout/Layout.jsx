import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer.jsx/Footer'

const Layout = ({ children }) => {
    return (
        <div className='relative' >
            <Header />
            {
                children
            }
            <div className='fixed bottom-0'>
                <Footer />
            </div>
        </div>
    )
}

export default Layout