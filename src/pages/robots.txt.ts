import type { APIRoute } from "astro";

export const prerender = true;

const DEFAULT_SITE = "https://absmach.eu";

export const GET: APIRoute = ({ site }) => {
  const base = site ? new URL(site) : new URL(DEFAULT_SITE);
  const sitemapURL = new URL("/sitemap-index.xml", base).href;

  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "User-agent: GPTBot",
    "Allow: /",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
    `Sitemap: ${sitemapURL}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
