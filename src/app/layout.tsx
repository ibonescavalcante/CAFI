
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./componentes/sidebar/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CPL - Cadastro de impedidos de licitar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const idLogado =false;
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <div className=" flex">
<Sidebar />
    <div  style={style.content} className=" font-semibold flex-col h-screen w-screen">
      
      {/* <div className=" w-full h-10 bg-gradient-to-r from-[#EEF3F5] to-[#12861c] "></div>  */}
      {/* <div className=" w-full h-10 bg-gradient-to-r from-[#EEF3F5] to-[#12861c] "></div>  */}
      {/* <div  style={{    borderBottom:'1px solid rgb(30, 30, 30)'}} className="flex justify-between items-center shadow w-full h-6 bg-gradient-to-r pl-6 pr-2 from-[#D7DFF9] to-[#494949]">
        <span className="text-sm  shadow">Helpdesk </span><h1 className="text-white shadow">Ibones </h1>
        </div> */}
      <div>{children}</div>
     
    </div>
   </div>
       
        
        </body>
    </html>
  );
}
const style = { 
  content:{
      display:'flex',
    //   backgroundImage: 'linear-gradient(to bottom, #FFF, #999)',      

      // height:'94vh'     
  }
}
