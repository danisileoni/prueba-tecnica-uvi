import { Bar, LogoNav } from "./NavBar/index"

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light sticky-top'>
      <LogoNav/>

      <Bar/>
    </nav>
  )
}