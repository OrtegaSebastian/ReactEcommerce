import{useState} from 'react'

function Contar({stock, inicial, onAdd}){
        let [cantidad, setCantidad] = useState(inicial);
        let [ mostrar  , setMostrar] = useState(true) 
        const  aumentarCantidad= ()=>{
    if(cantidad <= stock) setCantidad(cantidad++ );
    };
    const  disminuirCantidad= ()=>{
        if(cantidad >=inicial) setCantidad(cantidad--);
    };
    
    const agregarProducto =()=>{
        onAdd(cantidad)
        setMostrar(false)
    }
    return(
    <>
    <div>
        <div class ="Contar"><button type="button" on onClick={disminuirCantidad}>
        -    
        </button>
        <p className='Cantidad'>Cantidad {cantidad}</p> 
        <button type='button' onClick={aumentarCantidad}>
        + 
        </button>
        </div>    
        <button on onClick={agregarProducto}>Agregar al carrito</button>    
        </div>    
    
    <button>Ir al carrito</button> 
    </>    
    
)
}

export default Contar;