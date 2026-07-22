import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cappelletticlaudio.com',
  integrations: [sitemap()],
  server: { port: Number(process.env.PORT) || 4321 },
});
