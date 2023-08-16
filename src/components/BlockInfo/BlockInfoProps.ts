
interface BlockInfoProps  {
	subtitle: string
	title: string 
	text: string 
	image: string
	variant?: 'first' | 'second'
	children?: React.ReactNode
	button?: boolean | null
}