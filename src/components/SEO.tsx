// import { useEffect } from 'react';
//
// interface SEOProps {
//     title?: string;
//     description?: string;
//     keywords?: string;
//     image?: string;
//     url?: string;
// }
//
// export default function SEO({
//                                 title = "Maksim Dimitrijević",
//                                 description = "Computer Science and Software Engineering student at Faculty of Computing. Specializing in full-stack development with React, Spring Boot, and modern web technologies.",
//                                 keywords = "Maksim Dimitrijević, Maksim Dimitrijevic, Maksim, Dimitrijevic ,Software Engineer, Full Stack Developer, React, Spring Boot, Computer Science, RAF, Portfolio",
//                                 image = "/preview-image.png",
//                                 url = "https://tvoj-domen.com"
//                             }: SEOProps) {
//
//     useEffect(() => {
//         // Set title
//         document.title = title;
//
//         // Set meta tags
//         const setMetaTag = (name: string, content: string, property?: boolean) => {
//             let element = document.querySelector(
//                 property ? `meta[property="${name}"]` : `meta[name="${name}"]`
//             ) as HTMLMetaElement;
//
//             if (!element) {
//                 element = document.createElement('meta');
//                 if (property) {
//                     element.setAttribute('property', name);
//                 } else {
//                     element.setAttribute('name', name);
//                 }
//                 document.head.appendChild(element);
//             }
//             element.content = content;
//         };
//
//         // Basic meta tags
//         setMetaTag('description', description);
//         setMetaTag('keywords', keywords);
//         setMetaTag('author', 'Maksim Dimitrijević');
//
//         // Open Graph
//         setMetaTag('og:type', 'website', true);
//         setMetaTag('og:url', url, true);
//         setMetaTag('og:title', title, true);
//         setMetaTag('og:description', description, true);
//         setMetaTag('og:image', image, true);
//
//         // Twitter
//         setMetaTag('twitter:card', 'summary_large_image', true);
//         setMetaTag('twitter:url', url, true);
//         setMetaTag('twitter:title', title, true);
//         setMetaTag('twitter:description', description, true);
//         setMetaTag('twitter:image', image, true);
//
//         // Canonical link
//         let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
//         if (!canonical) {
//             canonical = document.createElement('link');
//             canonical.rel = 'canonical';
//             document.head.appendChild(canonical);
//         }
//         canonical.href = url;
//
//     }, [title, description, keywords, image, url]);
//
//     return null;
// }

// components/SEO.tsx
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
                                keywords = "Maksim, Portfolio...",
                                image = "https://tvoj-domen.com/preview.image.png",
                                url = "https://tvoj-domen.com"
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