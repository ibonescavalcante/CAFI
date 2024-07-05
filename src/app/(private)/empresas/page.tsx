'use client'
import From from '../../componentes/form/page';
import Table from '@/app/componentes/tabela/page';
import Modal from '@/app/componentes/modal/page';
import { useState } from 'react';

export default function Page() {
  const dados={
    // Documento: '',
    // Fornecedor: '',
    // Nome: '',
    // Natureza: '',
    // dataAt: '',
    // dataEt: '',
    // Periodo: '',
    // Processo: '',
    // Sanção: '',
    // Contrato: '',
    // Fundamentação: '',
    // Descrição: '',
    // Abrangência: '',
    // Jugado: '',
    // Complementação: '',
    // Diário: '',
    // Obs: '',
    Documento: '99887766554',
    Fornecedor: 'CARLOS EDUARDO MENDES',
    Nome: 'Innovatech',
    Natureza: 'juridica',
    dataAt: '2023-04-05',
    dataEt: '2024-10-05',
    Periodo: '90',
    Processo: '55678/2022 - PGMS',
    Sanção: 'interdição',
    Contrato: 'fornecimento',
    Fundamentação: 'art. 15, inciso I',
    Descrição: 'Produto fora do padrão',
    Abrangência: 'estadual',
    Jugado: '2024-09-05',
    Complementação: 'nenhuma',
    Diário: 'DOU 04/2023',
    Obs: 'Observação 4',
    Obs1: 'Observação 4',
    Obs3: 'Observação 4',
}
  const [modalVisible, setModalVisible] = useState(false);
  const sampleData = [
    {
      documento: '99887766554',
      fornecedor: 'CARLOS EDUARDO MENDES',
      nomeFantasia: 'Innovatech',
      natureza: 'juridica',
      dataAt: '2023-04-05',
      dataEt: '2024-10-05',
      periodo: '90',
      processo: '55678/2022 - PGMS',
      //   tipoSancao: 'interdição',
      //   tipoContrato: 'fornecimento',
      //   fundamentacaoLegal: 'art. 15, inciso I',
      //   descricao: 'Produto fora do padrão',
      //   abrangenciaDefinida: 'estadual',
      //   dataTransitoJulgado: '2024-09-05',
      //   complementacao: 'nenhuma',
      //   diarioOficial: 'DOU 04/2023',
      //   obs: 'Observação 4',
    },
    // Adicione mais objetos se necessário
  ];
  const handleRowClick = (item:any) => {
    console.log(item);
    setModalVisible(!modalVisible);
    // alert(`item: ${item}`);
  }; 
  const handleAddNovo =()=>{
    console.log("here")
 setModalVisible(!modalVisible)
  }

  const handleSubmit =(e:any)=>{
console.log(e);
  }

  return (
    <>
      <div className="flex items-center gap-4 p-4">
        <img width="50" height="40" src="img/Company.png" />
        <div className=' flex flex-col '>
          <strong style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontWeight: 'bold' }} className="text-[32px] ">Empresas</strong>
          <span style={{ fontSmooth: 'auto', fontWeight: 'normal' }} className="-mt-1 pl-1 text-sm  text-gray-500"> Visualize as empresas cadastradas no sistema.</span>
        </div>
      </div>

      <div className="flex flex-col w-full  p-0 " >
        {/* <From /> */}
        <div className='w-full flex justify-between  flex-row  mb-2 '>
          <div className="relative w-80">
            <form action="/empresas">
            <input type="text" className="w-full py-2 pl-4 pr-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300" placeholder="Pesquisa..." />
            <div className="absolute inset-y-0.5 right-3 flex items-center pl-3 pointer-events">
              <button type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0z" fill="none"/>
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </button>
            </div>
            </form>
          </div>
          <input  style={{fontSmooth:'auto',fontWeight:'normal',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} type="button"  onClick={handleAddNovo} className=" bg-[#3c6075] text-white  rounded-md pl-3 pr-3"   value="Adicionar novo" name="search"  />
        </div>
       
      </div>
      <Table data={sampleData} onRowClick={handleRowClick} />
      <Modal isOpen={modalVisible}>
        <From onCancel={()=>{setModalVisible(!modalVisible)}}  dados={dados} foutData={handleSubmit}/>
      </Modal>
    </>

  )
}