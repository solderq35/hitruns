import axios from "axios"
import type { ReqRun, ParsedRun, ReqPlayer } from "../interfaces/leaderboard"
import { parseRuns } from "./parseRuns"

// Calls the speedrun.com API for leaderboard data.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const requestRuns: any = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const response = await axios.get(
        "https://www.speedrun.com/api/v1/leaderboards/j1ne5891/category/rkl3no8k?var-j84eq0wn=gq7jpknq&embed=platforms%2Cplayers&timing=realtime_noloads",
        {
            headers: {
                "Cache-Control": "max-age=0",
            },
        }
    )

    const { data } = response.data

    const requestedRuns: ReqRun[] = data.runs
    const requestedEmbedPlayers: ReqPlayer[] = data.players.data

    const pcRuns: ParsedRun[] = parseRuns(requestedRuns, requestedEmbedPlayers)

    return [pcRuns]
}
