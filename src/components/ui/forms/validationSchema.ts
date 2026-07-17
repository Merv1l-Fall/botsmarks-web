import { z } from "zod";
import type { ContactFormData } from "./ContactForm";

export type ValidationMessages = {
	forms: {
		labels: {
			companyName: string;
			name: string;
			address: string;
			postalCode: string;
			city: string;
			email: string;
			message: string;
			consentContact: string;
			consentMagazine: string;
		};
		placeholders: {
			companyName: string;
			name: string;
			address: string;
			postalCode: string;
			city: string;
			email: string;
			message: string;
		};
		buttons: {
			contact: string;
			contactLoading: string;
			magazine: string;
			magazineLoading: string;
		};
		validation: {
			companyName: {
				required: string;
				minLength: string;
			};
			name: {
				required: string;
				minLength: string;
			};
			address: {
				required: string;
				minLength: string;
			};
			postalCode: {
				required: string;
				pattern: string;
			};
			city: {
				required: string;
				minLength: string;
			};
			email: {
				required: string;
				invalid: string;
			};
			message: {
				required: string;
				minLength: string;
			};
			consent: {
				required: string;
			};
		};
	};
};

export const createContactFormSchema = (messages: ValidationMessages) => {
	const schema = z.object({
		name: z
			.string()
			.min(1, messages.forms.validation.name.required)
			.min(2, messages.forms.validation.name.minLength),
		email: z
			.email(messages.forms.validation.email.invalid)
			.min(1, messages.forms.validation.email.required),
		message: z
			.string()
			.min(1, messages.forms.validation.message.required)
			.min(10, messages.forms.validation.message.minLength),
		consent: z.boolean().refine((val) => val === true, {
			message: messages.forms.validation.consent.required,
		}),
	});
	return schema as z.ZodType<ContactFormData>;
};