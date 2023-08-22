export interface INewsItems {
	image: string
	data: string 
	title: string 
	text: string 
	link: string
	ItemNewsDate: ItemNewsDate[]
}
export interface ItemNewsDate {
	image: string 
	title: string 
	text: string
}