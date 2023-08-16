interface PhotoGalleryItems {
	id: number
	image: string
}
export interface IGalleryCategory {
	name: string
	id: number
	items: PhotoGalleryItems[]
}


