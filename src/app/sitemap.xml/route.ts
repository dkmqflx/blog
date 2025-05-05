import { readdirSync, statSync } from "fs";
import { join } from "path";

export const dynamic = "force-static";

const BASE_URL = "https://dkmqflx.vercel.app";
const LASTMOD = new Date().toISOString();

const getPostFolders = () => {
  const postsPath = join(process.cwd(), "src/app/posts");

  return readdirSync(postsPath).filter((name) => {
    const fullPath = join(postsPath, name);
    return statSync(fullPath).isDirectory();
  });
};

export async function GET() {
  const postFolders = getPostFolders();

  const staticUrls = [
    {
      loc: BASE_URL,
      lastmod: LASTMOD,
      changefreq: "yearly",
      priority: 1,
    },
  ];

  const postUrls = postFolders.map((folder) => ({
    loc: `${BASE_URL}/posts/${folder}`,
    lastmod: LASTMOD,
    changefreq: "monthly",
    priority: 0.6,
  }));

  const urls = [...staticUrls, ...postUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n
                    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
                      .map(
                        (url) =>
                          `  <url>\n    
                              <loc>${url.loc}</loc>\n   
                              <lastmod>${url.lastmod}</lastmod>\n   
                              <changefreq>${url.changefreq}</changefreq>\n    
                              <priority>${url.priority}</priority>\n  
                            </url>`
                      )
                      .join("\n")}\n
                    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
