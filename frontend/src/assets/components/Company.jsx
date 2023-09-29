import React from 'react'
import Header from './all_header/Header'
import Content from './company/Content'
import Footer from './Footer'
import Gallery from './company/Gallery'

export default function Company() {
  return (
    <>
      <Header content="Company"/>
      <Content />
      <Gallery />
      <Footer />
    </>
  )
}
