export const travelModes = [
  { id:'bus', name:'Bus', icon:'🚌', costPerKm:0.28, speed:18, co2:82, accessibility:'High', benefits:['Frequent local coverage','Low upfront cost','Good accessibility'], limits:['Affected by traffic','May require interchange'] },
  { id:'rail', name:'Rail', icon:'🚆', costPerKm:0.42, speed:42, co2:41, accessibility:'Medium', benefits:['Fast across longer distances','Predictable journey times','Lower emissions than car'], limits:['Station access required','Peak fares can be higher'] },
  { id:'cycle', name:'Cycling', icon:'🚲', costPerKm:0.06, speed:15, co2:0, accessibility:'Medium', benefits:['Zero tailpipe emissions','Healthy and flexible','Cheap for short trips'], limits:['Weather dependent','Secure parking needed'] },
  { id:'walk', name:'Walking', icon:'🚶', costPerKm:0, speed:5, co2:0, accessibility:'High', benefits:['Free and healthy','Best for short trips','No timetable needed'], limits:['Slow over long distances','Weather exposure'] },
  { id:'mixed', name:'Mixed mode', icon:'🔁', costPerKm:0.24, speed:24, co2:35, accessibility:'High', benefits:['Balances speed and cost','Flexible route planning','Good for first/last mile'], limits:['Needs good coordination','May include waiting time'] }
];

export const routeOptions = [
  { id:'r1', from:'St Mary’s Campus', to:'Twickenham Station', modes:['walk','rail'], distance:2.1, time:16, cost:2.10, convenience:87, crowding:'Moderate', reliability:91, serviceLine:'Rail A', steps:['Walk 7 minutes to Strawberry Hill stop','Take local rail connection','Exit via north concourse'] },
  { id:'r2', from:'St Mary’s Campus', to:'Richmond Riverside', modes:['cycle'], distance:5.4, time:23, cost:0.35, convenience:80, crowding:'Low', reliability:96, serviceLine:'Cycle Greenway', steps:['Use campus cycle gate','Follow signed riverside route','Park at secure Dock R12'] },
  { id:'r3', from:'St Mary’s Campus', to:'Kingston Centre', modes:['bus'], distance:6.8, time:34, cost:2.00, convenience:74, crowding:'High', reliability:78, serviceLine:'Bus 281', steps:['Walk to Waldegrave Road stop','Board Bus 281 toward Tolworth','Alight at Kingston Eden Street'] },
  { id:'r4', from:'St Mary’s Campus', to:'Heathrow Terminal 4', modes:['bus','rail'], distance:15.7, time:54, cost:5.80, convenience:68, crowding:'Moderate', reliability:73, serviceLine:'Rail A + Bus H4', steps:['Travel to Twickenham Station','Change for airport connector','Allow extra security time'] },
  { id:'r5', from:'St Mary’s Campus', to:'Teddington Lock', modes:['walk','cycle'], distance:3.9, time:27, cost:0.10, convenience:83, crowding:'Low', reliability:94, serviceLine:'Quietway 6', steps:['Walk/cycle via Waldegrave Park','Use quiet residential roads','Arrive near river entrance'] }
];

export const serviceUpdates = [
  { id:'u1', severity:'High', line:'Bus 281', title:'Delays toward Kingston', message:'Roadworks near Eden Street are adding 8–12 minutes at peak times.', updated:'Today 08:35', affected:['r3'] },
  { id:'u2', severity:'Medium', line:'Rail A', title:'Platform change at Twickenham', message:'Northbound local services are departing from platform 4 until early afternoon.', updated:'Today 09:10', affected:['r1','r4'] },
  { id:'u3', severity:'Low', line:'Cycle Greenway', title:'Temporary narrow lane', message:'A short section near the river has temporary barriers. Dismount signs are posted.', updated:'Today 07:50', affected:['r2'] }
];

export const nearbyStops = [
  { id:'s1', name:'Waldegrave Road Stop', type:'Bus stop', distance:260, lines:['281','R70'], accessible:true, live:'Bus 281 due in 4 min' },
  { id:'s2', name:'Strawberry Hill Station', type:'Rail station', distance:950, lines:['Rail A','Rail C'], accessible:true, live:'Next train in 9 min' },
  { id:'s3', name:'Campus Dock 03', type:'Bike dock', distance:120, lines:['Santander style hire'], accessible:true, live:'8 bikes / 4 e-bikes available' },
  { id:'s4', name:'Teddington Lock Dock', type:'Bike dock', distance:1800, lines:['Cycle hire'], accessible:false, live:'3 bikes available' }
];

export const bikeHubs = [
  { name:'Campus Dock 03', bikes:8, ebikes:4, spaces:6, demand:'High at 17:00' },
  { name:'Strawberry Hill Dock', bikes:5, ebikes:1, spaces:11, demand:'Balanced' },
  { name:'Richmond Riverside Dock', bikes:2, ebikes:2, spaces:18, demand:'Return bikes likely' }
];

export const sustainabilityTrend = [
  { day:'Mon', saved:1.8, cycling:3.2, walking:1.1 }, { day:'Tue', saved:2.4, cycling:4.8, walking:1.4 }, { day:'Wed', saved:3.0, cycling:5.4, walking:2.0 }, { day:'Thu', saved:2.1, cycling:2.5, walking:2.2 }, { day:'Fri', saved:3.6, cycling:6.1, walking:1.6 }, { day:'Sat', saved:1.2, cycling:1.5, walking:3.5 }, { day:'Sun', saved:2.8, cycling:4.0, walking:2.4 }
];
