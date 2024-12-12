"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import UpsertEmpresaDialog from "./upsert-user-dialog";
// import { Empresa } from "@prisma/client";
// interface EditEmpresaButtonProps {
//   empresa: Empresa;
// }
const AddNovaEmpresa = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        <Plus />
        Nova Empresa
      </Button>

      <UpsertEmpresaDialog isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen} />
    </>
  );
};

export default AddNovaEmpresa;
