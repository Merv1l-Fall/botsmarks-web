"use client";

import SectionContainer from "@/components/layout/SectionContainer";
import ContactForm, { type ContactFormData } from "@/components/ui/forms/ContactForm";
import type { ValidationMessages } from "@/components/ui/forms/validationSchema";

const contactFormMessages: ValidationMessages = {
	forms: {
		labels: {
			companyName: "Företagsnamn",
			name: "Namn",
			address: "Adress",
			postalCode: "Postnummer",
			city: "Ort",
			email: "E-post",
			message: "Meddelande",
			consentContact: "Jag godkänner att Botsmarks Mekaniska kontaktar mig",
			consentMagazine: "Jag vill ha broschyren",
		},
		placeholders: {
			companyName: "Ditt företag",
			name: "Ditt namn",
			address: "Din adress",
			postalCode: "922 76",
			city: "Botsmark",
			email: "namn@foretag.se",
			message: "Skriv ditt meddelande här",
		},
		buttons: {
			contact: "Skicka",
			contactLoading: "Skickar...",
			magazine: "Skicka broschyr",
			magazineLoading: "Skickar...",
		},
		validation: {
			companyName: {
				required: "Ange företagsnamn.",
				minLength: "Företagsnamnet måste vara minst 2 tecken.",
			},
			name: {
				required: "Ange ditt namn.",
				minLength: "Namnet måste vara minst 2 tecken.",
			},
			address: {
				required: "Ange adress.",
				minLength: "Adressen måste vara minst 2 tecken.",
			},
			postalCode: {
				required: "Ange postnummer.",
				pattern: "Ange ett giltigt postnummer.",
			},
			city: {
				required: "Ange ort.",
				minLength: "Orten måste vara minst 2 tecken.",
			},
			email: {
				required: "Ange e-postadress.",
				invalid: "Ange en giltig e-postadress.",
			},
			message: {
				required: "Skriv ett meddelande.",
				minLength: "Meddelandet måste vara minst 10 tecken.",
			},
			consent: {
				required: "Du måste godkänna att vi kontaktar dig.",
			},
		},
	},
};

const ContactPage = () => {
	const handleContactSubmit = async (data: ContactFormData) => {
		const subject = encodeURIComponent(`Kontaktförfrågan från ${data.name}`);
		const body = encodeURIComponent(
			`Namn: ${data.name}\nE-post: ${data.email}\n\nMeddelande:\n${data.message}`,
		);

		window.location.href = `mailto:info@botsmarksmekaniska.se?subject=${subject}&body=${body}`;
	};

	return (
		<main className="relative min-h-screen overflow-hidden">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_16%,rgba(230,176,17,0.08),transparent_25%)]" />

			<section className="py-10 md:py-14">
				<SectionContainer className="flex flex-col gap-4">
					<div className="flex items-center gap-3 text-[0.69rem] font-semibold uppercase tracking-widest text-(--accent-yellow)">
						<span className="h-px w-7 bg-(--accent-yellow)" />
						Kontakt
					</div>
					<h1 className="text-balance text-[2.1rem] font-bold leading-[1.15] tracking-[-0.02em] text-(--foreground) sm:text-[2.6rem] lg:text-[3.2rem]">
						Kontakta oss
					</h1>
					<p className="max-w-2xl text-[1rem] leading-[1.65] text-(--foreground-muted) lg:text-[1.05rem]">
						eller ring om du hellra pratar än skriver
					</p>
				</SectionContainer>
			</section>

			

			<section className="pb-16 md:pb-24">
				<SectionContainer>
					<div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12">
						<div className="rounded-2xl bg-(--background) p-8">
							<ContactForm messages={contactFormMessages} onSubmit={handleContactSubmit} />
						</div>

						<aside className="rounded-2xl bg-(--background) p-8">
							<p className="text-[0.69rem] font-semibold uppercase tracking-widest text-(--accent-yellow)">
								Alternative
							</p>
							<h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-(--foreground)">
								Kontaktuppgifter
							</h2>
							<p className="mt-2 text-sm text-(--foreground-muted)">
								Contact info
							</p>

							<div className="mt-8 space-y-4 text-[1rem] leading-7 text-(--foreground)">
								<a className="block transition hover:text-(--accent-yellow)" href="tel:093460021">
									0934-60021
								</a>
								<a className="block break-all transition hover:text-(--accent-yellow)" href="mailto:info@botsmarksmekaniska.se">
									info@botsmarksmekaniska.se
								</a>
								<a
									className="block transition hover:text-(--accent-yellow)"
									href="https://maps.app.goo.gl/XKZ5cumkaWJpASJMA"
									target="_blank"
									rel="noreferrer"
									>
									Botulfsvägen 24, 92276 Botsmark
								</a>
							</div>
						</aside>
					</div>
				</SectionContainer>
			</section>
		</main>
	);
								
};

export default ContactPage;
