export const defaults = { preferredMode:'mixed', carbonGoal:12, weeklyCycleGoal:20, alerts:['Bus 281'], favourites:['r1','r2'], lastEstimate:{distance:4.5, mode:'bus'}, savedJourneys:[] };
export function loadSettings(){ try { return {...defaults, ...(JSON.parse(localStorage.getItem('smuh-settings'))||{})}; } catch { return defaults; } }
export function saveSettings(settings){ localStorage.setItem('smuh-settings', JSON.stringify(settings)); }
