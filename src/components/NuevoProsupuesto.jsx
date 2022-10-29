import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoProsupuesto =({presupuesto,setPresupuesto,setIsValuePresupuesto})=> {
      const [mensaje,setMensaje]=useState('')

      const handlePresupuesto=(e)=>{
        e.preventDefault();
        if(!(presupuesto)||(presupuesto)<0){
          setMensaje('No es un presupuesto valido')
          return
        }
          setMensaje('')
          setIsValuePresupuesto(true)
        
      }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form className='formulario' onSubmit={handlePresupuesto}>
          <div className='campo'>
            <label htmlFor="">Definir Presupuesto</label>
              <input
              className='nuevo-presupuesto'
              type="number"
              placeholder='Añade tu presupuesto'
              value={presupuesto}
              onChange={e=>setPresupuesto(Number(e.target.value))}
               />
          </div>
          <div>
            <input type="submit" value='Añadir' />
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
          </div>
      </form>
    </div>
  )
}

export default NuevoProsupuesto