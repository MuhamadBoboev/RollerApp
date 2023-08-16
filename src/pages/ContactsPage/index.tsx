import FormMain from "../../components/FormMain"
import Contacts from "./Contacts"

const ContactsPage = () => {
	return (
		<>
			<Contacts />
			<FormMain titleChildren="свяжитесь с нами" textChildren="Отправьте онлайн форму для заказа и в течении дня Вам позвонят" />
		</>
	)
}
export default ContactsPage