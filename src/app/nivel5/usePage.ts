export const ejercicios = [
	{
	  id: 1,
	  titulo: "Introducción sobre promesas y callbacks",
	  descripcion: "Este ejercicio te ayudará a comprender cómo funcionan los callbacks y las promesas en JavaScript, y cómo convertir una función basada en callbacks a una basada en promesas.",
	  instrucciones: `
		Conceptos fundamentales de callbacks y promesas:
		  1. ¿Qué es un callback en JavaScript?
		  2. ¿Cuál es el principal problema al usar callbacks para manejar código asíncrono?
		  3. ¿Cómo se resuelve una promesa en JavaScript?
		  4. ¿Qué diferencia hay entre una promesa y un callback?

		  Ejercicio práctico:
		  - Crea una función que simule obtener datos de un usuario usando un callback.
		  - Luego, convierte esa misma función para que use promesas.
	  `,
	},
	{
	  id: 2,
	  titulo: "Introducción sobre async/await",
	  descripcion: "En este ejercicio aprenderás a usar async/await para escribir código asíncrono de manera más clara y estructurada.",
	  instrucciones: `
	  Conceptos fundamentales de async/await:
		1. ¿Qué hace la palabra clave 'async' en una función?
		2. ¿Para qué sirve 'await' en JavaScript?
		3. ¿Qué hace la cláusula 'finally' en un bloque try/catch?

		Ejercicio práctico:
	   - Crea una función que simule un tiempo de espera que use 'async/await' y simule un tiempo de espera de 2 segundos antes de mostrar un mensaje en consola.
	`,
	},
	{
	  id: 3,
	  titulo: "Introducción sobre Fetch",
	  descripcion: "Este ejercicio te enseñará a hacer peticiones HTTP usando Fetch y manejar respuestas y errores de manera efectiva.",
	  instrucciones: `
	  Conceptos fundamentales de Fetch:
		1. ¿Qué es Fetch en JavaScript?
		2. ¿Por qué usamos 'await' con Fetch?
		3. ¿Cómo se maneja un error en una petición Fetch?

		Ejercicio práctico:
	   - Usa Fetch para obtener un solo usuario desde JSONPlaceholder y muestra su nombre en la consola.
	`,
	},
  ];

  export const respuestas = [
	{
	  id: 1,
	  descripcion: "Aquí se presentan las respuestas a las preguntas sobre callbacks y promesas, además de la implementación de una función con callback y su conversión a promesas.",
	  codigo: `
	  Respuesta 1: console.log('1. Un callback es una función que se pasa como argumento a otra función y se ejecuta después.');
	  Respuesta 2: console.log('2. El problema principal es que el código puede volverse difícil de leer y mantener.');
	  Respuesta 3: console.log('3. Se resuelve usando .then() y .catch().');
	  Respuesta 4: console.log('4. Encadenar promesas (.then()) permite estructurar el código de forma secuencial y evitar anidaciones excesivas.');

	  Ejercicio:
	  function obtenerDatosConCallback(id, callback) {
		  setTimeout(() => {
			  const datos = { id, nombre: 'Carlos' };
			  callback(datos);
		  }, 1000);
	  }

	  function obtenerDatosConPromesa(id) {
		  return new Promise((resolve) => {
			  setTimeout(() => {
				  resolve({ id, nombre: 'Carlos' });
			  }, 1000);
		  });
	  }
   `,
	},
	{
	  id: 2,
	  descripcion: "Este código contiene respuestas sobre async/await y una función que simula un retraso de 2 segundos antes de mostrar un mensaje en consola.",
	  codigo: `
	  Respuesta 1: console.log('async: convierte una función en asíncrona, lo que permite el uso de 'await' dentro de ella y facilita el manejo de promesas.');
	  Respuesta 2: console.log('await: se usa dentro de funciones asíncronas para esperar el resultado de una promesa antes de continuar con la ejecución del código.');
	  Respuesta 3: console.log('finally' contiene código que se ejecuta siempre, independientemente de si hubo un error o no en el bloque 'try');

	  Ejercicio:
	  async function esperar() {
	  console.log("Esperando 2 segundos...");
	  await new Promise(resolve => setTimeout(resolve, 2000));
	  console.log("Tiempo de espera completado.");
	  }

	  // Llamar a la función
	  esperar();
	  `,
	},
	{
	  id: 3,
	  descripcion: "Aquí se explican las bases de Fetch y se implementa una función que obtiene usuarios y filtra los que tienen nombres que comienzan con 'C'.",
	  codigo: `
	  Respuesta 1: console.log('Fetch es una API nativa de JavaScript que permite hacer peticiones HTTP de manera sencilla para obtener datos de un servidor.');
	  Respuesta 2: console.log('Usamos 'await' con Fetch porque la función 'fetch()' devuelve una promesa, y 'await' nos permite esperar a que la promesa se resuelva antes de continuar con la ejecución del código.');
	  Respuesta 3: console.log('Se maneja con un bloque 'try...catch'. Si la petición falla, el bloque 'catch' captura el error y permite manejarlo adecuadamente.');

	  Ejercicio:
	  async function obtenerUsuarios() {
	  try {
		  const response = await fetch('https://jsonplaceholder.typicode.com/users');
		  const usuarios = await response.json();

		  // Filtrar usuarios cuyo nombre comienza con 'C'
		  const usuariosFiltrados = usuarios.filter(user => user.name.startsWith('C'));

		  console.log('Usuarios filtrados:', usuariosFiltrados);
	  } catch (error) {
		  console.error('Error al obtener los usuarios:', error);
	  }
	  }

	  // Llamar a la función
	  obtenerUsuarios();
	  `,
	},
  ];
