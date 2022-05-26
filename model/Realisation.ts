export interface Realisation {
  id: string
  title: string
  shortDesc: string
  project_background: string
  link: string
  images: {
    image_portfolio: string
    image_preview: Array<string>
    image_hero: string
  }
  techno: Array<string>
}
