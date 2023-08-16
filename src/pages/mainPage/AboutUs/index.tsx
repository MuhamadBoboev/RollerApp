import AboutСompany from "./AboutСompany"
import Statistics from "./Statistics/Statistics"
import st from './aboutUs.module.scss'

const AboutUs = () => {
	return (<section className={'padding_top_150 ' + st.about_s}>
			<AboutСompany/>
			<Statistics/>
	</section>)
}

export default AboutUs