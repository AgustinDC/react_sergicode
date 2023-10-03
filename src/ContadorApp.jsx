import React from 'react'

export const ContadorApp = () => {
    return (
        <>
            <h1>Contador: </h1>
            <button onClick={ function () { console.log('soy un boton')} }>
                Soy un Boton
            </button>
        </>
    )
}
