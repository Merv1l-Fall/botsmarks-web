import {groq} from 'next-sanity';
import {client} from './client';


export async function getSiteSettings() {
	const query = groq`*[_type == "siteSettings"][0]`;
	const siteSettings = await client.fetch(
		query,
		{},
		{ next: { tags: ["siteSettings"] } }
	);
	return siteSettings;
}

export async function getHomePage() {

	const query = groq`*[_type == "homePage"][0]`;
	const homePage = await client.fetch(
		query,
		{},
		{ next: { tags: ["homePage"] } }
	);
	return homePage;
}