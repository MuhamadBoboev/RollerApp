export interface IСharacteristics {
	id: number 
	text: string
	character: string | number 
}

export interface IСharacteristicsCategories {
	name?: string 
	id: number
	image: string 
	items: IСharacteristics[]
}