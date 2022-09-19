// @ts-nocheck
import { GetStaticProps } from "next"
import { Row, Col } from "react-bootstrap"
import { requestRuns } from "../lib/runs"
import { ParsedRun } from "../interfaces/leaderboard"
import ReactPlayer from "react-player"
import styles from "./LeaderboardTable.module.scss"

import Layout from "../components/Layout"
import LeaderboardTable from "../components/LeaderboardTable"
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
} from "../components/saso_pro_variables"

const linkname = "h3_leaderboards"
const category = "H3 Individual Level Leaderboards"
const category2 = "H3 Full Game Leaderboards"
const category3 = "H3 Leaderboards"

const sap = linkname + "_sa_p"
const sasop = linkname + "_saso_p"
const any = linkname + "_any_"
const sam = linkname + "_sa_m"
const sasom = linkname + "_saso_m"
const refreshlink = linkname + "_" + ratingdropdown + "_" + diffdropdown

type Props = {
    pcRuns: ParsedRun[]
}

const IndexPage = ({ runs, compact, top = 0 }: Props): JSX.Element => (
    <Layout
        title={category3 + " - " + rating + " " + diff + " | HitRuns"}
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
                <a href={level5} className="class5">
                    Patient Zero
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
                <a href={level13} className="class5">
                    Freeform Training
                </a>{" "}
            </p>
            <p>
                <a href={level14} className="class5">
                    The Final Test
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
                <a href={level29} className="class5">
                    Landslide
                </a>{" "}
            </p>
            <p>
                <a href={level30} className="class5">
                    The Icon)
                </a>{" "}
            </p>
            <p>
                <a href={level31} className="class5">
                    A House Built on Sand)
                </a>{" "}
            </p>
            <p>
                <a href={level32} className="class5">
                    The Source
                </a>{" "}
            </p>
            <p>
                <a href={level33} className="class5">
                    The Author
                </a>{" "}
            </p>
            <p>
                <a href={level34} className="class5">
                    The Vector
                </a>{" "}
            </p>
            <p>
                <a href={level35} className="class5">
                    Patient Zero Hokkaido
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
                <a href={level40} className="class5">
                    Holiday Hoarders
                </a>{" "}
            </p>
            <p>
                <a href={level41} className="class5">
                    Snow Festival
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
