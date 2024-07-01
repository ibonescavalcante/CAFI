import From from '../../componentes/form/page';
import Table from '@/app/componentes/tabela/page';

export default function Page(){
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
    return (
        <>
        <h1>Empresas</h1>
        <div className="flex flex-col w-full  p-2 " > 
            {/* <From /> */}
            <div className='w-full  mb-2 '>
            <input type="text" className=" w-[300px] border p-2 rounded-md focus:outline-none focus:ring-1"  name="search" placeholder="pesquisa" />
            </div>
            <Table  data={sampleData} />
        </div>
        </>
    
)
}