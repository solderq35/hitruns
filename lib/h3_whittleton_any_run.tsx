import axios from "axios"
import { ReqRun, ParsedRun, ReqPlayer } from "../interfaces/leaderboard"
import { parseRuns } from "./parseRuns"

export const requestRuns: any = async () => {
    const mapcategory = "ewpo32kd"
    const rating = "jdz6nx62"
    const difficultyvarname = "p854xo3l"
    const difficulty = "gq7jpmpq"

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
