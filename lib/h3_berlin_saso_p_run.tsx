import axios from "axios"
import { ReqRun, ParsedRun, ReqPlayer } from "../interfaces/leaderboard"
import { parseRuns } from "./parseRuns"

export const requestRuns: any = async () => {
    const mapcategory = "ewpo3vjd"
    const rating = "jdronyld"
    const difficultyvarname = "r8r1dv7n"
    const difficulty = "21dz5xpl"

    const response = await axios.get(
        "https://www.speedrun.com/api/v1/leaderboards/j1ne5891/level/" +
            mapcategory +
            "/" +
            rating +
            "?var-" +
            difficultyvarname +
            "=" +
            difficulty +
            "&var-ylpe1pv8=klrpdvwq&embed=platforms%2Cplayers&timing=realtime_noloads",
        {
            headers: {
                "Cache-Control": "max-age=300",
            },
        }
    )

    const { data } = response.data

    const requestedRuns: ReqRun[] = data.runs
    const requestedEmbedPlayers: ReqPlayer[] = data.players.data

    const pcRuns: ParsedRun[] = parseRuns(requestedRuns, requestedEmbedPlayers)
    return [pcRuns]
}
