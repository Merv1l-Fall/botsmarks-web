import { FC } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface ConsentCheckboxProps {
	label: string;
	register: UseFormRegisterReturn;
	error?: FieldError;
}

const ConsentCheckbox: FC<ConsentCheckboxProps> = ({ label, register, error }) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="flex items-center gap-2 cursor-pointer">
				<input
					{...register}
					type="checkbox"
					className="w-4 h-4 cursor-pointer rounded border border-(--outline) bg-(--surface-low) text-(--accent-yellow) focus:ring-2 focus:ring-[rgba(230,176,17,0.28)]"
				/>
				<span className="text-sm text-(--foreground-muted)">{label}</span>
			</label>
			<span className="text-red-500 text-sm h-5">
				{error?.message}
			</span>
		</div>
	);
};

export default ConsentCheckbox;