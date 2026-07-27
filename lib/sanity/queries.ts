import {groq} from 'next-sanity';
import {client} from './client';

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
			image,
			order
		},
		moreInfoSection{
			eyebrow,
			heading,
			cards[]{
				image,
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
				image,
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
    [key: string]: any;
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
