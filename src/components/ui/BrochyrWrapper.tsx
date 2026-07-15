import Image from "next/image"
import Button from "./button"



const BrochyrWrapper = () => {
	return(
		<div className ="flex flex-col gap-6 p-8 md:p-16 py-8 rounded-md items-center justify-center bg-(--surface-higher)">
			<Image src="/botsmarks_first_page.jpg" alt="Broschyr" width={600} height={600} className="rounded-lg" />
			<div className="flex flex-col gap-4 md:flex-row">

			<a href="Broschyr.pdf" target="_blank" rel="noopener noreferrer" className="text-(--accent-yellow) hover:text-(--accent-yellow-hover) underline">
			<Button variant="primary" className="w-full">
				Se Broschyr
			</Button>
			</a>
			<a href="Broschyr.pdf" download className="text-(--accent-yellow) hover:text-(--accent-yellow-hover) underline">
			<Button variant="secondary" className="w-full">
				Ladda ned Broschyr

			</Button>
			</a>
			</div>
		</div>
	)
}

export default BrochyrWrapper