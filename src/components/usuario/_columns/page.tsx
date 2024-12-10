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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    nome: "5kma53ae",
    user: "success",
    password: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    nome: "5kma53ae",
    user: "success",
    password: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    nome: "5kma53ae",
    user: "processing",
    password: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    nome: "5kma53ae",
    user: "success",
    password: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    nome: "5kma53ae",
    user: "failed",
    password: "carmella@hotmail.com",
  },
];

export type Payment = {
  id: string;
  nome: string;
  user: string;
  password: string;
};

// export const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "nome",
//     header: "Nome",
//     cell: ({ row }) => <div className="capitalize">{row.getValue("nome")}</div>,
//   },
//   {
//     accessorKey: "user",
//     header: "Usuario",
//     cell: ({ row }) => <div className="lowercase">{row.getValue("user")}</div>,
//   },
//   {
//     accessorKey: "password",
//     header: "Password",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("password")}</div>
//     ),
//   },
//   {
//     id: "actions",
//     header: "Ações",
//     enableHiding: false,
//     cell: ({ row }) => {
//       const payment = row.original;

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               {/* <span className="sr-only">Open menu</span> */}
//               <MoreHorizontal />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {/* <DropdownMenuLabel>Ações</DropdownMenuLabel> */}
//             {/* <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Copy payment ID
//             </DropdownMenuItem> */}
//             {/* <DropdownMenuSeparator /> */}
//             <DropdownMenuItem>Editar</DropdownMenuItem>
//             <DropdownMenuItem>Deletar</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       );
//     },
//   },
// ];

// const Usuarios = () => {
//   const [sorting, setSorting] = React.useState<SortingState>([]);
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//     []
//   );
//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({});
//   const [rowSelection, setRowSelection] = React.useState({});

//   const table = useReactTable({
//     data,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   });

//   return (
//     <div className="w-full">
//       <div className="flex items-center justify-between p-2">
//         <Input
//           placeholder="Buscar usuarios"
//           value={(table.getColumn("user")?.getFilterValue() as string) ?? ""}
//           onChange={(event) =>
//             table.getColumn("user")?.setFilterValue(event.target.value)
//           }
//           className="max-w-sm"
//         />
//         <Button variant="secondary">Novo Usuario</Button>
//       </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                     </TableHead>
//                   );
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-end space-x-2 py-4">
//         {/* <div className="flex-1 text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div> */}
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Usuarios;
const Usuarios = () => {
  return <>usuraio</>;
};
export default Usuarios;
