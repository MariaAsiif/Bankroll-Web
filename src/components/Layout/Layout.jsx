import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer.jsx/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {
                children
            }
            <div className=''>
                <Footer />
            </div>
        </div>
    )
}

export default Layout