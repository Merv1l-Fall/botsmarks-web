interface buttonProps {
	text: string;
	type: "primary" | "secondary";
	onClick?: () => void;
}

const defaultButton = ({ text, type, onClick }: buttonProps) => {
	const buttonStyles = {
		primary: "bg-[var(--accent-yellow)] text-[var(--iron-grey)]",
		secondary: "border-2 border-[var(--outline-strong)] text-[#f9f8f2]",
	};

	return (
		<button
			className={`inline-flex h-12 items-center justify-center rounded px-7 text-[0.84rem] font-bold uppercase tracking-[0.08em] transition hover:brightness-105 ${buttonStyles[type]}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
}

export default defaultButton;
