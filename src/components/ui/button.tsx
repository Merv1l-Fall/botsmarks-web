import Link from "next/link";

type ButtonBaseProps = {
	children: React.ReactNode;
	variant: "primary" | "secondary";
	className?: string;
};

type ButtonElementProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
	href?: never;
};

type LinkElementProps = ButtonBaseProps &
	Omit<React.ComponentProps<typeof Link>, "href" | "children" | "className"> & {
		href: React.ComponentProps<typeof Link>["href"];
	};

type ButtonProps = ButtonElementProps | LinkElementProps;

const buttonStyles = {
	primary: "bg-[var(--accent-yellow)] text-[var(--iron-grey)] hover:bg-white",
	secondary: "border-2 border-[var(--outline-strong)] text-[#f9f8f2] hover:bg-[rgba(255,255,255,0.27)]",
};

const sharedClasses = (className?: string) =>
	`inline-flex h-12 items-center justify-center rounded px-7 text-[0.84rem] font-bold uppercase tracking-[0.08em] transition ${className ?? ""}`;

const Button = (props: ButtonProps) => {
	const { children, variant, className } = props;
	const classes = `${sharedClasses(className)} ${buttonStyles[variant]}`;

	if ("href" in props) {
		const { href, ...anchorProps } = props;

		return (
			<Link href={href} className={classes} {...anchorProps}>
				{children}
			</Link>
		);
	}

	const { type = "button", ...buttonProps } = props;

	return (
		<button type={type} className={classes} {...buttonProps}>
			{children}
		</button>
	);
};

export default Button;
