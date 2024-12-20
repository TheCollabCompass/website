'use client';
import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import { LogoSvg } from '../Constants/svgIcons';
import { ClassNames } from '@emotion/react';
import { whatsappLink } from '../utils/constants';
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function MainBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      console.log(scrollTop);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    { title: 'Whatsapp', link: whatsappLink },
  ];

  return (
    <Navbar
      className={
        `sticky  bg-white/10 backdrop-blur shadow-[#1c2418] backdrop-brightness-150 shadow-2xl` +
        (showNavbar ? 'top-0' : ' top-[-60px]')
      }
      onMenuOpenChange={setIsMenuOpen}
      // className='sticky'
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className='sm:hidden' />
        <NavbarBrand className='flex gap-2 items-center mb-2'>
          {/* <AcmeLogo /> */}

          <a href='/'>{LogoSvg({ width: '100px', height: '100px', color: 'white' })}</a>

          <a href='/'>
            <p className='font-bold text-white '>The Collab Compass</p>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link className='text-white font-bold' href='/'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white font-bold' href='/about'>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white font-bold' href={whatsappLink} target='_blank'>
            Whatsapp
          </Link>
        </NavbarItem>
      </NavbarContent>

      <div className='bg-white/35 backdrop-blur shadow-[#1c2418] backdrop-brightness-150 shadow-2xl'>
        <NavbarMenu className='bg-black/45 backdrop-blur shadow-[#1c2418] backdrop-brightness-150 shadow-2xl'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.title}-${index}`} className='my-3'>
              <Link className='w-full text-white underline font-bold justify-center' href={item.link} size='lg'>
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>
    </Navbar>
  );
}
