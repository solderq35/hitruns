import axios from "axios"
import type { ReqRun, ParsedRun, ReqPlayer } from "../interfaces/leaderboard"
import { parseRuns } from "./parseRuns"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const requestRuns: any = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapcategory = "zd3oqzrd"
    const difficulty = "4qyp9g6q"
    const rating = "jqzp9k4l"

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
                "Cache-Control": "max-age=300",
            },
        }
    )

    const { data } = response.data

    const requestedRuns: ReqRun[] = data.runs
    const requestedEmbedPlayers: ReqPlayer[] = data.players.data

    // Parse and separate the requested runs into their platforms
    const pcRuns: ParsedRun[] = parseRuns(requestedRuns, requestedEmbedPlayers)
    return [pcRuns]
}
