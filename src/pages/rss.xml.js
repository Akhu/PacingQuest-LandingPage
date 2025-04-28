import rss, { pagesGlobToRssItems } from '@astrojs/rss'

export async function get() {
  return rss({
    title: 'Anthony Da Cruz',
    description: 'Designer innovation & développeur mobile, blog philo, tech et productivité',
    site: 'https://anthony-dacruz.com',
    items: await pagesGlobToRssItems(
        import.meta.glob('./**/*.md')
      ),
    customData: `<language>fr-fr</language>`
  })
}
