import React from "react"
// tslint:disable-next-line: no-unused-variable
import { /* Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image,*/ Tabs , Tab } from "@nextui-org/react"
import Clasification from "./Clasification"
import Round from "./Round"
import Teams from "./Teams"
import Players from "./Players"
function TabsComponent() {

  const tabs = ['Clasificación', 'Jornadas', 'Equipos', 'Jugadores']
  
  return (

    <Tabs className="mt-4 mb-2 grid justiy-center">
    {
      tabs.map((tab, index) => {
        let component
        switch (tab) {
          case 'Clasificación':
            component = <Clasification/>
            break;
          case 'Jornadas':
            component = <Round/>;
            break;
          case 'Equipos':
            component = <Teams/>;
            break;
          case 'Jugadores':
            component = <Players/>;
            break;
          default:
            component = null;
        }
        return (
          <Tab key={index} title={tab}>
            { component }
          </Tab>
        )
      })
    }
  </Tabs>
  
)

    // <Navbar maxWidth="full" className="bg-inherit">
    //   <NavbarBrand className="cursor-pointer" onClick={clickHandler}>
    //     <Image
    //     src={ImageLogo}
    //     alt='Padel Logo'
    //     width={50}
    //     height={50}
    //     /> 
    //     TUKI LEAGUE
    //   </NavbarBrand>
    //   <NavbarContent justify='center'>
    //     <NavbarItem isActive>
    //       <Link className="color-link" href="/clasification">Clasificación</Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //     <Link className="color-link" href="/round">Jornadas</Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //     <Link className="color-link" href="/teams">Equipos</Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //     <Link className="color-link" href="/players">Jugadores</Link>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarContent justify="end">
    //     <NavbarItem className="hidden lg:flex">
    //       <Link href="#">Login</Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Button as={Link} color="primary" href="#" variant="flat">
    //         Sign Up
    //       </Button>
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>
}

export default TabsComponent