import React from 'react'
import ThemeToggle from '../ThemeToggle'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 min-w-[100%] flex flex-row justify-between">
      <h1>Dashboard Header</h1>
      <ThemeToggle/>
    </header>
  )
}
