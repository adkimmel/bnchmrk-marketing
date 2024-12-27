// app/sitemap.xml/route.js

export function GET() {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://www.bnchmrk.com</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>1.0</priority>
        </url>
   
        <url>
          <loc>https://www.bnchmrk.com/features</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
   
        <url>
          <loc>https://www.bnchmrk.com/products</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
   
        <url>
          <loc>https://www.bnchmrk.com/explore-data</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
   
        <url>
          <loc>https://www.bnchmrk.com/contact</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.5</priority>
        </url>
   
        <url>
          <loc>https://www.bnchmrk.com/employee-benefits-benchmarking</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.9</priority>
        </url>
   
        <url>
          <loc>https://www.bnchmrk.com/request-more-info</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.6</priority>
        </url>
   
        <url>
          <loc>https://www.bnchmrk.com/request-sample-report</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.6</priority>
        </url>
      </urlset>`;

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
		},
	});
}
