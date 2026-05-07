import { serviceUpdates, nearbyStops, bikeHubs, routeOptions } from '../data/travelData';
const wait = ms => new Promise(res=>setTimeout(res, ms));
export async function fetchServiceUpdates(){ await wait(120); return serviceUpdates.map(u=>({...u, live:true})); }
export async function fetchNearbyStops(){ await wait(100); return nearbyStops; }
export async function fetchBikeAvailability(){ await wait(100); return bikeHubs; }
export async function searchRoutes(from, to){ await wait(150); const f=from?.toLowerCase()||''; const t=to?.toLowerCase()||''; return routeOptions.filter(r=>!f||!t||r.from.toLowerCase().includes(f.split(' ')[0])||r.to.toLowerCase().includes(t.split(' ')[0])||r.from.toLowerCase().includes('st mary')); }
