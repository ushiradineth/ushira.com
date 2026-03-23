import type { Article, Person, WebSite, WithContext } from "schema-dts";
import avatar from "../../images/self.png";
import type { CollectionEntry } from "astro:content";
import { requireSocialLink } from "./socials";

export const blogWebsite: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: `${import.meta.env.SITE}/blog/`,
	name: "Ushira Dineth Blog",
	description: "Ushira Dineth's blog about software engineering",
	inLanguage: "en_US",
};

export const mainWebsite: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: import.meta.env.SITE,
	name: "Ushira Dineth",
	description: "Ushira Dineth's contact page, portfolio and blog",
	inLanguage: "en_US",
};

export const personSchema: WithContext<Person> = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Ushira Dineth",
	url: "https://ushira.com",
	image: `${import.meta.env.SITE}/${avatar.src}`,
	sameAs: [requireSocialLink("Twitter"), requireSocialLink("LinkedIn"), requireSocialLink("Github")],
	jobTitle: "Software Engineer",
	worksFor: {
		"@type": "Organization",
		name: "Surge Global",
		url: "https://surge.global",
	},
};

export function getArticleSchema(post: CollectionEntry<"blog">) {
	const imageUrl = new URL(`/og/blog/${post.id}/`, import.meta.env.SITE).toString();

	const articleStructuredData: WithContext<Article> = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.data.title,
		url: `${import.meta.env.SITE}/blog/${post.id}/`,
		image: imageUrl,
		description: post.data.description,
		datePublished: post.data.date.toString(),
		publisher: {
			"@type": "Person",
			name: "Ushira Dineth",
			url: import.meta.env.SITE,
			image: import.meta.env.SITE + avatar.src,
		},
		author: {
			"@type": "Person",
			name: "Ushira Dineth",
			url: import.meta.env.SITE,
			image: import.meta.env.SITE + avatar.src,
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${import.meta.env.SITE}/blog/${post.id}/`,
		},
	};
	return articleStructuredData;
}

export function getWebPageSchema(url: string, title: string, description: string) {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		url,
		name: title,
		description,
		author: {
			"@type": "Person",
			name: "Ushira Dineth",
			url: import.meta.env.SITE,
			image: import.meta.env.SITE + avatar.src,
		},
		inLanguage: "en_US",
	};
}

export function getWebPageJsonLd(url: string, title: string, description: string): string {
	const webPageSchema = getWebPageSchema(url, title, description);
	return JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [webPageSchema, mainWebsite, personSchema],
	});
}

export function getBlogJsonLd(): string {
	return JSON.stringify({
		"@context": "https://schema.org",
		"@graph": [blogWebsite, mainWebsite, personSchema],
	});
}
