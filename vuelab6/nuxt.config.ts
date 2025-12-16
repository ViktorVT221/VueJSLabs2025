export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  site: {
    url: 'http://localhost:3000'
  },

  sitemap: {
    urls: async () => {
      const posts = [
        { slug: 'post-1' },
        { slug: 'post-2' },
        { slug: 'post-3' }
      ]

      return posts.map(post => ({
        loc: `/blog/${post.slug}`
      }))
    }
  }
})
