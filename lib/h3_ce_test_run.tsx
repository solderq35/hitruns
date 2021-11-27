import axios from "axios"
import { ReqRun, ParsedRun, ReqPlayer } from "../interfaces/leaderboard"
import { parseRuns } from "./parseRuns"

export const requestRuns: any = async () => {
	const mapcategory = "owo5jzyd"
	const complication = "ndx5r8jk"
	const ratingvarname = "kn0jdool"
    const rating = "klrpdx2q"
	const defaultvarname = "0nw7dr58"
	const defaultvalue = "4qyrdz4l"
	const difficulty = "810zy05q"

    const response = await axios.get(
        "https://www.speedrun.com/api/v1/leaderboards/v1ponx76/level/"		
		+ mapcategory + "/" + complication + "?var-" + ratingvarname +"="+rating + "&var-" + defaultvarname + "=" + defaultvalue + "&var-onvjq10n=" + difficulty + "&var-9l77z97l=810zk8pq&embed=platforms%2Cplayers&timing=realtime"
            
    )

    const { data } = response.data

    const requestedRuns: ReqRun[] = data.runs
    const requestedEmbedPlayers: ReqPlayer[] = data.players.data

    const pcRuns: ParsedRun[] = parseRuns(requestedRuns, requestedEmbedPlayers)
    return [pcRuns]
}
