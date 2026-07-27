import {groq} from 'next-sanity';
import {client} from './client';

export interface SanityProductSummary {
	_id: string;
	heading: string;
	slug?: {
		current?: string;
	};
	description: string;
	length: string;
	imageUrl?: string | null;
	order?: number | null;
}

export interface HomePageData {
	hero?: {
		badgeText?: string;
		headingPre?: string;
		headingEmphasis?: string;
		headingPost?: string;
		subtext?: string;
		primaryButtonText?: string;
		secondaryButtonText?: string;
		imageBadgeLabel?: string;
		imageBadgeText?: string;
	};
	infoCardsSectionHeading?: string;
	infoCards?: {
		heading: string;
		description: string;
		icon?: string;
	}[];
	productShowcase?: {
		heading?: string;
		description?: string;
		buttonText?: string;
		featuredProducts?: SanityProductSummary[];
	};
}

export interface ProductsPageData {
	hero?: {
		badgeText?: string;
		headingPre?: string;
		headingEmphasis?: string;
		subtext?: string;
	};
	products?: SanityProductSummary[];
	moreInfoSection?: {
		eyebrow?: string;
		heading?: string;
		cards?: {
			imageUrl?: string | null;
			heading: string;
			description: string;
		}[];
	};
}

export async function getProductsPage() {
	const query = groq`*[_type == "productsPage"][0]{
		hero{
			badgeText,
			headingPre,
			headingEmphasis,
			subtext
		},
		products[]->{
			_id,
			heading,
			slug,
			description,
			length,
			"imageUrl": image.asset->url,
			order
		},
		moreInfoSection{
			eyebrow,
			heading,
			cards[]{
				"imageUrl": image.asset->url,
				heading,
				description
			}
		}
	}`;

	return client.fetch(query, {}, { next: { tags: ["productsPage", "product"] } });
}

export async function getHomePage() {
	const query = groq`*[_type == "homePage"][0]{
		hero{
			badgeText,
			headingPre,
			headingEmphasis,
			headingPost,
			subtext,
			primaryButtonText,
			secondaryButtonText,
			imageBadgeLabel,
			imageBadgeText
		},
		infoCardsSectionHeading,
		infoCards[]{
			heading,
			description,
			icon
		},
		productShowcase{
			heading,
			description,
			buttonText,
			featuredProducts[]->{
				_id,
				heading,
				slug,
				description,
				length,
				"imageUrl": image.asset->url,
				order
			}
		}
	}`;

	return client.fetch(query, {}, { next: { tags: ["homePage", "product"] } });
}





export interface SiteSettings {
  companyName: string;
  footerDescription: string;
  copyrightYear: number;
  contact: {
    phone: string;
    email: string;
    address: {
      street: string;
      zipCode: string;
      city: string;
    };
    mapsUrl: string;
  };
  defaultSeo: {
    // shape depends on your seo schema
		[key: string]: unknown;
  };
}

const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0]{
    companyName,
    footerDescription,
    copyrightYear,
    contact{
      phone,
      email,
      address{
        street,
        zipCode,
        city
      },
      mapsUrl
    },
    defaultSeo
  }
`;

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 3600 } });
}
