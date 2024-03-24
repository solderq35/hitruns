import axios from "axios"
import type { ReqRun, ParsedRun, ReqPlayer } from "../interfaces/leaderboard"
import { parseRuns } from "./parseRuns"

export const requestRuns: () => Promise<ParsedRun[][]> = async () => {
    const mapcategory = "ndx5nvvk"
    const difficulty = "4qyp9g6q"
    const rating = "jqzp9k4l"

    const response = await axios.get(
        "https://www.speedrun.com/api/v1/leaderboards/j1ne5891/category/" +
            mapcategory +
            "?var-j84eq0wn=" +
            rating +
            "&var-5lypzk9l=" +
            difficulty +
            "&var-789d3g9n=814nxkjl&embed=platforms%2Cplayers&timing=realtime_noloads"
    )

    const { data } = response.data

    const requestedRuns: ReqRun[] = data.runs as ReqRun[]
    const requestedEmbedPlayers: ReqPlayer[] = data.players.data

    const pcRuns: ParsedRun[] = parseRuns(requestedRuns, requestedEmbedPlayers)
    return [pcRuns]
}
