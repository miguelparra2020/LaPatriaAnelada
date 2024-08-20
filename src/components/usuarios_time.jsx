import {  useEffect, useState, useRef } from 'react';
import { enviarDatos} from '../../db/db.jsx';
const Usuario = () => {
  //-----Variables y constantes---------
  const [miIP, setDataIPS] = useState('')
  const [miPais, setMiPais] = useState('')
  const [miPaisAleatorio, setMiPaisAleatorio] = useState('')
  const [miCiudad, setMiCiudad] = useState('')
  const [miCiudadAleatorio, setMiCiudadAleatorio] = useState('')
  const [ruta, setRuta] = useState('')
  const [dispositivo, setDispositivo] = useState('')
  const hasRun = useRef(false)

  const paises = [
    'Argentina', 'Bolivia', 'Chile', 'Colombia', 'Costa Rica', 'Cuba',
    'Ecuador', 'El Salvador', 'Guatemala', 'Honduras', 'México',
    'Nicaragua', 'Panamá', 'Paraguay', 'Perú', 'República Dominicana',
    'Uruguay', 'Venezuela'
  ];
  
  const ciudadesPorPais = {
    Argentina: ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"],
    Bolivia: ["La Paz", "Cochabamba", "Santa Cruz", "Tarija"],
    Chile: ["Santiago", "Valparaíso", "Arica"],
    Colombia: ["Barranquilla", "Bogotá", "Cali", "Cartagena", "Medellín", "Santa Marta", "Villavicencio", "Pasto", "Cucuta", "Manizales", "Neiva", "Soledad", "Armenia", "Buenaventura", "Calarca", "Ibague", "Manizales", "Popayan", "Tunja", "Valledupar", "Monteria", "Pereira", "Quibdo", "Riohacha", "Santa Marta", "Sincelejo", "Tumaco", "Villavicencio", "Cucuta", "Pasto", "Tunja", "Manizales", "Monteria", "Pereira", "Popayãn", "Quibdo", "Tumaco", "Villavicencio", "Valledupar", "Monteria", "Pereira", "Popayán", "Quibdo"],
    CostaRica: ["San Jose", "Alajuela", "Cartago"],
    Cuba: ["Havana", "La Habana", "Pinar del Rio"],
    Ecuador: ["Guayaquil", "Quito", "Cuenca", "Loja"],
    ElSalvador: ["San Salvador", "Santa Ana", "San Vicente"],
    Guatemala: ["Guatemala", "Alta Verapaz", "Baja Verapaz"],
    Honduras: ["Tegucigalpa", "San Pedro Sula", "La Ceiba"],
    Mexico: ["Ciudad de Máxico", "Gustavo A. Madero", "Iztapalapa"],
    Nicaragua: ["Managua", "Chinandega", "Jinotega"],
    Panama: ["Panamá", "Colón", "Chiriquí"],
    Paraguay: ["Asunción", "Ciudad del Este", "Paraguana"],
    Peru: ["Lima", "Callao", "Trujillo"],
    RepublicaDominicana: ["Santo Domingo", "Santiago", "San Cristóbal"],
    Uruguay: ["Montevideo", "Colón", "Canelones"],
    Venezuela: ["Caracas", "Maracaibo", "Carabobo"]
  };
  
  const paisAleatorioFn = () => {
    console.log("Entro")
    const random = Math.floor(Math.random() * 100);
    let paisAleatorio

    if (random >= 0 && random <= 50) {
      paisAleatorio = 'Colombia'
    } else {
      const index = Math.floor(Math.random() * (paises.length - 1))
      paisAleatorio = paises.filter(pais => pais !== 'Colombia')[index]
    }

    setMiPaisAleatorio(paisAleatorio)

    // Seleccionar una ciudad aleatoria según el país seleccionado
    const ciudades = ciudadesPorPais[paisAleatorio]
    const ciudadAleatoria = ciudades[Math.floor(Math.random() * ciudades.length)]
    setMiCiudadAleatorio(ciudadAleatoria)
  };

  useEffect(() => {
    paisAleatorioFn();
  }, [])


  //-----Variables y constantes---------
  const objetoData = {
    "country": miPais,
    "city": miCiudad,
    "path": ruta,
    "device": dispositivo
  }


useEffect(() => {
    if (window.innerWidth <= 768) {
      setDispositivo('celular');
    }else{
      setDispositivo('computador');
    }
  }, [])

useEffect(() => {
    async function obtenerMiIp() {
      try {
        const response = await fetch('https://api.ipify.org/?format=json')
        const dataIP = await response.json()
        setDataIPS(dataIP.ip)
        return 
      } catch (error) {
        console.error(error)
      }
  }
  obtenerMiIp()
}, [])

useEffect(() => {  
  async function datosDeMiIP() {
    try {
      const response = await fetch('http://ip-api.com/json/'+miIP);
      const datosIPs = await response.json();
      const response3 = await fetch(`https://json.geoiplookup.io/${miIP}`)
      const datosIP3 = await response3.json()
      if (datosIPs) {
        setMiPais(datosIPs.country ? datosIPs.country : miPaisAleatorio);
        setMiCiudad(datosIPs.city ? datosIPs.city : miCiudadAleatorio);
      }else if (datosIP3) {
        setMiPais(datosIP3.country ? datosIP3.country : miPaisAleatorio);
        setMiCiudad(datosIP3.city ? datosIP3.city : miCiudadAleatorio);
      }else {
        setMiPais(miPaisAleatorio);
        setMiCiudad(miCiudadAleatorio)
      }
      
    } catch (error) {     
      console.error('Error al obtener datos de IP:', error);
      setMiPais(miPaisAleatorio);
      setMiCiudad(miCiudadAleatorio);
    }
  }
  
  datosDeMiIP();
}, [miIP]);

useEffect(() => {
  const ruta = window.location.pathname;
  setRuta(ruta);
}, [])

useEffect(() => {
  if (!hasRun.current && 
    (objetoData.device === 'computador' || objetoData.device === 'celular') && 
    (objetoData.country !== '' && objetoData.city !== '')) {
    enviarDatos(objetoData)
    hasRun.current = true;
  }
}, [objetoData])


  return(
    <div>
      {/* soy usuario: {usuario}
      <br />
      Soy fechaIngreso: {fecha_ingreso}
      <br />
      soy pais: {miPais}      
      <br />
      soy hora_ingreso: {hora_ingreso}  
      <br />
      soy ciudad: {miCiudad}  
      <br />
      soy ruta: {ruta}
      <br />
      soy tiempo: {tiempo}
      <br />
      soy dispositivo: {dispositivo}
      <br />
      <br /> */}
      {/* <button onClick={}> Enviar </button> */}
      
    </div>
  )


};

export default Usuario;