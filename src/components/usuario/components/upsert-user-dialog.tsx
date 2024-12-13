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
import { User } from "@prisma/client";
import { createUsuarios } from "@/servicos/usuario";
import { UserInterfaceSchema, UserSchema } from "@/@types/users-dto";

interface UpsertUserDialogProps {
  isOpen: boolean;
  defaultValues?: User;
  empresaId?: number;
  setIsOpen: (isOpen: boolean) => void;
}

const UpsertUserDialog = ({
  isOpen,
  defaultValues,

  setIsOpen,
}: UpsertUserDialogProps) => {
  //   const FormAddUpdateEmpresa = ({ defaultValues }: any) => {

  // console.log(isOpen);
  // // console.log(empresaId);
  // console.log(defaultValues);

  const form = useForm<UserInterfaceSchema>({
    resolver: zodResolver(UserSchema),
    defaultValues: defaultValues,
  });

  const isUpdate = Boolean(defaultValues?.id);
  const onSubmit = async (data: UserInterfaceSchema) => {
    // console.log("Upinsert-empresa-dialog", data);
    try {
      await createUsuarios(data);

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
              {isUpdate ? "Atualizar Usuário" : "Cadastre um novo usuário"}
            </DialogTitle>
            <DialogDescription>
              Insira os dados do Usuário que sera adicionada no sistema.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2  gap-4">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o nome..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="user"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Usuário</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o usuário..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tipo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de usuário</FormLabel>
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
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o status..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="senha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Digite o status..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirma_senha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirma senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Digite o status..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

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

export default UpsertUserDialog;
