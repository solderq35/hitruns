// @ts-nocheck
import { GetStaticProps } from "next"
import { ParsedRun } from "../interfaces/leaderboard"
import Layout from "../components/Layout"
import LeaderboardTable from "../components/LeaderboardTable"
import { Row, Col } from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"
import { requestRuns } from "../lib/s2dlc_saso_p_run"

var linkname = "s2dlc"
var category = "Season 2 (w/ DLC)"
var rating = "SASO"
var diff = "Pro"

var ratingdropdown
if (rating == "Any%") {
    ratingdropdown = "any"
} else {
    ratingdropdown = rating.toLowerCase()
}

var diffdropdown
if (diff == "Pro") {
    diffdropdown = "p"
} else if (diff == "Master") {
    diffdropdown = "m"
} else if (diff == "") {
    diffdropdown = ""
}
var sap = linkname + "_sa_p"
var sasop = linkname + "_saso_p"
var any = linkname + "_any_"
var sam = linkname + "_sa_m"
var sasom = linkname + "_saso_m"

var level3 = "s3_" + ratingdropdown + "_" + diffdropdown
var level2 = "s2dlc_" + ratingdropdown + "_" + diffdropdown
var level1 = "s1_" + ratingdropdown + "_" + diffdropdown

type Props = {
    gamecubeRuns: ParsedRun[]
}

const Leaderboard = ({ gamecubeRuns }: Props): JSX.Element => {
    return (
        <Layout
            title="Leaderboard || HitRuns"
            headerText="FULL GAME LEADERBOARD"
        >
            <Row>
                <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Full Game Category Select
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href={level3} className="class2">
                            Season 3
                        </Dropdown.Item>
                        <Dropdown.Item href={level2} className="class2">
                            Season 2
                        </Dropdown.Item>
                        <Dropdown.Item href={level1} className="class2">
                            Season 1
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Col xl={16} lg={12} className="pr-2 mb-3 overflow-auto">
                    <center>
                        <h4 className="text-center">
                            {category} {rating} {diff}
                        </h4>
                        <center></center>

                        <table class="center" width="100%" id="subcat">
                            <tr>
                                <th mt-2 mb-0 color-yellow d-none d-md-block>
                                    <a href={sap} className="class3">
                                        SA Pro
                                    </a>{" "}
                                </th>
                                <th mt-2 mb-0 color-yellow d-none d-md-block>
                                    <a href={sasop} className="class3">
                                        SASO Pro
                                    </a>{" "}
                                </th>
                                <th mt-2 mb-0 color-yellow d-none d-md-block>
                                    <a href={any} className="class3">
                                        Any
                                    </a>{" "}
                                </th>
                                <th mt-2 mb-0 color-yellow d-none d-md-block>
                                    <a href={sam} className="class3">
                                        SA Master
                                    </a>{" "}
                                </th>
                                <th mt-2 mb-0 color-yellow d-none d-md-block>
                                    <a href={sasom} className="class3">
                                        SASO Master
                                    </a>{" "}
                                </th>
                            </tr>
                        </table>
                    </center>
                    <center></center>
                    &nbsp &nbsp
                    <LeaderboardTable runs={gamecubeRuns} />
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
    const [gamecubeRuns] = await requestRuns()

    return {
        props: { gamecubeRuns },
        revalidate: 300,
    }
}

export default Leaderboard
