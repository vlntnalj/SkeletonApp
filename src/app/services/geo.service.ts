import { Geolocation } from '@capacitor/geolocation';

async obtenerUbicacion() {
  const pos = await Geolocation.getCurrentPosition();
  console.log('Lat:', pos.coords.latitude, 'Lng:', pos.coords.longitude);
}
