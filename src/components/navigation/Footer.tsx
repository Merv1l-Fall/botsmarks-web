
import {getSiteSettings} from "@/lib/sanity/queries"
import FooterClient from "./FooterClient"

const Footer = async () => {
	const siteSettings = await getSiteSettings()

	return (
		<FooterClient siteSettings={siteSettings} />
	)
}

export default Footer