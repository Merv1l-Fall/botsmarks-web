import Button from "./button"

type MontageWrapperProps = {
	onClose: () => void
}
const MontageWrapper = ({ onClose }: MontageWrapperProps) => {
	return (
		<div className="flex flex-col gap-6 p-8 md:p-16 py-8 rounded-md items-center justify-center bg-(--surface-higher)">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-2">
					<p className="text-lg font-bold">Montageanvisningar standard</p>
					<a href="montage_standard.pdf" target="_blank" rel="noopener noreferrer" className="text-(--accent-yellow) underline">
						<Button variant="primary" className="w-full">
							Se Montageanvisningar standard
						</Button>
					</a>

					<a href="montage_standard.pdf" download className="text-(--accent-yellow) underline">
						<Button variant="secondary" className="w-full">
							Ladda ned Montageanvisningar standard

						</Button>
					</a>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-lg font-bold">Montageanvisningar med färdiga fundament</p>
					<a href="Montage_fundament.pdf" target="_blank" rel="noopener noreferrer" className="text-(--accent-yellow) underline">
						<Button variant="primary" className="w-full">
							Se Montageanvisningar med färdiga fundament
						</Button>
					</a>

					<a href="Montage_fundament.pdf" download className="text-(--accent-yellow) underline">
						<Button variant="secondary" className="w-full">
							Ladda ned Montageanvisningar med färdiga fundament
						</Button>
					</a>
				</div>



				<Button variant="secondary" className="w-full" onClick={onClose}>
					Stäng
				</Button>
			</div>
		</div>
	)
}

export default MontageWrapper