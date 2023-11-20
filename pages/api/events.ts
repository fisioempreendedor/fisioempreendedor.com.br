import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const eventsDirectory = join(process.cwd(), 'posts/_eventos')

export function getEventsSlugs() {
  return fs.readdirSync(eventsDirectory)
}

export function getEventsBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(eventsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllEvents(fields: string[] = []) {
  const slugs = getEventsSlugs()
  const posts = slugs
    .map((slug) => getEventsBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
