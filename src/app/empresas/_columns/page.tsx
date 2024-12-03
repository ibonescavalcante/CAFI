"use client";
import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Empresa } from "@prisma/client";

export const empresacolumns: ColumnDef<Empresa>[] = [
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
  // {
  //   accessorKey: "ambito_da_sancao",
  //   header: () => <div className="text-right">Sanção</div>,
  //   cell: ({ row }) => (
  //     <div className="text-right">{row.getValue("ambito_da_sancao")}</div>
  //   ),
  // },
  // {
  //   accessorKey: "prazo",
  //   header: () => <div className="text-right">Prazo</div>,
  //   cell: ({ row }) => (
  //     <div className="text-right">{row.getValue("prazo")}</div>
  //   ),
  // },
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
  {
    id: "actions",
    header: "Ações",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Deletar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
