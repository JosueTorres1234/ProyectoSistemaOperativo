import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solid from '@astrojs/solid-js';


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()]
});