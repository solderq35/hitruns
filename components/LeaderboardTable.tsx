import * as React from "react"
import padStart from "lodash.padstart"
import { ParsedRun } from "../interfaces/leaderboard"
import styles from "./LeaderboardTable.module.scss"

type Props = {
    runs: ParsedRun[]
    compact?: boolean
    top?: number
}

const formatTime = (inputSeconds: number): string => {
    if (inputSeconds === 0) {
        return "N/A"
    }

    const hours: string = Math.floor(inputSeconds / 3600).toString()
    let minutes: string = padStart(
        Math.floor((inputSeconds % 3600) / 60).toString(),
        2,
        "0"
    )
    if (hours === "0") {
        minutes = padStart(
            Math.floor((inputSeconds % 3600) / 60).toString(),
            1,
            "0"
        )
    }
    const seconds: string = padStart(
        Math.floor(inputSeconds % 60).toString(),
        2,
        "0"
    )

    const milliseconds: string = padStart(
        ((inputSeconds % 1) * 1000).toFixed(0),
        3,
        "0"
    )

    if (milliseconds !== "000") {
        return `${
            hours !== "0" ? `${hours}h` : ""
        } ${minutes}m ${seconds}s ${milliseconds}ms`
    } else {
        return `${hours !== "0" ? `${hours}h` : ""} ${minutes}m ${seconds}s`
    }
}

const LeaderboardTable = ({ runs, compact, top = 0 }: Props): JSX.Element => (
    <table width="100%" className={`${styles["leaderboard-table"]}`}>
        <thead>
            <tr className={`${styles.default}`}>
                <th></th>
                {!compact && <th>Player</th>}
                {!compact && <th className="text-right">In Game Time</th>}
                {!compact && <th className="text-right">Time Calc</th>}
                {!compact && <th className="text-right">Date</th>}
            </tr>
        </thead>
        <tbody>
            {runs.map((run, i) => {
                if (top > 0 && i > top - 1) {
                    return
                }

                let style: string

                if (i < 1) {
                    style = styles.gold
                } else if (i < 2) {
                    style = styles.silver
                } else if (i < 3) {
                    style = styles.bronze
                } else {
                    style = styles.default
                }

                if (i % 2) {
                    style = `${style} ${styles.alt}`
                }

                return (
                    <tr key={run.id} className={style}>
                        {!compact && (
                            <td className="text-center">
                                <a
                                    href={run.weblink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {run.place}.
                                </a>
                            </td>
                        )}
                        {!compact && (
                            <td>
                                <a
                                    href={run.weblink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {run.player}
                                </a>
                            </td>
                        )}
                        {!compact && (
                            <td className="text-right">
                                <a
                                    href={run.weblink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {formatTime(run.realtime_noloads || 0) !==
                                    "N/A"
                                        ? formatTime(run.realtime_noloads || 0)
                                        : formatTime(run.realtime || 0)}
                                </a>
                            </td>
                        )}

                        {!compact && (
                            <td className="text-right">
                                <a
                                    href={run.grun}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Time Calc
                                </a>
                            </td>
                        )}

                        {!compact && (
                            <td className="text-right">
                                <a
                                    href={run.weblink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {run.date}
                                </a>
                            </td>
                        )}
                    </tr>
                )
            })}
        </tbody>
    </table>
)

export default LeaderboardTable
