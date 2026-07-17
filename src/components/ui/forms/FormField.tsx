import { FC } from 'react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface FormFieldProps {
	label: string;
	register: UseFormRegisterReturn;
	error?: FieldError;
	type?: string;
	placeholder?: string;
	required?: boolean;
	as?: 'input' | 'textarea';
	rows?: number;
}

const FormField: FC<FormFieldProps> = ({
	label,
	register,
	error,
	type = 'text',
	placeholder,
	required,
	as = 'input',
	rows = 4,
}) => {
	const baseInputStyles =
		'w-full rounded-md border border-(--outline) bg-(--surface-low) px-4 py-2 text-(--foreground) placeholder:text-(--foreground-muted) outline-none transition focus:border-(--accent-yellow) focus:ring-2 focus:ring-[rgba(230,176,17,0.28)]';
	const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : '';

	return (
		<div className="flex flex-col gap-2">
			<label className="font-medium text-(--foreground-muted)">
				{label}
				{required && <span className="text-red-500 ml-1">*</span>}
			</label>
			{as === 'textarea' ? (
				<textarea
					{...register}
					placeholder={placeholder}
					rows={rows}
					className={`${baseInputStyles} ${errorStyles} resize-none`}
				/>
			) : (
				<input
					{...register}
					type={type}
					placeholder={placeholder}
					className={`${baseInputStyles} ${errorStyles}`}
				/>
			)}
			<span className="text-red-500 text-sm h-5">
				{error?.message}
			</span>
		</div>
	);
};

export default FormField;