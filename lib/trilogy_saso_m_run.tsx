import axios from "axios"
import type { ReqRun, ParsedRun, ReqPlayer } from "../interfaces/leaderboard"
import { parseRuns } from "./parseRuns"

export const requestRuns: () => Promise<ParsedRun[][]> = async () => {
    const mapcategory = "ndx5nvvk"
    const difficulty = "mlnw9jol"
    const rating = "21g85yxl"

    const response = await axios.get(
        "https://www.speedrun.com/api/v1/leaderboards/j1ne5891/category/" +
            mapcategory +
            "?var-j84eq0wn=" +
            rating +
            "&var-5lypzk9l=" +
            difficulty +
            "&var-78962g08=p12dkr2q&embed=platforms%2Cplayers&timing=realtime_noloads"
    )
    const { data } = response.data

    const requestedRuns: ReqRun[] = data.runs as ReqRun[]
    const requestedEmbedPlayers: ReqPlayer[] = data.players.data

    const pcRuns: ParsedRun[] = parseRuns(requestedRuns, requestedEmbedPlayers)
    return [pcRuns]
}
