"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { usePathname } from "next/navigation";


const NavBar = () => {
    const path = usePathname()
    console.log(path)

    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem >
                    <Link className={`text-white hover:text-red-500 ${path == '/' ? "text-blue-500" : ""}`} href="/">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/trending-movies" className="text-white hover:text-red-500">
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
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </NavbarContent>
        </Navbar>
    );
};

export default NavBar;

