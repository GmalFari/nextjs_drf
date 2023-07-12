import React from 'react';
 const MAIN_URL ='https://libna-property.vercel.app'
const EXTERNAL_DATA_URL = 'https://fortestmimd.pythonanywhere.com/api/list-properties/';
 
const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts.results
          .map(({ id }) => {
            return `
                <url>
                    <loc>${`${MAIN_URL}/property/${id}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
    `;
 
class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await fetch(EXTERNAL_DATA_URL);
    const posts = await request.json();
 
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(posts));
    res.end();
  }
}
 
export default Sitemap;
