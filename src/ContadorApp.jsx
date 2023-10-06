function handleclick(value) {
    value += 1
    console.log(value)
}
export const ContadorApp = ({value}) => {
    return (
        <>
            <h1>Contador: </h1>
            <p>{value}</p>
            <button onClick={() => handleclick(value)}>
                Soy un Boton
            </button>
        </>
    )
}
