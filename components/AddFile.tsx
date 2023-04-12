import React, { useState } from 'react'

export default function AddFile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div>
                <button
                style={{ margin: "1rem" }}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md"
                onClick={() => setIsOpen(true)}
                >
                    AddFile +
                </button>
            </div>
            {isOpen && (
            <div>
                <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                    checked={isOpen}
                    onChange={() => setIsOpen(false)}
                />
                <div className="modal modal-bottom sm:modal-middle" >

                    <div className="modal-box"
                        style={{
                            color: "black",
                            background:  "#090a0f",
                            position: "absolute",
                            maxHeight: "fit-content"
                        }}
                    >
                        <h3 className="font-bold text-2xl text-red-500 mb-4">Agrega una película o serie</h3>

                        <form className='form-control'>
                            <label><h3 className='text-orange-400'>Nombre</h3>
                                <input type="text" placeholder="Spiderman2" className="input input-bordered input-warning w-full " />
                            </label>
                            <label><h3 className='text-orange-400'>Año</h3>
                                <input type="text" placeholder="2002" className="input input-bordered input-warning w-full " />
                            </label>
                            <label><h3 className='text-orange-400'>Descripción</h3>
                                <textarea className="textarea textarea-warning textarea-lg w-full" placeholder="Empieza tu descripción"></textarea>
                           </label>
                            <label htmlFor="image" className="block text-lg font-medium text-white mb-2">
                            URL de la imagen
                                <input type="url" className="input input-success text-black w-full"/>
                            </label>
                            <label>
                                <span className='text-orange-400'>Película</span>
                                <input type="radio" name="radio-6" className="radio radio-warning" checked />
                                <br/>
                                <span className='text-orange-400'>Serie</span>
                                <input type="radio" name="radio-6" className="radio radio-warning" />
                            </label>
                            <button type="submit" className="btn bg-orange-500 hover:bg-orange-600">
                                Agregar
                            </button>
                            <button onClick={()=>setIsOpen(false)} className="btn btn-active bg-red-500 hover:bg-red-600 w-full ">
                                Cerrar
                            </button>

                        </form>


                    </div>

                </div>

                
            </div>
         )}
        </>
    )
    }
