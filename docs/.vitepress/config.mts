import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: '/thesecondopinion/',
  title: "The Second Opinion",
  head: [
    // Primary Meta Tags
    ['title', {}, 'The Second Opinion'],
    ['meta', { name: 'title', content: 'The Second Opinion' }],
    ['meta', { name: 'description', content: 'The Second Opinion is a suite of programs designed to scan for malware, viruses, trojans, and many more for your PC.' }],

    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://jijirae.github.io/thesecondopinion/' }],
    ['meta', { property: 'og:title', content: 'The Second Opinion' }],
    ['meta', { property: 'og:description', content: 'The Second Opinion is a suite of programs designed to scan for malware, viruses, trojans, and many more for your PC.' }],
    ['meta', { property: 'og:image', content: '/thesecondopinion/meta-tags.png' }],

    // Twitter
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:url', content: 'https://jijirae.github.io/thesecondopinion/' }],
    ['meta', { property: 'twitter:title', content: 'The Second Opinion' }],
    ['meta', { property: 'twitter:description', content: 'The Second Opinion is a suite of programs designed to scan for malware, viruses, trojans, and many more for your PC.' }],
    ['meta', { property: 'twitter:image', content: '/thesecondopinion/meta-tags.png' }],
  ],
  description: "The Second Opinion is a suite of programs designed to scan for malware, viruses, trojans, and many more for your PC.",
  themeConfig: {
    outline: {
      level: 'deep',  // Example: Display only h2 and h3 headings
      label: 'On this page',  // Example: Custom label for the outline
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: 'mascot.png',
    footer: {
      message: 'Tools included in TSO are not created by me. They are created by their respective developers. I am not responsible for any damage caused by the tools included in TSO.',
      copyright: '© 2024, <a href="https://github.com/jijirae">raeji</a> and <a href="https://jijirae.github.io/thesecondopinion/credits.html">contributors.</a>'
    },
    
    nav: [
      { text: '<b>⭐ Download TSO</b>', link: '/download' },
      { text: 'What is TSO?', link: '/what-is' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        items: [
          { text: 'What is TSO?', link: '/what-is' },
          { text: 'How-to', link: '/how-to' },
          { text: '<b><i>⭐ Download TSO</b></i>', link: '/download' },
          { text: 'About', link: '/about' },
          { text: 'FREEMEDIAHECKYEAH', link: '/fmhy' },
          { text: 'Credits', link: '/credits' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jijirae/thesecondopinion/' }
    ]
  }
})

