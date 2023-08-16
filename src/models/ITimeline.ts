// export interface IDateTimeline {
// 	mainTitle: IMainTitleTimeline
// 	items: ITimeline[]
// }
export interface ITimeline {
	key: number
	title: string
	subtitle?: string
	image?: string
	text: string
}
// export interface IMainTitleTimeline {
// 	subtitleMain: string
// 	titleMain: string
// }