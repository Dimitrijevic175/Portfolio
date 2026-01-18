interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export default function SEO({
                                title = "Maksim Dimitrijević",
                                description = "Computer Science student...",
                                keywords = "Maksim, Portfolio, Maksim Dimitrijevic, Maksim Dimitrijević, maksim dimitrijevic, maksim dimitrijević",
                                image = "https://maksimdimitrijevic.vercel.app/preview.png",
                                url = "https://maksimdimitrijevic.vercel.app"
                            }: SEOProps) {
    return (
        <>
            {/* React 19 će ove tagove automatski "teleportovati" u <head> */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </>
    );
}