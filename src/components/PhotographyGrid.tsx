import Image from 'next/image'
import photos from '@/data/photos.json'
import { Photo } from '@/types'

export default function PhotographyGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
      {(photos as Photo[]).map((photo) => (
        <div
          key={photo.filename}
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: '4/3' }}
        >
          <Image
            src={`/images/photography/${photo.filename}`}
            alt={photo.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  )
}
