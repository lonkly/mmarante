import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    const baseUrl = 'https://mariamarante.com';
    const pages = [
        '',
        '/certificates',
        '/client',
        '/contacts', 
        '/education',
        '/methods',
        '/questionnaire',
        '/requests'
    ];
    
    const languages = ['en', 'ru'];
    const urls: string[] = [];
    
    // Add homepage
    urls.push(`
        <url>
            <loc>${baseUrl}</loc>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
        </url>
    `);
    
    // Add all pages for each language
    pages.forEach(page => {
        if (page !== '') {
            languages.forEach(lang => {
                urls.push(`
        <url>
            <loc>${baseUrl}/${lang}${page}</loc>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>
                `);
            });
        }
    });
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
</urlset>`.trim();
    
    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=3600'
        }
    });
};