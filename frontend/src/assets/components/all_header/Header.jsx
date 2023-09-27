import React from 'react'

export default function Header(props) {
  return (
    <header className='all-header grid'>
        <div className='content-all-header grid self-center m-auto'>
            <h1>{props.content}</h1>
        </div>
    </header>
  )
}
