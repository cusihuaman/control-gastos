import React from 'react'
import NuevoProsupuesto from './NuevoProsupuesto'
import ControlPresupuesto from './ControlPresupuesto'

function Header({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValuePresupuesto
  }) 
  {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {
        isValidPresupuesto ?(
          <ControlPresupuesto
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValuePresupuesto={setIsValuePresupuesto}
          />
        )
        :(
          <NuevoProsupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValuePresupuesto={setIsValuePresupuesto}
          />
        )
      }

    </header>
  )
}

export default Header