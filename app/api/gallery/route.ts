import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: "classes" | "events" | "studio"
}

export async function GET() {
  const galleryDir = path.join(process.cwd(), 'public/gallery')
  const files = fs.readdirSync(galleryDir)

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
  const images: GalleryImage[] = []

  files.forEach((file, index) => {
    const ext = path.extname(file).toLowerCase()
    if (imageExtensions.includes(ext)) {
      const name = path.basename(file, ext)

      // Skip non-gallery images like logos
      if (name.toLowerCase().includes('logo')) {
        return
      }

      let category: "classes" | "events" | "studio" = "studio"

      if (name.toLowerCase().includes('class')) {
        category = "classes"
      } else if (name.toLowerCase().includes('event') || name.toLowerCase().includes('workshop') || name.toLowerCase().includes('challenge')) {
        category = "events"
      }

      const alt = name.replace(/[-_]/g, ' ').replace(/\d+/g, '').replace(/\b\w/g, l => l.toUpperCase()).trim()

      images.push({
        id: index + 1,
        src: `/gallery/${file}`,
        alt,
        category
      })
    }
  })

  return NextResponse.json(images)
}
