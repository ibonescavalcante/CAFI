
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Search, PlusCircle } from "lucide-react"
import { Dialog, DialogHeader, DialogTitle,DialogContent, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"

export default function Page() {
    type Payment = {
        id: string
        amount: number
        status: "pending" | "processing" | "success" | "failed"
        email: string
      }
       
  return (
    < div className='p-10'>
        {/* Header das entidades */}
      <div className="flex items-center gap-4 p-4">
        <Image src="img/user.svg" width={50} height={50} alt="Picture of the author"/>    
        <div className='flex flex-col'>
          <strong style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontWeight: 'bold' }} className="text-[32px] ">Usuarios</strong>
          <span style={{ fontSmooth: 'auto', fontWeight: 'normal' }} className="-mt-1 pl-1 text-sm  text-gray-500">Visualize os usuários cadastradas no sistema.</span>
        </div>
      </div>

      {/* Parte de pesquisa na tabela */}
      <div  className="flex justify-between items-center  ">

        <form className="flex items-center">
            <input  type="search" placeholder="Pesquisar" className="w-auto p-2 border rounded-lg"  />
            <Button type="submit" variant={"link"} >
                <Search className="w-8 h-8 " />
                {/* Filtro resultados */}
            </Button>
        </form>

        <Dialog>

            <DialogTrigger asChild>
                <Button >
                    <PlusCircle className="m-3 h-4 mr-2 " />
                    Novo Usuário
                </Button>
            </DialogTrigger>    

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Novo Usuário</DialogTitle>
                    <DialogDescription>Criar um novo Usuário </DialogDescription>
                </DialogHeader>

                <form action="">

                    <div className=" grid grid-cols-4 items-center text-right gap-3">
                        <label htmlFor="name">Produto</label>
                        <input className="col-span-3" id="name"/>
                    </div>

                    <div className=" grid grid-cols-4 items-center text-right gap-3">
                        <label htmlFor="name">Quantidade</label>
                        <input className="col-span-3" id="name"/>
                    </div>

                    <div className=" grid grid-cols-4 items-center text-right gap-3">
                        <label htmlFor="name">Valor</label>
                        <input className="col-span-3" id="name"/>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                        <Button type="button" variant="outline" >Cancelar</Button>
                        </DialogClose>                        
                        <Button type="submit"  >Salvar</Button>
                    </DialogFooter>

                </form>

            </DialogContent>  

        </Dialog>
       

      </div>

<div className="border rounded-lg mt-4">
      <Table>
        <TableHeader>
            <TableHead>Id</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
        </TableHeader>
        <TableBody>
            {Array.from({length:10}).map((_,i)=>{
                return (
                    <TableRow key={i}>
                    <TableCell>Bgrs</TableCell>
                    <TableCell>Bgrs</TableCell>
                    <TableCell>Bgrs</TableCell>
                </TableRow>
                )
            })}
        </TableBody>
      </Table>  
      </div>
    </div>

  )
}