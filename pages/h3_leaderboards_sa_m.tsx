// @ts-nocheck
import { GetStaticProps } from "next"
import { Row, Col } from "react-bootstrap"
import { requestRuns } from "../lib/runs"
import { ParsedRun } from "../interfaces/leaderboard"
import ReactPlayer from "react-player"
import styles from "./LeaderboardTable.module.scss"

import Layout from "../components/Layout"
import LeaderboardTable from "../components/LeaderboardTable"

const linkname = "h3_leaderboards"
const category = "H3 Individual Level Leaderboards"
const category2 = "H3 Full Game Leaderboards"
const category3 = "H3 Leaderboards"
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
const refreshlink = linkname + "_" + ratingdropdown + "_" + diffdropdown

const level1 = "h3_s1_" + ratingdropdown + "_" + diffdropdown
const level2 = "h3_s2dlc_" + ratingdropdown + "_" + diffdropdown
const level3 = "h3_s3_" + ratingdropdown + "_" + diffdropdown
const level4 = "h3_trilogy_" + ratingdropdown + "_" + diffdropdown
const level5 = "h3_patientzero_" + ratingdropdown + "_" + "p"
const level6 = "h3_s2nodlc_" + ratingdropdown + "_" + diffdropdown
const level7 = "h3_dubai_" + ratingdropdown + "_" + diffdropdown
const level8 = "h3_dartmoor_" + ratingdropdown + "_" + diffdropdown
const level9 = "h3_berlin_" + ratingdropdown + "_" + diffdropdown
const level10 = "h3_chongqing_" + ratingdropdown + "_" + diffdropdown
const level11 = "h3_mendoza_" + ratingdropdown + "_" + diffdropdown
const level12 = "h3_romania_" + ratingdropdown + "_" + diffdropdown
const level13 = "h3_freeform_" + ratingdropdown + "_" + "p"
const level14 = "h3_finaltest_" + ratingdropdown + "_" + "p"
const level15 = "h3_paris_" + ratingdropdown + "_" + diffdropdown
const level16 = "h3_sapienza_" + ratingdropdown + "_" + diffdropdown
const level17 = "h3_marrakesh_" + ratingdropdown + "_" + diffdropdown
const level18 = "h3_bangkok_" + ratingdropdown + "_" + diffdropdown
const level19 = "h3_colorado_" + ratingdropdown + "_" + diffdropdown
const level20 = "h3_hokkaido_" + ratingdropdown + "_" + diffdropdown
const level21 = "h3_hawkesbay_" + ratingdropdown + "_" + diffdropdown
const level22 = "h3_miami_" + ratingdropdown + "_" + diffdropdown
const level23 = "h3_santafortuna_" + ratingdropdown + "_" + diffdropdown
const level24 = "h3_mumbai_" + ratingdropdown + "_" + diffdropdown
const level25 = "h3_whittleton_" + ratingdropdown + "_" + diffdropdown
const level26 = "h3_sgail_" + ratingdropdown + "_" + diffdropdown
const level27 = "h3_newyork_" + ratingdropdown + "_" + diffdropdown
const level28 = "h3_haven_" + ratingdropdown + "_" + diffdropdown
const level29 = "h3_landslide_" + ratingdropdown + "_" + "p"
const level30 = "h3_icon_" + ratingdropdown + "_" + "p"
const level31 = "h3_ahbos_" + ratingdropdown + "_" + "p"
const level32 = "h3_source_" + ratingdropdown + "_" + "p"
const level33 = "h3_author_" + ratingdropdown + "_" + "p"
const level34 = "h3_vector_" + ratingdropdown + "_" + "p"
const level35 = "h3_pzhokkaido_" + ratingdropdown + "_" + "p"
const level36 = "h3_embrace_" + ratingdropdown + "_" + diffdropdown
const level37 = "h3_illusions_" + ratingdropdown + "_" + diffdropdown
const level38 = "h3_silvertongue_" + ratingdropdown + "_" + diffdropdown
const level39 = "h3_bitterpill_" + ratingdropdown + "_" + diffdropdown
const level40 = "h3_holidayhoarders_" + ratingdropdown + "_" + "p"
const level41 = "h3_snowfestival_" + ratingdropdown + "_" + diffdropdown
const level42 = "h3_ambrose_" + ratingdropdown + "_" + diffdropdown

