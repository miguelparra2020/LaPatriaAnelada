//el envío de datos de El registro de usuarios

export async function enviarDatos(dataObject) {
    const response = await fetch('https://backend-sistemas-autoorganizados-2.onrender.com/usersIntoPage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObject),
    });
  
    const data = await response.json();
    return data;
  }

