import Container from '../../../components/Container'
import Wrapper from '../../../components/Wrapper'
import Contacts from './Contacts/Contacts'
import Form from './Form'
import st from './contactUs.module.scss'

const ContactUs = () => {
	return (<Wrapper className={st.contact_us}>
		<Container id='contacts' className={'_container ' + st.container} >
			<Contacts />
			{/* <Form /> */}
		</Container>
	</Wrapper>)
}

export default ContactUs