export default defineEventHandler((event) => {
  const slug = event.context.params?.slug

  const posts = [
    {
      slug: 'nuxt-basics',
      title: 'Nuxt basics',
      content: 'This article explains the basics of Nuxt 4.'
    },
    {
      slug: 'nuxt-routing',
      title: 'Routing in Nuxt',
      content: 'This article explains routing and dynamic pages.'
    },
    {
      slug: 'nuxt-seo',
      title: 'SEO in Nuxt',
      content: 'This article explains SEO features in Nuxt.'
    }
  ]

  const post = posts.find(p => p.slug === slug)

  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post not found'
    })
  }

  return post
})