type Props = {
    pcRuns: ParsedRun[]
}

const IndexPage = ({ runs, compact, top = 0 }: Props): JSX.Element => (
    <Layout
        title = {category3 + " - " + rating + " " + diff + " | HitRuns"}
        headerText="HITMAN 3 SPEEDRUNS"
    >
        <center>
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
            &nbsp
            <h4 className="text-center">
                {category2} ({rating}
                {diff})
            </h4>
            <p>
                <a href={level3} className="class5">
                    Season 3
                </a>{" "}
            </p>
            <p>
                <a href={level2} className="class5">
                    Season 2 w/DLC
                </a>{" "}
            </p>
            <p>
                <a href={level1} className="class5">
                    Season 1
                </a>{" "}
            </p>
            <p>
                <a href={level4} className="class5">
                    Trilogy Campaign
                </a>{" "}
            </p>
            <p>
                <a href={level6} className="class5">
                    Season 2 (no DLC)
                </a>{" "}
            </p>
            &nbsp
            <h4 className="text-center">
                {category} ({rating}
                {diff})
            </h4>
            <p>
                <a href={level7} className="class5">
                    On Top of the World (Dubai)
                </a>{" "}
            </p>
            <p>
                <a href={level8} className="class5">
                    Death in the Family (Dartmoor)
                </a>{" "}
            </p>
            <p>
                <a href={level9} className="class5">
                    Apex Predator (Berlin)
                </a>{" "}
            </p>
            <p>
                <a href={level10} className="class5">
                    End of an Era (Chongqing)
                </a>{" "}
            </p>
            <p>
                <a href={level11} className="class5">
                    The Farewell (Mendoza)
                </a>{" "}
            </p>
            <p>
                <a href={level12} className="class5">
                    Untouchable (Romania)
                </a>{" "}
            </p>
            <p>
                <a href={level15} className="class5">
                    The Showstopper (Paris)
                </a>{" "}
            </p>
            <p>
                <a href={level16} className="class5">
                    World of Tomorrow (Sapienza
                </a>{" "}
            </p>
            <p>
                <a href={level17} className="class5">
                    A Gilded Cage (Marrakesh)
                </a>{" "}
            </p>
            <p>
                <a href={level18} className="class5">
                    Club 27 (Bangkok)
                </a>{" "}
            </p>
            <p>
                <a href={level19} className="class5">
                    Freedom Fighters (Colorado)
                </a>{" "}
            </p>
            <p>
                <a href={level20} className="class5">
                    Situs Inversus (Hokkaido)
                </a>{" "}
            </p>
            <p>
                <a href={level21} className="class5">
                    Nightcall (Hawke's Bay)
                </a>{" "}
            </p>
            <p>
                <a href={level22} className="class5">
                    The Finish Line (Miami)
                </a>{" "}
            </p>
            <p>
                <a href={level23} className="class5">
                    Three Headed Serpent (Santa Fortuna)
                </a>{" "}
            </p>
            <p>
                <a href={level24} className="class5">
                    Chasing a Ghost (Mumbai)
                </a>{" "}
            </p>
            <p>
                <a href={level25} className="class5">
                    Another Life (Whittleton Creek)
                </a>{" "}
            </p>
            <p>
                <a href={level26} className="class5">
                    The Ark Society (Sgail)
                </a>{" "}
            </p>
            <p>
                <a href={level27} className="class5">
                    Golden Handshake (New York)
                </a>{" "}
            </p>
            <p>
                <a href={level28} className="class5">
                    The Last Resort (Haven)
                </a>{" "}
            </p>
            <p>
                <a href={level36} className="class5">
                    Embrace of the Serpent
                </a>{" "}
            </p>
            <p>
                <a href={level37} className="class5">
                    Illusions of Grandeur
                </a>{" "}
            </p>
            <p>
                <a href={level38} className="class5">
                    A Silver Tongue
                </a>{" "}
            </p>
            <p>
                <a href={level39} className="class5">
                    A Bitter Pill
                </a>{" "}
            </p>
            <p>
                <a href={level42} className="class5">
                    Shadows in the Water (Ambrose Island)
                </a>{" "}
            </p>
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
