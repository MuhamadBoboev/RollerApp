import React from 'react';
import './styles/style.scss'
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/index';
import AboutCompany from './pages/AboutCompany';
import Layout from './components/layout/Layout';
import ContactsPage from './pages/ContactsPage';
import ProfileSystemsForWindows from './pages/ProfileSystemsForWindows';
import ProfileSystemsForDoors from './pages/ProfileSystemsForDoors';
import SimpleWindow from './pages/SimpleWindow';
import Accessories from './pages/Accessories';
import BrandsPage from './pages/BrandsPage';
import Products from './components/Products';
import NewsPage from './pages/NewsPage';
import OurServicesPage from './pages/OurServicesPage';
import WindowForNursery from './pages/WindowForNursery';
import EnergyEfficientWindow from './pages/EnergyEfficientWindow';
import SoundProtectionWindow from './pages/SoundProtectionWindow';
import PhotoGalleryPage from './pages/PhotoGalleryPage';


function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path='aboutCompany' element={<AboutCompany />} />
				<Route path='contacts' element={<ContactsPage />} />
				<Route path='products/profile_systems_for_windows' element={<ProfileSystemsForWindows />} />
				<Route path='products/profile_systems_for_doors' element={<ProfileSystemsForDoors />} />
				<Route path='products/profile_systems_for_windows/simple_window' element={<SimpleWindow />} />
				<Route path='products/profile_systems_for_windows/window_for_nursery' element={<WindowForNursery />} />
				<Route path='products/profile_systems_for_windows/energy_efficient_window' element={<EnergyEfficientWindow />} />
				<Route path='products/profile_systems_for_windows/sound_protection_window' element={<SoundProtectionWindow />} />
				<Route path='accessories' element={<Accessories />} />
				<Route path='brands' element={<BrandsPage />} />
				<Route path='products' element={<Products />} />
				<Route path='news' element={<NewsPage />} />
				<Route path='photo_gallery/*' element={<PhotoGalleryPage />} />
				<Route path='our_services' element={<OurServicesPage />} />
				{/* <Route index element={<AboutCompany/>}/> */}
				<Route path='*' element={<div>Такой странички нет</div>} />
			</Route>
		</Routes>
	)
}

export default App;
