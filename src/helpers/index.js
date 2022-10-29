export const generarId=()=>{
  const randon=Math.random().toString(36).substr(2);
  const fecha=Date.now().toString(36)
  return randon+fecha;
}

export const formatearFecha=fecha=>{
  const fechaNueva=new Date(fecha);
  const obciones={
    year:'numeric',
    month:'long',
    day:'2-digit'
  }
  return  fechaNueva.toLocaleDateString('es-ES',obciones)
}