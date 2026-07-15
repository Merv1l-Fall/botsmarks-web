

"use client"

import { createPortal } from "react-dom"

type ModalWrapperProps = {
	children?: React.ReactNode
	onClose: () => void
}

const ModalWrapper = ({ children, onClose }: ModalWrapperProps) => {
	if (!children || typeof document === "undefined") {
		return null
	}

	return createPortal(
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-8" onClick={onClose}>
			<div className="z-50 max-h-[calc(100vh-4rem)] overflow-auto" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>,
		document.body,
	)
}

export default ModalWrapper