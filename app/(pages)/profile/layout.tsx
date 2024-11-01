import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    
  return (
   
    <div className="place-items-center max-w-screen-md py-10">
        <Link href={'/'}> <Button color="danger" variant="ghost"
        
        > <FaArrowLeft /> </Button></Link>
         {children}
        <h2>Footer profile</h2>
    </div>
  );
}
