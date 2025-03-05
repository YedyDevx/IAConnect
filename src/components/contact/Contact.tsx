export default function Contact() {
	return (
		<section className="w-full flex flex-col items-center py-10 bg-gray-100">
			<h2 className="text-3xl font-bold text-gray-900">Contactos</h2>
			<form className="w-[400px] flex flex-col ">
				<label>Nombre</label>
				<input type="text"  placeholder="Tu Nombre"/>
				<label>Correo electronico</label>
				<input type="text"  placeholder="correo@email.com"/>
				<label>Descripcion</label>
				<textarea typeof="textarea"/>
				<button>Enviar</button>
			</form>
		</section>
	);
}
