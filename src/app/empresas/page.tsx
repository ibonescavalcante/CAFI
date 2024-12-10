import { Payment, columns } from "../../components/empresa/_columns/page";
import Image from "next/image";
import { DataTable } from "../../components/empresa/data-table";
import { findManyEmpresas } from "../../servicos/_empresa";
import { NextRequest } from "next/server";

// import { EmpresaSchema } from "@/types/empresas-dto";
// interface EmpresaPros {
//   id: number;
//   cpf_cnpj: string;
//   razao_social: string;
//   nome_fantasia: string;
//   tipo_ocorrencia: string;
//   motivo: "";
//   uasg_sancionadora: string;
//   prazo_inicial: string;
//   prazo_final: string;
//   numero_do_processo: string;
//   numero_do_contrato: string;
//   valor_da_multa: string;
//   descricao_justificativa: string;
// }
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed55f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}
const Page = async (req: any) => {
  // const search = JSON.parse(JSON.stringify(req));

  const getEmpresas = await findManyEmpresas(req.searchParams.filter);
  // const getEmpresas = EmpresaSchema.parse(
  //   findManyEmpresas(search.searchParams.filter)
  // );
  console.log(getEmpresas);
  const data = await getData();
  return (
    <div className="flex flex-col p-4">
      <h1>Empresa </h1>
      <div className="flex items-center gap-4 p-4">
        <Image width="50" height="40" alt="Empreasa" src="/img/Company.png" />

        <div className=" flex flex-col ">
          <strong
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontWeight: "bold",
            }}
            className="text-[32px] "
          >
            Empresas
          </strong>
          <span
            style={{ fontSmooth: "auto", fontWeight: "normal" }}
            className="-mt-1 pl-1 text-sm  text-gray-500"
          >
            Visualize as empresas cadastradas no sistema.
          </span>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
      {/* <DataTable columns={empresacolumns} data={getEmpresas} /> */}
    </div>
  );
};

export default Page;
