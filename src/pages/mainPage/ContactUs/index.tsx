import Contacts from './Contacts/Contacts'
import Form from './Form'
import st from './contactUs.module.scss'

const ContactUs = () => {
	return (<section className={'padding_top_150 ' + st.contact_us}>
		<div id='contacts' className={'_container ' + st.container} >
			<Contacts />
			<Form />
		</div>
	</section>)
}

export default ContactUs