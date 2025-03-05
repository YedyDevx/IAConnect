import { FaChartLine, FaClock, FaDollarSign, FaComments, FaCheckCircle } from "react-icons/fa";

const itemBenefits = [
	{
		id: 1,
		title: "Mejora la experiencia",
		description: "Respuestas rápidas, personalizadas y sin tiempos de espera.",
		icon: FaCheckCircle,
	},
	{
		id: 2,
		title: "Disponibilidad 24/7",
		description: "Atiende a los clientes en cualquier momento, cualquier hora.",
		icon: FaClock,
	},
	{
		id: 3,
		title: "Ahorros de costos",
		description: "Reduce gastos en atención al cliente al automatizar respuestas y procesos.",
		icon: FaDollarSign,
	},
	{
		id: 4,
		title: "Aumento de conversaciones",
		description: "Guía a los clientes en el proceso sin afectar la calidad del servicio.",
		icon: FaChartLine,
	},
	{
		id: 5,
		title: "Escalabilidad",
		description: "Aumenta la capacidad de atención sin necesidad de contratar más personal.",
		icon: FaComments,
		image: "/images/img-benefits.svg",
	},
];

export default itemBenefits;
