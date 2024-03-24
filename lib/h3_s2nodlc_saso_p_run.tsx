import axios from "axios"
import type { ReqRun, ParsedRun, ReqPlayer } from "../interfaces/leaderboard"
import { parseRuns } from "./parseRuns"

export const requestRuns: any = async () => {
    const mapcategory = "ndxey65k"
    const difficulty = "4qyp9g6q"
    const rating = "21g85yxl"

    const response = await axios.get(
        "https://www.speedrun.com/api/v1/leaderboards/j1ne5891/category/" +
            mapcategory +
            "?var-j84eq0wn=" +
            rating +
            "&var-5lypzk9l=" +
            difficulty +
            "&var-789d3g9n=814nxkjl&embed=platforms%2Cplayers&timing=realtime_noloads",
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
