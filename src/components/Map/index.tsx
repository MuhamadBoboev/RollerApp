import st from './map.module.scss'
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const MapMain = () => {
	interface MapInterface {
		center: any;
		zoom: number;
	}
	const defaultState: MapInterface = {
		center: [38.550570, 68.783705],
		zoom: 17,
	};
	return (<div className={st.map__wrapper}>
		<YMaps>
			<Map className={st.map} defaultState={defaultState}>
				<Placemark geometry={[38.550570, 68.783705]} />
			</Map>
		</YMaps>

	</div>)
}

export default MapMain