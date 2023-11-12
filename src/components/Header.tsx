import React from "react"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import ImageLogo from '../assets/img/padel.png'
function Header() {

  const navigate = useNavigate()
  function clickHandler() {
    navigate('/')
  }
  return (
    <Navbar maxWidth="full" className="bg-inherit">
      <NavbarBrand className="cursor-pointer" onClick={clickHandler}>
        <Image
        src={ImageLogo}
        alt='Padel Logo'
        width={50}
        height={50}
        /> 
        TUKI LEAGUE
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem isActive>
          <Link className="color-link" href="/clasification">Clasificación</Link>
        </NavbarItem>
        <NavbarItem>
        <Link className="color-link" href="/round">Jornadas</Link>
        </NavbarItem>
        <NavbarItem>
        <Link className="color-link" href="/teams">Equipos</Link>
        </NavbarItem>
        <NavbarItem>
        <Link className="color-link" href="/players">Jugadores</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )

}

export default Header