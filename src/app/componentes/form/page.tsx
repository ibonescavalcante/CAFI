'use client'
import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData]: any = useState({
        Documento: '99887766554',
        Fornecedor: 'CARLOS EDUARDO MENDES',
        Nome: 'Innovatech',
        Natureza: 'juridica',
        dataAt: '2023-04-05',
        dataEt: '2024-10-05',
        Periodo: '90',
        Processo: '55678/2022 - PGMS',
        Sanção: 'interdição',
        Contrato: 'fornecimento',
        Fundamentação: 'art. 15, inciso I',
        Descrição: 'Produto fora do padrão',
        Abrangência: 'estadual',
        Jugado: '2024-09-05',
        Complementação: 'nenhuma',
        Diário: 'DOU 04/2023',
        Obs: 'Observação 4',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Aqui você pode enviar os dados para um servidor ou outra lógica de manipulação
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-row flex-wrap gap-4 justify-between border p-6 shadow'>
                {Object.keys(formData).map((key) => (
                    <div className="flex flex-col justify-center   flex-1 min-w-[250px]" >
                        <label >
                            {key}:
                            <input className='border p-2 rounded-sm min-w-[300px] w-full font-light text-sm focus:outline-none focus:ring-2 '
                                type={key.includes('data') ? 'date' : 'text'}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                ))}




            </div>

            <div className=" flex justify-end w-full gap-2 p-4">
                <button className=" text-[#376D2B] p-2  rounded border focus:ring-2 focus:shadow"   type="submit">Cancelar</button>
                <button className=' text-white p-2 bg-[#376D2B] w-[100px] rounded focus:ring-2 focus:shadow' type="submit">Salvar</button>
            </div>
        </form>
    );
};

export default Form;
