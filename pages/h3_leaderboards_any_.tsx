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
const rating = "Any%"
const diff = ""

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

const level1 = "h3_s1_" + ratingdropdown + "_" + diffdropdown
const level2 = "h3_s2dlc_" + ratingdropdown + "_" + diffdropdown
const level3 = "h3_s3_" + ratingdropdown + "_" + diffdropdown
const level4 = "h3_trilogy_" + ratingdropdown + "_" + diffdropdown
const level5 = "h3_patientzero_" + ratingdropdown + "_" + diffdropdown
const level6 = "h3_s2nodlc_" + ratingdropdown + "_" + diffdropdown
const level7 = "h3_dubai_" + ratingdropdown + "_" + diffdropdown
const level8 = "h3_dartmoor_" + ratingdropdown + "_" + diffdropdown
const level9 = "h3_berlin_" + ratingdropdown + "_" + diffdropdown
const level10 = "h3_chongqing_" + ratingdropdown + "_" + diffdropdown
const level11 = "h3_mendoza_" + ratingdropdown + "_" + diffdropdown
const level12 = "h3_romania_" + ratingdropdown + "_" + diffdropdown
const level13 = "h3_freeform_" + ratingdropdown + "_" + diffdropdown
const level14 = "h3_finaltest_" + ratingdropdown + "_" + diffdropdown
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
const level29 = "h3_landslide_" + ratingdropdown + "_" + diffdropdown
const level30 = "h3_icon_" + ratingdropdown + "_" + diffdropdown
const level31 = "h3_ahbos_" + ratingdropdown + "_" + diffdropdown
const level32 = "h3_source_" + ratingdropdown + "_" + diffdropdown
const level33 = "h3_author_" + ratingdropdown + "_" + diffdropdown
const level34 = "h3_vector_" + ratingdropdown + "_" + diffdropdown
const level35 = "h3_pzhokkaido_" + ratingdropdown + "_" + diffdropdown
const level36 = "h3_embrace_" + ratingdropdown + "_" + diffdropdown
const level37 = "h3_illusions_" + ratingdropdown + "_" + diffdropdown
const level38 = "h3_silvertongue_" + ratingdropdown + "_" + diffdropdown
const level39 = "h3_bitterpill_" + ratingdropdown + "_" + diffdropdown
const level40 = "h3_holidayhoarders_" + ratingdropdown + "_" + diffdropdown
const level41 = "h3_snowfestival_" + ratingdropdown + "_" + diffdropdown


type Props = {
    pcRuns: ParsedRun[]
}

const IndexPage = ({ runs, compact, top = 0 }: Props): JSX.Element => (
    <Layout title="Hitman 3 Leaderboards | HitRuns" headerText="HITMAN 3 SPEEDRUNS">
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
			{category2} ({rating}{diff})
        </h4>

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
                        <a href={level5} className="class5">
                            Patient Zero
                        </a>{" "}
                    </th>
                </tr><tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level6} className="class5">
                            Season 2 (no DLC)
                        </a>{" "}
                    </th>
                </tr>
            </table>
		&nbsp
		<h4 className="text-center">
			{category} ({rating}{diff})
        </h4>
			
            <table className="center" width="100%" id="subcat">
                <tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level7} className="class5">
                            On Top of the World (Dubai)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level8} className="class5">
                            Death in the Family (Dartmoor)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level9} className="class5">
                            Apex Predator (Berlin)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level10} className="class5">
                            End of an Era (Chongqing)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level11} className="class5">
                            The Farewell (Mendoza) 
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level12} className="class5">
                            Untouchable (Romania)						
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level13} className="class5">
                            Freeform Training
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level14} className="class5">
                            The Final Test
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level15} className="class5">
                            The Showstopper (Paris)						
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level16} className="class5">
                            World of Tomorrow (Sapienza
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level17} className="class5">
                            A Gilded Cage (Marrakesh)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level18} className="class5">
                            Club 27 (Bangkok)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level19} className="class5">
                            Freedom Fighters (Colorado)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level20} className="class5">
                            Situs Inversus (Hokkaido)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level21} className="class5">
                            Nightcall (Hawke's Bay)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level22} className="class5">
                            The Finish Line (Miami)						
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level23} className="class5">
                            The Three Headed Serpent (Santa Fortuna)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level24} className="class5">
                            Chasing a Ghost (Mumbai)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level25} className="class5">
                            Another Life (Whittleton Creek)						
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level26} className="class5">
                            The Ark Society (Sgail)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level27} className="class5">
                            Golden Handshake (New York)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level28} className="class5">
                            The Last Resort (Haven)
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level29} className="class5">
                            Landslide
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level30} className="class5">
                            The Icon
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level31} className="class5">
                            A House Built on Sand
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level32} className="class5">
                            The Source					
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level33} className="class5">
                            The Author
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level34} className="class5">
                            The Vector
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level35} className="class5">
                            Patient Zero Hokkaido					
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level36} className="class5">
                            Embrace of the Serpent
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level37} className="class5">
                            Illusions of Grandeur
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level38} className="class5">
                            A Silver Tongue
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level39} className="class5">
                            A Bitter Pill
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level40} className="class5">
                            Holiday Hoarders [Peacock]
                        </a>{" "}
                    </th>
                </tr>
				<tr>
                    <th className="mt-2 mb-0 color-yellow d-none d-md-block">
                        <a href={level41} className="class5">
                            Snow Festival [Peacock]
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
