interface HeaderProps {
	titulo: string;
}

export default function DashboardHeader ({ titulo }: HeaderProps) {
	return (
		<header className="bg-[#101010] rounded-xl">
            <h1 className="text-3xl text-center py-8 rounded-xl text-gray-300">{titulo}</h1>
		</header>
	)
}
