export default defineAppConfig({
  docus: {
    title: 'Avenbreaks Foundation',
    description: 'The best place to start build your blockchain from scratch.',
    image: 'https://kavn.sgp1.cdn.digitaloceanspaces.com/image-removebg-preview.png',
    socials: {
      twitter: 'joyy_wibowo',
      github: 'avenbreaks/vigilant-chainsaw',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://joy-wibowo-avenbreaks.webflow.io/'
      }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
