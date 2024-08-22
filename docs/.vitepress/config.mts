import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: '/thesecondopinion/',
  title: "The Second Opinion",
  head: [['link', { rel: 'icon', href: '/thesecondopinion/favicon.ico' }]],
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
      copyright: '© 2024, <a href="https://github.com/jijirae">raeji</a> and contributors.'
    },
    
    nav: [
      { text: 'Download TSO', link: '/download' },
      { text: 'What is TSO?', link: '/what-is' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        items: [
          { text: 'What is TSO?', link: '/what-is' },
          { text: 'How-to', link: '/how-to' },
          { text: 'Download TSO', link: '/download' },
          { text: 'About', link: '/about' },
          { text: 'FREEMEDIAHECKYEAH', link: '/fmhy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jijirae/thesecondopinion/' }
    ]
  }
})

