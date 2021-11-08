import axios from "axios"
import { ReqRun, ParsedRun, ReqPlayer } from "../interfaces/leaderboard"
import { parseRuns } from "./parseRuns"

// Calls the speedrun.com API for leaderboard data.
export const requestRuns: any = async () => {
    const response = await axios.get(
        "https://www.speedrun.com/api/v1/leaderboards/j1ne5891/category/9kv6n132?var-j84eq0wn=21g85yxl&var-5lypzk9l=mlnw9jol&var-78962g08=p12dkr2q&embed=platforms%2Cplayers&timing=realtime_noloads"
    )

    const { data } = response.data

    const requestedRuns: ReqRun[] = data.runs
    const requestedEmbedPlayers: ReqPlayer[] = data.players.data

    const pcRuns: ParsedRun[] = parseRuns(requestedRuns, requestedEmbedPlayers)

    return [pcRuns]
}
