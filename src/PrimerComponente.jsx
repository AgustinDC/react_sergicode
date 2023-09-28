import './PrimerComponente.css'

const string = 'Esto es un texto'
const number = 123456
const array = ['curso de react', 'youtube', 4, 100000]
const boolean = true
const funcion = () => 1 + 1
const objeto = { nombre: 'Curso de Javascipt', duracion: 4 }
const fecha = new Date()

export const PrimerComponente = () => {
    return (
        <>
            <h1>Variables en JSX</h1>
            <h4>Variable de tipo String: </h4> <p>{string}</p>
            <h4>Variable de tipo Number: </h4> <p>{number}</p>
            <h4>Variable de tipo Array: </h4> <p>{array}</p>
            <h4>Variable de tipo Boolean: </h4> <p>{boolean}</p>
            <h4>Variable de tipo Funcion: </h4> <p>{funcion()}</p>
            <h4>Variable de tipo String: </h4> <p>{string}</p>
        </>
    )
}
