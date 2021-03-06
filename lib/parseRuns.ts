// Converts runs as obtained from speedrun.com into an object that is easier to work with.
import { ParsedRun, ReqPlayer, ReqRun } from "../interfaces/leaderboard"

export const parseRuns = (
    requestedRuns: ReqRun[],
    players: ReqPlayer[]
): ParsedRun[] => {
    const parsedRuns: ParsedRun[] = requestedRuns.map((item: ReqRun) => {
        let player

        // Check if the user has a registered account, if so find the correct username for the account id
        if (item.run.players[0]?.rel == "user") {
            player = players.find(
                (player) => player.id === item.run.players[0].id
            )?.names.international
        } else if (item.run.players[0]?.rel == "guest") {
            player = item.run.players[0].name
        }
        if (item.run.values["5lypzk9l"] == "4qyp9g6q") {
            item.run.values["5lypzk9l"] = "Pro"
        }
        if (item.run.values["5lypzk9l"] == "mlnw9jol") {
            item.run.values["5lypzk9l"] = "Master"
        }
        return {
            place: item.place,
            id: item.run.id,
            player,
            date: item.run.date,
            fullgamediff: item.run.values["5lypzk9l"] || 0,
            weblink: item.run.videos.links.slice(-1)[0].uri,
            realtime_noloads: item.run.times.realtime_noloads_t || 0,
            //var tester = item.run.players[0]?.rel;

            realtime: item.run.times.realtime_t || 0,
            platform: "8gej2n93" || "4p9zjrer",

            emulated: item.run.system.emulated,
        }
    })

    // Sort runs by their spot on the leaderboard
    parsedRuns.sort((a, b) => {
        return a.place - b.place
    })
    return parsedRuns
}
