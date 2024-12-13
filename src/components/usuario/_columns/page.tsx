"use client";
import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@prisma/client";
import EditUser from "../components/button-Edit-user";
import DeletaUser from "../components/button-Deleta-user";

export const usuarioscolumns: ColumnDef<User>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
    cell: ({ row }) => <div className="capitalize">{row.getValue("nome")}</div>,
  },
  {
    accessorKey: "user",
    header: "Usuário",
    cell: ({ row }) => <div className="capitalize">{row.getValue("user")}</div>,
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
    cell: ({ row }) => <div className="lowercase">{row.getValue("tipo")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("status")}</div>
    ),
  },
  {
    id: "actions",
    header: "Ações",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex ">
          <EditUser user={row.original} />
          <DeletaUser id={row.original.id} />
        </div>
      );
    },
  },
];
