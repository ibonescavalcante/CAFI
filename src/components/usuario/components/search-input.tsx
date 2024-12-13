"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Ajuste o caminho conforme sua estrutura
import { Search } from "lucide-react"; // Ícone de lupa
import { FormEvent } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(event.target.dispatchEvent);
  }

  return (
    <div className="relative w-[300px] ">
      <form onSubmit={handleSubmit}>
        <Input
          name="search"
          type="text"
          placeholder="Pesquisar..."
          // value={value}
          // onChange={(e) => onChange(e.target.value)}
          className="pl-4 " // Espaço para o ícone
        />
        <Button
          type="submit"
          variant="ghost"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          <Search />
        </Button>
      </form>
    </div>
  );
};
export default SearchInput;
