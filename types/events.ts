import type Author from './author'

type EventsType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  infos: Array<string>
}

export default EventsType
