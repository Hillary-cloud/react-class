import React from 'react'



const menuItems = [
  {id: 1, links: 'Home', url: '/'},
  {id: 2, links: 'About', url: '/about'},
  {id: 3, links: 'Contact', url: '/contact'},
  {id: 4, links: 'Services', url: '/services'}
]
const Header = () => {

  return (
    <div style={{display: 'flex', gap: '10px'}}>
     {
      menuItems.map((menuItem) => (
        <p key={menuItem.id}><a href={menuItem.url}>{menuItem.links}</a></p>
      ))
     }
    </div>
  )
}

export default Header
