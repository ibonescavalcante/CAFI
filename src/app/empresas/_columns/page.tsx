"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Empresas[] = [
  {
    id: 1,
    cpf_cnpj: "12345678000195",
    razao_social: "Empresa A LTDA",
    nome_fantasia: "A Comércio",
    tipo_ocorrencia: "Multa por descumprimento contratual",
    motivo: "Não entrega no prazo acordado",
    uasg_sancionadora: "123456",
    ambito_da_sancao: "Federal",
    prazo: "30 dias",
    prazo_inicial: "2024-11-01",
    prazo_final: "2024-12-01",
    numero_do_processo: "1234/2024",
    numero_do_contrato: "5678/2023",
    valor_da_multa: "5000",
    descricao_justificativa:
      "A empresa não cumpriu o prazo de entrega acordado no contrato.",
  },
  {
    id: 2,
    cpf_cnpj: "98765432000184",
    razao_social: "Global Solutions S.A.",
    nome_fantasia: "GlobalTech",
    tipo_ocorrencia: "Advertência por atraso",
    motivo: "Atraso na entrega de relatório técnico",
    uasg_sancionadora: "654321",
    ambito_da_sancao: "Estadual",
    prazo: "15 dias",
    prazo_inicial: "2024-11-10",
    prazo_final: "2024-11-25",
    numero_do_processo: "2345/2024",
    numero_do_contrato: "6789/2022",
    valor_da_multa: "0",
    descricao_justificativa:
      "Foi registrada uma advertência devido ao atraso na entrega do relatório técnico solicitado.",
  },
  {
    id: 3,
    cpf_cnpj: "11122333000122",
    razao_social: "Indústria de Alimentos X",
    nome_fantasia: "Alimex",
    tipo_ocorrencia: "Suspensão de fornecimento",
    motivo: "Produto contaminado",
    uasg_sancionadora: "789012",
    ambito_da_sancao: "Municipal",
    prazo: "60 dias",
    prazo_inicial: "2024-11-15",
    prazo_final: "2025-01-15",
    numero_do_processo: "3456/2024",
    numero_do_contrato: "7890/2021",
    valor_da_multa: "20000",
    descricao_justificativa:
      "O produto fornecido foi contaminado, gerando risco à saúde pública.",
  },
  {
    id: 4,
    cpf_cnpj: "22334455667788",
    razao_social: "Construtora Nova Era",
    nome_fantasia: "NovaConstru",
    tipo_ocorrencia: "Multa por violação de segurança",
    motivo: "Acidente em obra",
    uasg_sancionadora: "112233",
    ambito_da_sancao: "Federal",
    prazo: "45 dias",
    prazo_inicial: "2024-11-20",
    prazo_final: "2024-12-30",
    numero_do_processo: "4567/2024",
    numero_do_contrato: "8901/2023",
    valor_da_multa: "15000",
    descricao_justificativa:
      "A multa foi aplicada devido a falhas nas condições de segurança, resultando em um acidente com um trabalhador.",
  },
  {
    id: 5,
    cpf_cnpj: "33221199887766",
    razao_social: "Serviços Gerais Ltda",
    nome_fantasia: "ServiGeral",
    tipo_ocorrencia: "Advertência por não conformidade",
    motivo: "Não cumprimento de padrões de qualidade",
    uasg_sancionadora: "456789",
    ambito_da_sancao: "Estadual",
    prazo: "10 dias",
    prazo_inicial: "2024-11-05",
    prazo_final: "2024-11-15",
    numero_do_processo: "5678/2024",
    numero_do_contrato: "1234/2022",
    valor_da_multa: "0",
    descricao_justificativa:
      "Foi emitida uma advertência devido ao não cumprimento dos padrões de qualidade estipulados no contrato.",
  },
];

export type Empresas = {
  id: number;
  cpf_cnpj: String;
  razao_social: String;
  nome_fantasia: String;
  tipo_ocorrencia: String;
  motivo: String;
  uasg_sancionadora: String;
  ambito_da_sancao: String;
  prazo: String;
  prazo_inicial: String;
  prazo_final: String;
  numero_do_processo: String;
  numero_do_contrato: String;
  valor_da_multa: String;
  descricao_justificativa: String;
};

export const columns: ColumnDef<Empresas>[] = [
  // {
  //   id: "select",
  //   header: "CPF/CNPJ",
  // header: ({ table }) => (
  //   <Checkbox
  //     checked={
  //       table.getIsAllPageRowsSelected() ||
  //       (table.getIsSomePageRowsSelected() && "indeterminate")
  //     }
  //     onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //     aria-label="Select all"
  //   />
  // ),
  // cell: ({ row }) => (
  //   <Checkbox
  //     checked={row.getIsSelected()}
  //     onCheckedChange={(value) => row.toggleSelected(!!value)}
  //     aria-label="Select row"
  //   />
  // ),

  // enableSorting: false,
  // enableHiding: false,
  // },
  {
    accessorKey: "cpf_cnpj",
    header: "CPF/CNPJ",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("cpf_cnpj")}</div>
    ),
  },
  {
    accessorKey: "razao_social",
    header: "Razão Social",
    // header: ({ column }) => {
    //   return (
    //     <Button
    //       variant="ghost"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       Razão Social
    //       {/* <ArrowUpDown /> */}
    //     </Button>
    //   );
    // },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("razao_social")}</div>
    ),
  },
  {
    accessorKey: "nome_fantasia",
    header: () => <div className="text-right">Nome Fantasia</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("nome_fantasia")}</div>
    ),
  },
  {
    accessorKey: "tipo_ocorrencia",
    header: () => <div className="text-right"> Tipo de Ocorrencia</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("tipo_ocorrencia")}</div>
    ),
  },
  {
    accessorKey: "motivo",
    header: () => <div className="text-right">Motivo</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("motivo")}</div>
    ),
  },
  {
    accessorKey: "uasg_sancionadora",
    header: () => <div className="text-right">Sancionadora</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("uasg_sancionadora")}</div>
    ),
  },
  {
    accessorKey: "ambito_da_sancao",
    header: () => <div className="text-right">Sanção</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("ambito_da_sancao")}</div>
    ),
  },
  {
    accessorKey: "prazo",
    header: () => <div className="text-right">Prazo</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("prazo")}</div>
    ),
  },
  {
    accessorKey: "prazo_inicial",
    header: () => <div className="text-right">Prazo inicial</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("prazo_inicial")}</div>
    ),
  },
  {
    accessorKey: "prazo_final",
    header: () => <div className="text-right">Prazo final</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("prazo_final")}</div>
    ),
  },
  {
    accessorKey: "numero_do_processo",
    header: () => <div className="text-right">Processo</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("numero_do_processo")}</div>
    ),
  },
  {
    accessorKey: "numero_do_contrato",
    header: () => <div className="text-right">Contrato</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("numero_do_contrato")}</div>
    ),
  },
  {
    accessorKey: "valor_da_multa",
    header: () => <div className="text-right">Valor</div>,
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("valor_da_multa")}</div>
    ),
  },
  {
    accessorKey: "descricao_justificativa",
    header: () => <div className="text-right">Descrição</div>,
    cell: ({ row }) => (
      <div className="text-right">
        {row.getValue("descricao_justificativa")}
      </div>
    ),
  },
];

const Empresas = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-2">
        <Input
          placeholder="Buscar empresas"
          value={
            (table.getColumn("cpf_cnpj")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("cpf_cnpj")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Button variant="secondary">Novo Cadastro</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Empresas;
