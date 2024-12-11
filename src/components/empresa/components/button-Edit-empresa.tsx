"use client";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { useState } from "react";
import UpsertEmpresaDialog from "./upsert-empresa-dialog";
import { Empresa } from "@prisma/client";

interface EditEmpresaButtonProps {
  empresa: Empresa;
}

const EditEmpresa = ({ empresa }: EditEmpresaButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="rounded-0 font-bold"
        onClick={() => {
          setDialogIsOpen(true);
        }}
      >
        <Edit />
      </Button>

      <UpsertEmpresaDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={empresa}
        // empresaId={empresa.id}
      />
    </>
  );
};

export default EditEmpresa;
