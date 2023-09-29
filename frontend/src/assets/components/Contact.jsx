import React from 'react'
import Header from './all_header/Header'
import Content from './contact/Content'
import Footer from './Footer'
import Contact_info from './contact/Contact_info'

export default function Contact() {
  return (
    <>
    <Header content='Contact'/>
    <Contact_info />
    <Content />
    <Footer />

    </>
  )
}
