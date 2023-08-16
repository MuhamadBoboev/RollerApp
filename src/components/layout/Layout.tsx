import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"
import HeaderContainer from "./HeaderContainer"
import React, { useEffect } from 'react'


const Layout = () => {
	const location = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return (<div className="wrapper">
		<HeaderContainer />


		<Outlet />


		<Footer />
	</div>)
}

export default Layout