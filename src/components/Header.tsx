import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react"
import ImageLogo from '../assets/img/padel.png'
function Header() {

  return (
    <Navbar maxWidth="full" className="bg-inherit w-max">
      <Image
        src={ImageLogo}
        alt='Padel Logo'
        width={50}
        height={50}
      />
      <NavbarBrand>TUKI LEAGUE</NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem isActive>Clasificación</NavbarItem>
        <NavbarItem>Jornadas</NavbarItem>
        <NavbarItem>Equipos</NavbarItem>
        <NavbarItem>Jugadores</NavbarItem>
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