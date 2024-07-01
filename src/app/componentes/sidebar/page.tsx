'use client'
import { useState } from "react";


export default function Page() {
    const Menus = [
        { title: "Usuario", src: "Grupos.png",select:false },
        { title: "Empresas", src: "Usuario.png", gap:false},
        { title: "Sair", src: "" },
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
            <img src="img/pmp.png"  onClick={() => setOpen(!open)} className={`absolute cursor-pointer  rounded-full duration-500 w-10 h-10 -right-5 top-8  ${open && "rotate-[360deg]"}`} />
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
                        <li key={index} 
                        style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontWeight:'bold'}} 
                        className={`text-white  text-sm flex items-center gap-x-4 
            cursor-pointer p-2 hover:bg-slate-100 hover:-z-50 rounded-md hover:text-black
             ${menu.gap ? "mt-9" : "mt-0"} ${menu.select==true && "bg-slate-500"}`}>
                            <img className="h-4 w-4" src={menu.src} />
                            <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                        </li>
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