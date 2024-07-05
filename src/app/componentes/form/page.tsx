'use client'
import React, { useState } from 'react';


const Form = ({onCancel,dados,foutData}:any) => {
    const incialDados = dados?dados:{}
    const [formData, setFormData] = useState(incialDados)


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // console.log('Form data submitted:', formData);
        foutData(formData);

    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-row flex-wrap gap-4 justify-between border-none p-6 shadow-none'>
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
                <input className=" text-[#376D2B] p-2  rounded border focus:ring-2 focus:shadow" type="button" value="Cancelar" onClick={onCancel}/>
                <button className=' text-white p-2 bg-[#376D2B] w-[100px] rounded focus:ring-2 focus:shadow'  type="submit">Salvar</button>
            </div>
        </form>
       
         </>
    );
};

export default Form;
