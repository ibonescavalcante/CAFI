'use client'
import { useState } from "react";
import Link from "next/link";


export default function Page() {
    const empresas=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
    const user1=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        const sair =<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
            <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
        </svg>
    const Menus = [
        { title: "Usuario", src: user1,select:false ,path:"/usuarios" },
        { title: "Empresas", src: empresas, gap:false,path:"empresas"},
        { title: "Sair", src: sair ,path:"/login"},
        // { title: "Triagem", src: "Triagem.png" },
        // { title: "Configuração", src: "configuracao.png" },
        // { title: "Acesso Gerencial", src: "Usuario.png" , select:false },
        // { title: "Administração", src: "Administracao.png"},
        // { title: "Usuários", src: "Usuario.png" },
        // { title: "Cargos", src: "Cargos.png" },
        // { title: "Estatisticas", src: "Estatisticas.png" },
        // { title: "Grupos", src: "Grupos.png" },
        // { title: "Locais", src: "Locais.png" },
        // { title: "Prioridades", src: "Prioridades.png" },
        // { title: "Serviços", src: "Servicos.png" },
    ];
    const [open, setOpen] = useState(true)
    return (
        <>
            <div style={style.content_sidebar} className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-6 pt-0 relative`}>
            {/* <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-indigo-900 relative`}> */}
            {/* <button onClick={() => setOpen(!open)}> */}
            {/* <img src="img/pmp.png"  onClick={() => setOpen(!open)} className={`absolute cursor-pointer  rounded-full duration-500 w-10 h-10 -right-5 top-8  ${open && "rotate-[360deg]"}`} /> */}
            {/* <img src="img/logo.png"             
            className={`absolute cursor-pointer rounded-full bg-slate-900 -right-5 top-9 w-10 h-10 border-2 border-indigo-200 ${open && "rotate-180"}`}
            className={`absolute cursor-pointer rounded-full bg-slate-900 -right-5 top-9 w-10 h-10 border-2 border-indigo-200 ${open && "rotate-180"}`}
                   />  */}
                    {/* </button> */}
                <div className="flex  items-center">
                    {/* <img src="img/logo.png" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} /> */}
                    <h1 style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontWeight:'bold'}}
                    className={`text-white shadow-black origin-left font-medium text-xl  p-2 text-center duration-300  w-full ${!open && "scale-0"}`}>CAFI</h1>
                </div>
                <ul>
                    {Menus.map((menu, index) => (
                        <Link  key={index}  href={menu.path}>
                        <li key={index} 
                        style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontWeight:'bold'}} 
                        className={`text-white  text-sm flex items-center gap-x-4 
                            cursor-pointer p-2 hover:bg-slate-300 hover:-z-50 rounded-md hover:text-black
                            ${menu.gap ? "mt-9" : "mt-0"} ${menu.select==true && "bg-slate-500"}`}>
                            {/* <img className="h-4 w-4 text-white" src={menu.src} /> */}
                            {menu.src}
                            <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                        </li>
                        </Link>
                    ))}
                </ul>

            </div>
        </>

    );
}
const style = { 
    content:{    
        backgroundImage: 'linear-gradient(to bottom, #FFF, #999)',     
          
    },
    content_sidebar:{
        backgroundColor: '#376D2B',
        // backgroundImage: 'linear-gradient(to bottom, #D3D5D7, #355973)',
        // boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        borderBottom: '1px solid #D7DFF9',
        // width:'200px',    
        // display:'block' ,  
        // transition: '.5s;'   
    }
  }