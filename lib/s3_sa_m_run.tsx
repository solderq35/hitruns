import axios from "axios"
import type { ReqRun, ParsedRun, ReqPlayer } from "../interfaces/leaderboard"
import { parseRuns } from "./parseRuns"

export const requestRuns: any = async () => {
    const mapcategory = "rkl3no8k"
    const difficulty = "mlnw9jol"
    const rating = "gq7jpknq"

    const response: [string] = [
        await axios.get(
            "https://www.speedrun.com/api/v1/leaderboards/j1ne5891/category/" +
                mapcategory +
                "?var-j84eq0wn=" +
                rating +
                "&var-5lypzk9l=" +
                difficulty +
                "&var-78962g08=p12dkr2q&embed=platforms%2Cplayers&timing=realtime_noloads"
        ),
    ]
    const { data } = response[0].data

    const requestedRuns: ReqRun[] = data.runs
    const requestedEmbedPlayers: ReqPlayer[] = data.players.data

    const pcRuns: ParsedRun[] = parseRuns(requestedRuns, requestedEmbedPlayers)
    return [pcRuns]
}
