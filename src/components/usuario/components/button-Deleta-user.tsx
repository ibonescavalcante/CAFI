import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteEmpresa } from "@/servicos/empresa";

interface EmpresaI {
  id: number;
}

const DeletaEmpresa = ({ id }: EmpresaI) => {
  const deletaEmpresa = async () => {
    await deleteEmpresa(id);
  };
  return (
    <>
      <Button variant="ghost" onClick={deletaEmpresa}>
        <Trash />
      </Button>
    </>
  );
};

export default DeletaEmpresa;
