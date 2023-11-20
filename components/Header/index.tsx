import { NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Navbar, Link, Image } from "@nextui-org/react";
import { useState } from 'react';
import { menu } from './mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar className="relative" maxWidth='full' isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand className='flex w-full justify-center'>
        <Link href="/">
          <Image src="/assets/logo/logo.webp" alt="fisioEmpreendedor" height={40} width={40} />
        </Link>
      </NavbarBrand>
      <NavbarContent className='absolute'>
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        {menu.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link href={item.url}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
