"use client"

import { useState, useEffect } from "react"
import Masonry from 'react-masonry-css'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: "classes" | "events" | "studio"
}

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [selectedCategory, setSelectedCategory] = useState<"all" | "classes" | "events" | "studio">("all")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/gallery')
        const images: GalleryImage[] = await response.json()
        setGalleryImages(images)
      } catch (error) {
        console.error('Error fetching gallery images:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20" suppressHydrationWarning={true}>
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-muted-green/40 to-muted-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-josefin text-5xl font-bold text-deep-green mb-4">Gallery</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Glimpses from our yoga classes, meditation sessions, and wellness events
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {["all", "classes", "events", "studio"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as typeof selectedCategory)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-golden text-deep-green shadow-lg"
                    : "bg-muted-green/30 text-deep-green hover:bg-golden/50"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl text-foreground/80">Loading gallery...</p>
            </div>
          ) : (
            <Masonry
              breakpointCols={{
                default: 3,
                1024: 3,
                768: 2,
                640: 1
              }}
              className="flex -ml-5 w-auto"
              columnClassName="pl-5 bg-clip-padding"
            >
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group cursor-pointer relative overflow-hidden rounded-lg mb-5 transform transition-all duration-300 hover:scale-105"
                  style={{
                    transform: `perspective(1000px) rotateY(0deg)`,
                  }}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-yellow-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6 rounded-lg">
                    <div>
                      <p className="text-deep-green font-semibold text-lg">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Masonry>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-4xl w-full max-h-screen flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-w-full max-h-screen rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="mt-8 px-6 py-2 rounded-lg bg-soft-white text-deep-green font-semibold hover:bg-golden transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Studio Info */}
      <section className="py-20 bg-gradient-to-b from-soft-white to-muted-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-josefin text-4xl font-bold text-deep-green mb-6">Visit Our Studio</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience the serene and welcoming atmosphere of Mishthy Yog Sadhna. Our studio is designed to support your
            yoga journey with comfort and spiritual energy.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-deep-green text-soft-white font-semibold hover:shadow-lg hover:scale-105 transition"
          >
            Book a Visit Today
          </a>
        </div>
      </section>
    </div>
  )
}
