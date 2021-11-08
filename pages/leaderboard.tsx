// @ts-nocheck
import { GetStaticProps } from "next"
import { Row, Col } from "react-bootstrap"
import { requestRuns } from "../lib/runs"
import { ParsedRun } from "../interfaces/leaderboard"
import ReactPlayer from "react-player"
import styles from "./LeaderboardTable.module.scss"

import Layout from "../components/Layout"
import LeaderboardTable from "../components/LeaderboardTable"

type Props = {
    pcRuns: ParsedRun[]
}

const IndexPage = ({ runs, compact, top = 0 }: Props): JSX.Element => (
    <Layout title="Home | HobbitSpeedruns" headerText="HITMAN 3 SPEEDRUNS">
        <center>
            <table className="center" width="100%" id="subcat">
                <tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href="s2dlc_sa_p" className="class3">
                            SA Pro
                        </a>{" "}
                    </th>
                    <th>
                        <a href="s2dlc_sa_p" className="class3">
                            SASO Pro
                        </a>{" "}
                    </th>
                    <th>
                        <a href="s2dlc_sa_p" className="class3">
                            Any%
                        </a>{" "}
                    </th>
                    <th>
                        <a href="s2dlc_sa_p" className="class3">
                            SA Master
                        </a>{" "}
                    </th>
                    <th>
                        <a href="s2dlc_sa_p" className="class3">
                            SASO Master
                        </a>{" "}
                    </th>
                </tr>
            </table>
        </center>
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    const [pcRuns] = await requestRuns()

    return {
        props: { pcRuns },
        revalidate: 300,
    }
}

export default IndexPage
