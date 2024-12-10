"use client";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { useState } from "react";
import UpsertEmpresaDialog from "./upsert-empresa-dialog";
import { Empresa } from "@prisma/client";

interface EditEmpresaButtonProps {
  empresa: Empresa;
}
interface EmpresaPros {
  id: number;
  cpf_cnpj: string;
  razao_social: string;
  nome_fantasia: string;
  tipo_ocorrencia: string;
  motivo: string;
  uasg_sancionadora: string;
  prazo_inicial: string;
  prazo_final: string;
  numero_do_processo: string;
  numero_do_contrato: string;
  valor_da_multa: string;
  descricao_justificativa: string;
}

const EditEmpresa = (empresa: any) => {
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
        empresaId={empresa.id}
      />
    </>
  );
};

export default EditEmpresa;
