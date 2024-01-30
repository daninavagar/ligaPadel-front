import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { UserAuth } from "../context/AuthContext";
import { UserAppMetadata } from "@supabase/supabase-js";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut }:UserAppMetadata = UserAuth();

  const menuItems = [
  {
    name: "Clasificación",
    url: "/clasification",
  },
  {
    name: "Jornadas",
    url: "/round",
  },
  {
    name: "Equipos",
    url: "/teams",
  },
  {
    name: "Jugadores",
    url: "/players",
  },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-inherit">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="/">
                <p className="font-bold text-white">EGUL</p>
            </Link>
        </NavbarItem>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="primary" className="text-white" href="/clasification">
            Clasificación
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/round" className="text-white">
            Jornadas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="/teams">
            Equipos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="/players">
            Jugadores
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {
          user === undefined ? (
              <NavbarItem>
                <Button as={Link} color="primary" href="/login" variant="flat">
                  Login
                </Button>
              </NavbarItem>
          ) : (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name={user.name}
                  size="sm"
                  
                  src={user.picture}
                />
              </DropdownTrigger>
              <DropdownMenu color="success" style={{background: '#242424', border: '1px solid #ffffff'}} aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" textValue="user information" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>
                <DropdownItem key="settings" textValue="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings" textValue="team settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics" textValue="team settings">Analytics</DropdownItem>
                <DropdownItem key="system" textValue="team settings">System</DropdownItem>
                <DropdownItem key="configurations" textValue="team settings">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback" textValue="team settings">Help & Feedback</DropdownItem>
                <DropdownItem onClick={signOut} key="logout" color="danger" textValue="team settings">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )
        }
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
