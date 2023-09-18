import L from 'leaflet';
import marker from '../../public/location.svg';
export const myIcon = new L.Icon({
	iconUrl: marker,
	iconRetinaUrl: marker,
	popupAnchor: [-0, -0],
	iconSize: [32, 45],
});
