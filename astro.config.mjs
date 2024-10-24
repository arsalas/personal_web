// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	site: 'http://localhost:4321/',
	output: 'static',
	// adapter: vercel(),
});
