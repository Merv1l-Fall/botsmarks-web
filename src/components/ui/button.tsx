interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant: "primary" | "secondary";
}

const Button = ({ children, variant, className, type = "button", ...props }: ButtonProps) => {
	const buttonStyles = {
		primary: "bg-[var(--accent-yellow)] text-[var(--iron-grey)] hover:bg-white",
		secondary: "border-2 border-[var(--outline-strong)] text-[#f9f8f2] hover:bg-[rgba(255,255,255,0.27)]",
	};

	return (
		<button
			type={type}
			className={`inline-flex h-12 items-center justify-center rounded px-7 text-[0.84rem] font-bold uppercase tracking-[0.08em] transition ${buttonStyles[variant]} ${className ?? ""}`}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
