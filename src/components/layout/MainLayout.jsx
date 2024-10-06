import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function MainLayout({children}) {
  return (
    <div className='min-h-[100vh]'>
      <Header/>
      <div className='flex flex-row h-[100vh]'>
        <Sidebar/>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
