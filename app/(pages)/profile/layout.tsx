import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    
  return (
   
    <div className="place-items-center max-w-screen-md py-10">
        <Link href={'/'}> <Button color="danger" 
        
        > {'<-'} </Button></Link>
         {children}
        <h2>Footer profile</h2>
    </div>
  );
}
