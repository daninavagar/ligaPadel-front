import React from "react";
import { useState } from "react";
import TabsComponent from './components/TabsComponent'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

export default function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeTab, setActiveTab] = useState('/clasification')

  // const menuItems = [
  //   "Clasificación",
  //   "Jornadas",
  //   "Equipos",
  //   "Jugadores",
  //   "Log Out",
  // ];

  return (
    // <Navbar className="bg-inherit" onMenuOpenChange={setIsMenuOpen} isBordered>
    //   <NavbarContent>
    //     <NavbarMenuToggle
    //       aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    //       className="sm:hidden"
    //     />
    //     <NavbarBrand>
    //       <h1>EGUL</h1>
    //     </NavbarBrand>
    //   </NavbarContent>

    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     <NavbarItem isActive={activeTab === '/clasification'}>
    //       <Link href="/clasification" onClick={() => {console.log("hacia el home");
    //        setActiveTab('/clasification')}}>
    //         Clasificación
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem isActive={activeTab === '/round'}>
    //       <Link href="/round" onClick={() => {console.log("hacia el round"); setActiveTab('/round')}}>
    //         Jornadas
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="primary" href="#">
    //         Equipos
    //       </Link>
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
    //   <NavbarMenu className="bg-inherit">
    //     {menuItems.map((item, index) => (
    //       <NavbarMenuItem key={`${item}-${index}`}>
    //         <Link
    //           color="primary"
    //           className="w-full"
    //           href="#"
    //           size="lg"
    //         >
    //           {item}
    //         </Link>
    //       </NavbarMenuItem>
    //     ))}
    //   </NavbarMenu>
    // </Navbar>

    <BrowserRouter>
    <h1>Hola</h1>
          <Routes>
        <Route path="/" element={<TabsComponent />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

