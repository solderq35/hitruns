// @ts-nocheck
import { GetStaticProps } from "next"
import { Row, Col } from "react-bootstrap"
import { requestRuns } from "../lib/runs"
import { ParsedRun } from "../interfaces/leaderboard"
import ReactPlayer from "react-player"
import styles from "./LeaderboardTable.module.scss"

import Layout from "../components/Layout"
import LeaderboardTable from "../components/LeaderboardTable"

const linkname = "fg_leaderboards"
const category = "Full Game Leaderboards"
const rating = "SA"
const diff = " Master"

let ratingdropdown
if (rating == "Any%") {
    ratingdropdown = "any"
} else {
    ratingdropdown = rating.toLowerCase()
}

let diffdropdown
if (diff == " Pro") {
    diffdropdown = "p"
} else if (diff == " Master") {
    diffdropdown = "m"
} else if (diff == "") {
    diffdropdown = ""
}
const sap = linkname + "_sa_p"
const sasop = linkname + "_saso_p"
const any = linkname + "_any_"
const sam = linkname + "_sa_m"
const sasom = linkname + "_saso_m"

const level1 = "s1_" + ratingdropdown + "_" + diffdropdown
const level2 = "s2dlc_" + ratingdropdown + "_" + diffdropdown
const level3 = "s3_" + ratingdropdown + "_" + diffdropdown
const level4 = "trilogy_" + ratingdropdown + "_" + diffdropdown
const level5 = "patientzero_" + ratingdropdown + "_" + "p"
const level6 = "s2nodlc_" + ratingdropdown + "_" + diffdropdown
const level7 = "dubai_" + ratingdropdown + "_" + diffdropdown
const level8 = "dartmoor_" + ratingdropdown + "_" + diffdropdown
const level9 = "berlin_" + ratingdropdown + "_" + diffdropdown
const level10 = "chongqing_" + ratingdropdown + "_" + diffdropdown
const level11 = "mendoza_" + ratingdropdown + "_" + diffdropdown
const level12 = "romania_" + ratingdropdown + "_" + diffdropdown
const level13 = "freeform_" + ratingdropdown + "_" + "p"
const level14 = "finaltest_" + ratingdropdown + "_" + "p"
const level15 = "paris_" + ratingdropdown + "_" + diffdropdown
const level16 = "sapienza_" + ratingdropdown + "_" + diffdropdown
const level17 = "marrakesh_" + ratingdropdown + "_" + diffdropdown
const level18 = "bangkok_" + ratingdropdown + "_" + diffdropdown
const level19 = "colorado_" + ratingdropdown + "_" + diffdropdown
const level20 = "hokkaido_" + ratingdropdown + "_" + diffdropdown
const level21 = "hawkesbay_" + ratingdropdown + "_" + diffdropdown
const level22 = "miami_" + ratingdropdown + "_" + diffdropdown
const level23 = "santafortuna_" + ratingdropdown + "_" + diffdropdown
const level24 = "mumbai_" + ratingdropdown + "_" + diffdropdown
const level25 = "whittleton_" + ratingdropdown + "_" + diffdropdown
const level26 = "sgail_" + ratingdropdown + "_" + diffdropdown
const level27 = "newyork_" + ratingdropdown + "_" + diffdropdown
const level28 = "haven_" + ratingdropdown + "_" + diffdropdown
const level29 = "landslide_" + ratingdropdown + "_" + "p"
const level30 = "icon_" + ratingdropdown + "_" + "p"
const level31 = "ahbos_" + ratingdropdown + "_" + "p"
const level32 = "source_" + ratingdropdown + "_" + "p"
const level33 = "author_" + ratingdropdown + "_" + "p"
const level34 = "vector_" + ratingdropdown + "_" + "p"
const level35 = "pzhokkaido_" + ratingdropdown + "_" + "p"
const level36 = "embrace_" + ratingdropdown + "_" + diffdropdown
const level37 = "illusions_" + ratingdropdown + "_" + diffdropdown
const level38 = "silvertongue_" + ratingdropdown + "_" + diffdropdown
const level39 = "bitterpill_" + ratingdropdown + "_" + diffdropdown
const level40 = "holidayhoarders_" + ratingdropdown + "_" + "p"
const level41 = "snowfestival_" + ratingdropdown + "_" + "p"


type Props = {
    pcRuns: ParsedRun[]
}

const IndexPage = ({ runs, compact, top = 0 }: Props): JSX.Element => (
    <Layout title="Home | HobbitSpeedruns" headerText="HITMAN 3 SPEEDRUNS">
			<center>
		<h4 className="text-center">
			{category} ({rating}{diff})
        </h4>
			<table className="center" width="100%" id="subcat">
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
                                        Any%
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
            <table className="center" width="100%" id="subcat">
                <tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level3} className="class5">
                            Season 3
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level2} className="class5">
                            Season 2 w/DLC
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level1} className="class5">
                            Season 1
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level4} className="class5">
                            Trilogy Campaign
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level6} className="class5">
                            Season 2 (no DLC)
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
