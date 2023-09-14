import Wrapper from "../../../components/Wrapper"
import AboutСompany from "./AboutСompany"
import Statistics from "./Statistics/Statistics"
import st from './aboutUs.module.scss'

const AboutUs = () => {
	return (
		<Wrapper>
			<div className={st.about_s}>
				<AboutСompany />
				{/* <Statistics /> */}
			</div>
		</Wrapper>
	)
}

export default AboutUs