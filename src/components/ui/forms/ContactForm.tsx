"use client";

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from './FormField';
import ConsentCheckbox from './ConsentCheckbox';
import { createContactFormSchema } from './validationSchema';
import type { ValidationMessages } from './validationSchema';

interface ContactFormProps {
	messages: ValidationMessages;
	onSubmit?: (data: ContactFormData) => Promise<void> | void;
	isLoading?: boolean;
}

export type ContactFormData = {
	name: string;
	email: string;
	message: string;
	consent: boolean;
};

const ContactForm: FC<ContactFormProps> = ({ messages, onSubmit, isLoading = false }) => {
	const validationSchema = createContactFormSchema(messages);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(validationSchema as any) as any,
		mode: 'onBlur',
		defaultValues: {
			name: '',
			email: '',
			message: '',
			consent: false,
		},
	});

	const handleFormSubmit = async (data: ContactFormData) => {
		if (onSubmit) {
			await onSubmit(data);
			reset();
		}
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-5 xs:gap-2 w-full">
			<FormField
				label={messages.forms.labels.name}
				register={register('name')}
				error={errors.name}
				placeholder={messages.forms.placeholders.name}
				required
			/>

			<FormField
				label={messages.forms.labels.email}
				register={register('email')}
				error={errors.email}
				placeholder={messages.forms.placeholders.email}
				type="email"
				required
			/>

			<FormField
				label={messages.forms.labels.message}
				register={register('message')}
				error={errors.message}
				placeholder={messages.forms.placeholders.message}
				as="textarea"
				rows={5}
				required
			/>

			<ConsentCheckbox
				label={messages.forms.labels.consentContact}
				register={register('consent')}
				error={errors.consent}
			/>

			<button
				type="submit"
				disabled={isLoading}
				className="rounded-md bg-(--accent-yellow) px-4 py-2 font-medium text-(--iron-grey) transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
			>
				{isLoading ? messages.forms.buttons.contactLoading : messages.forms.buttons.contact}
			</button>
		</form>
	);
};

export default ContactForm;
