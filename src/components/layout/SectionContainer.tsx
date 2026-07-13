
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
	return (
		<div className={`mx-auto w-full max-w-[1920px] px-8 md:px-16 ${className}`}>
			{children}
		</div>
	);
};

export default Container;