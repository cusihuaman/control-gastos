import {useState,useEffect} from 'react'

function Filtrar() {
  return (
    <div className='filtros sombra contenedor'>
        <form >
          <div className='campo'>
            <label htmlFor="">Filtrar gastos</label>
            <select name="" id="">
            <option value="">--Seleccione--</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos_varios">Gastos varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="subcripciones">Subcripciones</option>
            </select>
          </div>
        </form>
    </div>
  )
}

export default Filtrar