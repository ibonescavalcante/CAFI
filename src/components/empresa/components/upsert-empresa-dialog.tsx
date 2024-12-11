import { upInsertEmpresa } from "@/servicos/empresa";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EmpresaInterfaceSchema, EmpresaSchema } from "@/@types/empresas-dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Empresa } from "@prisma/client";

interface UpsertEmpresaDialogProps {
  isOpen: boolean;
  defaultValues?: Empresa;
  empresaId?: number;
  setIsOpen: (isOpen: boolean) => void;
}

const UpsertEmpresaDialog = ({
  isOpen,
  defaultValues,

  setIsOpen,
}: UpsertEmpresaDialogProps) => {
  //   const FormAddUpdateEmpresa = ({ defaultValues }: any) => {

  // console.log(isOpen);
  // // console.log(empresaId);
  // console.log(defaultValues);

  const form = useForm<EmpresaInterfaceSchema>({
    resolver: zodResolver(EmpresaSchema),
    defaultValues: defaultValues,
  });

  const isUpdate = Boolean(defaultValues?.id);
  const onSubmit = async (data: EmpresaInterfaceSchema) => {
    // console.log("Upinsert-empresa-dialog", data);
    try {
      await upInsertEmpresa(data);

      form.reset();
      setIsOpen(false);
    } catch (error) {}
  };

  // isUpdate ? form.reset() : null;
  return (
    <>
      {/* <Button className="rounded-full font-bold gap-1" disabled={false}>
        <Plus />
        Nova Empresa
      </Button>

      <FormAddUpdateEmpresa /> */}
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          // console.log(open);
          setIsOpen(open);
          if (!open) {
            form.reset();
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isUpdate ? "Atualizar Empresa" : "Cadastre uma Nova Empresa"}
            </DialogTitle>
            <DialogDescription>
              Insira os dados da empresa que sera adicionada no sistema.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2  gap-4">
                <FormField
                  control={form.control}
                  name="cpf_cnpj"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPF/CNPJ</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite o cpf ou cnpj..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="razao_social"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Razão Social</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite a razão social..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nome_fantasia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Fantasia</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite o nome fantasia..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tipo_ocorrencia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Ocorrencia</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite o tipo de ocorrencia..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="motivo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Motivo</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o motivo..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="uasg_sancionadora"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sancionadora</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite a unidade sancionadora..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="prazo_inicial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prazo Inicial</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite prazo inicial..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="prazo_final"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prazo Final</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite prazo final..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="numero_do_processo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número do processo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite o número do processo..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="numero_do_contrato"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número do contrato</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite o número do contrato..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="valor_da_multa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Valor da Multa</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite o valor da multa..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="descricao_justificativa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Justificativa</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Digite uma justificativa..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="p-4 w-full border-0 text-center">
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button type="submit">
                  {isUpdate ? "Atualizar" : "Adicionar"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpsertEmpresaDialog;
