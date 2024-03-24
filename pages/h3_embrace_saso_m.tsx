// @ts-nocheck
import { GetStaticProps } from "next"
import { ParsedRun } from "../interfaces/leaderboard"
import Layout from "../components/Layout"
import LeaderboardTable from "../components/LeaderboardTableIL"
import { Row, Col } from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"
import {
    rating,
    diff,
    ratingdropdown,
    diffdropdown,
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    level9,
    level10,
    level11,
    level12,
    level13,
    level14,
    level15,
    level16,
    level17,
    level18,
    level19,
    level20,
    level21,
    level22,
    level23,
    level24,
    level25,
    level26,
    level27,
    level28,
    level29,
    level30,
    level31,
    level32,
    level33,
    level34,
    level35,
    level36,
    level37,
    level38,
    level39,
    level40,
    level41,
    level42,
    FullGameButton,
    ILButton,
} from "../components/saso_master_variables"
import { requestRuns } from "../lib/h3_embrace_saso_m_run"

const linkname = "h3_embrace"
const category = "Embrace of the Serpent"

const sap = linkname + "_sa_p"
const sasop = linkname + "_saso_p"
const any = linkname + "_any_"
const sam = linkname + "_sa_m"
const sasom = linkname + "_saso_m"
const refreshlink = linkname + "_" + ratingdropdown + "_" + diffdropdown

type Props = {
    runs: ParsedRun[]
}

const Leaderboard = ({ runs }: Props): JSX.Element => {
    return (
        <Layout
            title={category + " - " + rating + " " + diff + " | HitRuns"}
            headerText="H3 LEVEL LEADERBOARD"
        >
            <Row>
                <FullGameButton></FullGameButton>
                <ILButton></ILButton>
                <Col xl={16} lg={12} className="pr-2 mb-3 overflow-auto">
                    <center>
                        <h4 className="text-center">
                            {category} {"- " + rating} {diff}
                        </h4>
                        <p className="class3">Refresh Page if Out of Date</p>
                        <p className="class8">
                            <a href="https://hitruns-wiki.vercel.app/docs/h3_patch_notes">
                                Important Info about No Longer Possible
                                (Patched) Runs
                            </a>
                        </p>
                        <center></center>

                        <table className="center" width="100%" id="subcat">
                            <tbody>
                                <tr>
                                    <th
                                        mt-2="true"
                                        mb-0="true"
                                        color-yellow="true"
                                        d-none="true"
                                        d-md-block="true"
                                    >
                                        <a href={sap} className="class3">
                                            SA Pro
                                        </a>{" "}
                                    </th>
                                    <th
                                        mt-2="true"
                                        mb-0="true"
                                        color-yellow="true"
                                        d-none="true"
                                        d-md-block="true"
                                    >
                                        <a href={sasop} className="class3">
                                            SASO Pro
                                        </a>{" "}
                                    </th>
                                    <th
                                        mt-2="true"
                                        mb-0="true"
                                        color-yellow="true"
                                        d-none="true"
                                        d-md-block="true"
                                    >
                                        <a href={any} className="class3">
                                            Any%
                                        </a>{" "}
                                    </th>
                                    <th
                                        mt-2="true"
                                        mb-0="true"
                                        color-yellow="true"
                                        d-none="true"
                                        d-md-block="true"
                                    >
                                        <a href={sam} className="class3">
                                            SA Master
                                        </a>{" "}
                                    </th>
                                    <th
                                        mt-2="true"
                                        mb-0="true"
                                        color-yellow="true"
                                        d-none="true"
                                        d-md-block="true"
                                    >
                                        <a href={sasom} className="class3">
                                            SASO Master
                                        </a>{" "}
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                    <center></center>
                    &nbsp &nbsp
                    <LeaderboardTable runs={runs} />
                </Col>
                //{" "}
                <Col xl={6} lg={12} className="pl-2 mb-3 overflow-auto">
                    //
                </Col>
                //<Col xs={12}></Col>
            </Row>
            <p></p>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const [runs] = await requestRuns()

    return {
        props: { runs },
        revalidate: 0,
    }
}

export default Leaderboard
