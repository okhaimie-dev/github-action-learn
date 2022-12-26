import { Component } from 'react'
import '../styles/globals.css'


function Test({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}

export default Test;