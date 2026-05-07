import { travelModes } from '../data/travelData';
export const modeById = id => travelModes.find(m=>m.id===id) || travelModes[0];
export function estimateJourney(distance, modeId){ const mode=modeById(modeId); const minutes=Math.max(3, Math.round((distance/mode.speed)*60)); const base=distance*mode.costPerKm; return { low:Math.max(0, base*0.85).toFixed(2), high:Math.max(0, base*1.2+0.25).toFixed(2), minutes, co2:Math.round(distance*mode.co2) }; }
export function scoreRoute(route, pref='mixed'){ const modeMatch=route.modes.includes(pref)?8:0; return Math.round(route.convenience*0.45+route.reliability*0.35+(100-Math.min(route.cost*12,90))*0.12+modeMatch); }
