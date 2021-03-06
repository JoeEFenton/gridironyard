import makeSchedule from './scheduler';

const data = {
  players: [
    {
      rank: 1,
      name: 'Derek Carr',
      position: 'QB',
      jersey_number: 4,
      team: 'Oakland Raiders',
      passYds: 3937,
      passTds: 28,
      passInt: 6,
      ruYds: 70,
    },
    {
      rank: 2,
      name: 'Matt Ryan',
      position: 'QB',
      jersey_number: 2,
      team: 'Atlanta Falcons',
      passYds: 4944,
      passTds: 38,
      passInt: 7,
      ruYds: 117,
    },
    {
      rank: 3,
      name: 'Adrian Peterson',
      position: 'RB',
      jersey_number: 28,
      team: 'New Orleans Saints',
      ruYds: 72,
      recs: 3,
      recYds: 8,
    },
    {
      rank: 4,
      name: 'Antonio Brown',
      position: 'WR',
      jersey_number: 84,
      team: 'Pittsburgh Steelers',
      ruYds: 9,
      recs: 106,
      recYds: 1284,
      recTds: 12,
      retYds: 163,
    },
    {
      rank: 5,
      name: 'Odell Beckham',
      position: 'WR',
      jersey_number: 13,
      team: 'New York Giants',
      ruYds: 9,
      recs: 101,
      recYds: 1367,
      recTds: 10,
      retYds: 66,
    },
    {
      rank: 6,
      name: 'Lamar Miller',
      position: 'RB',
      jersey_number: 26,
      team: 'Houston Texans',
      ruYds: 1073,
      ruTds: 5,
      recs: 31,
      recYds: 188,
      recTds: 1,
    },
    {
      rank: 7,
      name: 'Julio Jones',
      position: 'WR',
      jersey_number: 11,
      team: 'Atlanta Falcons',
      recs: 83,
      recYds: 1409,
      recTds: 6,
    },
    {
      rank: 8,
      name: 'Cam Newton',
      position: 'QB',
      jersey_number: 1,
      team: 'Carolina Panthers',
      passYds: 3509,
      passTds: 19,
      passInt: 14,
      ruYds: 359,
      ruTds: 5,
    },
    {
      rank: 9,
      name: 'Larry Fitzgerald',
      position: 'WR',
      jersey_number: 11,
      team: 'Arizona Cardinals',
      ruYds: 5,
      recs: 107,
      recYds: 1023,
      recTds: 6,
    },
    {
      rank: 10,
      name: 'Melvin Gordon',
      position: 'RB',
      jersey_number: 28,
      team: 'Los Angeles Chargers',
      ruYds: 997,
      ruTds: 10,
      recs: 41,
      recYds: 419,
      recTds: 2,
    },
    {
      rank: 12,
      name: 'Travis Kelce',
      position: 'TE',
      jersey_number: 1,
      team: 'Kansas City Chiefs',
      ruYds: -5,
      recs: 85,
      recYds: 1125,
      recTds: 4,

    },
    {
      rank: 13,
      name: 'Kyle Rudolph',
      position: 'TE',
      jersey_number: 2,
      team: 'Minnesota Vikings',
      recs: 83,
      recYds: 840,
      recTds: 7,
    },
    {
      rank: 14,
      name: 'Matt Bryant',
      position: 'K',
      jersey_number: 3,
      team: 'Atlanta Falcons',
      pats: 56,
      u30: 12,
      u40: 7,
      u50: 9,
      o50: 6,
    },
    {
      rank: 15,
      name: 'Justin Tucker',
      position: 'K',
      jersey_number: 10,
      team: 'Baltimore Ravens',
      pats: 27,
      u30: 4,
      u40: 10,
      u50: 14,
      o50: 10,
    },
    {
      rank: 16,
      name: 'Chiefs Defense',
      position: 'DEF',
      jersey_number: '',
      team: 'Kansas City Chiefs',
      sacks: 28,
      ints: 18,
      safety: 1,
      defTd: 5,
      defRetTd: 3,
      ptsAllow: 305,
    },
    {
      rank: 17,
      name: 'Vikings Defense',
      position: 'DEF',
      jersey_number: '',
      team: 'Minnesota Vikings',
      sacks: 41,
      ints: 14,
      safety: 1,
      defTd: 5,
      defRetTd: 3,
      ptsAllow: 307,
    },
    {
      rank: 18,
      name: 'Broncos Defense',
      position: 'DEF',
      jersey_number: '',
      team: 'Denver Broncos',
      sacks: 42,
      ints: 14,
      safety: 0,
      defTd: 4,
      defRetTd: 0,
      ptsAllow: 287,
    },
  ],
  users: [
    {
      username: 'The 1st User #1',
      email: 'user1@test.com',
      password: 'test1'
    },
    {
      username: 'Number 2 user',
      email: 'user2@test.com',
      password: 'test2'
    },
    {
      username: 'Bronze',
      email: 'user3@test.com',
      password: 'test3'
    },
    {
      username: 'Loser # 4',
      email: 'user4@test.com',
      password: 'test4'
    },
    {
      username: 'user5',
      email: 'user5@test.com',
      password: 'test5'
    },
    {
      username: 'user6',
      email: 'user6@test.com',
      password: 'test6'
    },
    {
      username: 'user7',
      email: 'user7@test.com',
      password: 'test7'
    },
    {
      username: 'user8',
      email: 'user8@test.com',
      password: 'test8'
    },
    {
      username: 'user9',
      email: 'user9@test.com',
      password: 'test9'
    },
    {
      username: 'user10',
      email: 'user10@test.com',
      password: 'test10'
    }
  ],
  roster: [
    {position: 'qb', name: 'Derek Carr'},
    {position: 'rb', name: 'Adrian Peterson'},
    {position: 'wr', name: 'Antonio Brown'},
    {position: 'te', name: 'Kyle Rudolph'},
    {position: 'flex', name: 'Julio Jones'},
    {position: 'def', name: 'Broncos Defense'},
    {position: 'k', name: 'Matt Bryant'},
    {position: 'bench1', name: ''},
    {position: 'bench2', name: ''},
    {position: 'bench3', name: ''}
  ]
};
export const positionList = ['QB','RB','WR','TE','FLEX','DEF','K'];
export const offStatCategories = ['position', 'name', 'team', 'owner', 'passYds', 'passTds', 'passInt', 'ruYds', 'ruTds', 'recs', 'recYds', 'recTds', 'retYds', 'retTds', 'fumTd', '2PT', 'points'];
export const defStatCategories = ['position', 'name', 'team', 'owner', 'sacks', 'ints', 'safety', 'defTds', 'defRetTds', 'ptsAllow', 'points'];
export const kickStatCategories = ['position', 'name', 'team', 'owner', 'pats', 'u20', 'u30', 'u40', 'u50', 'o50', 'points'];
export const positionsObj = [
  { key: 'offense', value: 'OFFENSE', text: 'All Offense'},
  { key: 'qb', value: 'QB', text:'Quarterback'},
  { key: 'rb', value: 'RB', text:'Running Back'},
  { key: 'wr', value: 'WR', text:'Wide Receiver'},
  { key: 'te', value: 'TE', text:'Tight End'},
  { key: 'flex', value: 'FLEX', text:'FLEX:(RB, WR, TE)'},
  { key: 'def', value: 'DEF', text:'Team Defense'},
  { key: 'k', value: 'K', text:'Kicker'}
]

export const schedule = makeSchedule(data.users.map(user => user.username), 16);

export default data;
