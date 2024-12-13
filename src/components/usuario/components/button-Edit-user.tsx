"use client";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { useState } from "react";
import UpsertEmpresaDialog from "./upsert-user-dialog";
import { User } from "@prisma/client";

interface EditUserButtonProps {
  user: User;
}

const EditEmpresa = ({ user }: EditUserButtonProps) => {
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
        defaultValues={user}
        // empresaId={empresa.id}
      />
    </>
  );
};

export default EditEmpresa;
