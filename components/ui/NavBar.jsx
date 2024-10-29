import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className='w-full h-10 flex items-center justify-center '>
            <ul className='flex justify-center items-center space-x-10'>
                <li className=''>
                    <Link href="/">
                        <h1>Inicio</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/trending-movies">
                        <h1>Trending</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/profile">
                        <h1>Profile</h1>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

