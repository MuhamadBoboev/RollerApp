export interface IAccordion {
	id?: number 
	name?: string
	text?: string 
	items?: IAccordionItems[]
}

export interface IAccordionItems {
	itemsName?: string  
	itemsText?: string
	items?: IAccordionItem[]
}

export  interface IAccordionItem {
	itemName?: string
	itemText?: string
}