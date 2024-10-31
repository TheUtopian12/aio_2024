"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Image } from "@nextui-org/react";
import { usePathname } from "next/navigation";


const NavBar = () => {
    const path = usePathname()
    console.log(path)

    return (
        <Navbar>
            <NavbarContent>
                <NavbarItem><Link href="/">
                    <Image
                        height={50}
                        src={'/aio-logo_v2.svg'}

                    />
                </Link></NavbarItem>

            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem >
                    <Link className={`text-white hover:text-red-500 ${path == '/' ? "text-[#f26457]" : ""}`} href="/">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/trending-movies" className={`text-white hover:text-red-500 ${path == '/trending-movies' ? "text-[#f26457]" : ""}`} >
                        Movies
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" className="text-white hover:text-red-500">
                        Tv Series
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Link href="/profile" className="text-white hover:text-red-500">

                    <Avatar

                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        name="Jason Hughes"
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </Link>
            </NavbarContent>
        </Navbar>
    );
};

export default NavBar;

