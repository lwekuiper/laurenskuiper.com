import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/privacy-policy', '/terms-conditions'].map((path) => ({
    url: `https://www.laurenskuiper.com${path}`,
  }))
}
