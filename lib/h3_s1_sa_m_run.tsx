import axios from "axios"
import { ReqRun, ParsedRun, ReqPlayer } from "../interfaces/leaderboard"
import { parseRuns } from "./parseRuns"
import { ISrcResponse } from "../interfaces/srcApiResponses"

export const requestRuns: any = async () => {
    const mapcategory = "zd3oqzrd"
    const difficulty = "mlnw9jol"
    const rating = "gq7jpknq"

    const response = await axios.get<ISrcResponse>(
        "https://www.speedrun.com/api/v1/leaderboards/j1ne5891/category/" +
            mapcategory +
            "?var-j84eq0wn=" +
            rating +
            "&var-5lypzk9l=" +
            difficulty +
            "&var-78962g08=p12dkr2q&embed=platforms%2Cplayers&timing=realtime_noloads"
    )

    const { data } = response.data

    // @ts-expect-error How does this work
    const requestedRuns: ReqRun[] = data.runs
    // @ts-expect-error How does this work
    const requestedEmbedPlayers: ReqPlayer[] = data.players.data

    const pcRuns: ParsedRun[] = parseRuns(requestedRuns, requestedEmbedPlayers)
    return [pcRuns]
}
