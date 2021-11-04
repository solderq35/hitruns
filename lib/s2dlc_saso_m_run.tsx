import axios from 'axios';
import { ReqRun, ParsedRun, ReqPlatform, ReqPlayer } from '../interfaces/leaderboard';

// Calls the speedrun.com API for leaderboard data.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const requestRuns: any = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  
  let response: [string] = [await axios.get('https://www.speedrun.com/api/v1/leaderboards/j1ne5891/category/9kv6n132?var-j84eq0wn=21g85yxl&var-5lypzk9l=mlnw9jol&var-78962g08=p12dkr2q&embed=platforms%2Cplayers&timing=realtime_noloads')];
  var { data } = response[0].data;

  const requestedRuns: ReqRun[] = data.runs;
  const requestedEmbedPlayers: ReqPlayer[] = data.players.data;

  // Find the platform ID of GameCube
  const gamecubePlatform: ReqPlatform = data.platforms.data.find(
    (platform: ReqPlatform) => platform.name === 'GameCube'
  );
  // Find the platform ID of PC
  const pcPlatform: ReqPlatform = data.platforms.data.find((platform: ReqPlatform) => platform.name === 'PC');

  // Parse and separate the requested runs into their platforms
  const gamecubeRuns: ParsedRun[] = parseRuns(requestedRuns, gamecubePlatform, requestedEmbedPlayers);
  const pcRuns: ParsedRun[] = parseRuns(requestedRuns, pcPlatform, requestedEmbedPlayers);

  return [gamecubeRuns, pcRuns];
};

// Converts runs as obtained from speedrun.com into an object that is easier to work with.
export const parseRuns = (requestedRuns: ReqRun[], platform: ReqPlatform, players: ReqPlayer[]): ParsedRun[] => {
  const filteredRuns: ReqRun[] = requestedRuns.filter((item) => item.run.system.platform === "8gej2n93" || "4p9zjrer");

  const parsedRuns: ParsedRun[] = filteredRuns.map((item: ReqRun, i: number) => {
    let player;

    // Check if the user has a registered account, if so find the correct username for the account id
    if (item.run.players[0]?.rel == 'user') {
      player = players.find((player) => player.id === item.run.players[0].id)?.names.international;
    } else if (item.run.players[0]?.rel == 'guest') {
      player = item.run.players[0].name;
    }

    return {
      place: i + 1,
      id: item.run.id,
      player,
      date: item.run.date,
      weblink: item.run.videos.links[0].uri,
      realtime: item.run.times.realtime_t || 0,
      realtime_noloads: item.run.times.realtime_noloads_t || 0,
      platform: "8gej2n93"|| "4p9zjrer",
      emulated: item.run.system.emulated,
    };
  });

  // Sort runs by their spot on the leaderboard
  parsedRuns.sort((a, b) => {
    return a.place - b.place;
  });

  return parsedRuns;
};