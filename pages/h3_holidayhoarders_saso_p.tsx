// @ts-nocheck
import { GetStaticProps } from "next"
import { ParsedRun } from "../interfaces/leaderboard"
import Layout from "../components/Layout"
import LeaderboardTable from "../components/LeaderboardTableIL"
import { Row, Col } from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"
import { requestRuns } from "../lib/h3_holidayhoarders_saso_p_run"

const linkname = "h3_holidayhoarders"
const category = "Holiday Hoarders [Peacock]"
const rating = "SASO"
const diff = "Pro"

let ratingdropdown
if (rating == "Any%") {
    ratingdropdown = "any"
} else {
    ratingdropdown = rating.toLowerCase()
}

let diffdropdown
if (diff == "Pro") {
    diffdropdown = "p"
} else if (diff == "Master") {
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
const level13 = "h3_icon_" + ratingdropdown + "_" + "p"
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
const level41 = "h3_snowfestival_" + ratingdropdown + "_" + "p"

type Props = {
    runs: ParsedRun[]
}

const Leaderboard = ({ runs }: Props): JSX.Element => {
    return (
        <Layout
            title="Hitman 3 Level Leaderboard | HitRuns"
            headerText="H3 LEVEL LEADERBOARD"
        >
            <Row>

                <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Hitman 3 Full Game Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href={level3} className="class2">
                            Season 3
                        </Dropdown.Item>
                        <Dropdown.Item href={level2} className="class2">
                            Season 2 w/ DLC
                        </Dropdown.Item>
                        <Dropdown.Item href={level1} className="class2">
                            Season 1
                        </Dropdown.Item>
						<Dropdown.Item href={level4} className="class2">
                            Trilogy Campaign
                        </Dropdown.Item>
						<Dropdown.Item href={level5} className="class2">
                            Patient Zero
                        </Dropdown.Item>
						<Dropdown.Item href={level6} className="class2">
                            Season 2 (no DLC)
                        </Dropdown.Item>
                    </Dropdown.Menu>
					
                </Dropdown>

				<Dropdown className="justify-content-end" style={{ width: "100%" }}>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Hitman 3 Individual Level Categories
                    </Dropdown.Toggle>


                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href={level7} className="class2">
                            On Top of the World (Dubai)
                        </Dropdown.Item>
                        <Dropdown.Item href={level8} className="class2">
                            Death in the Family (Dartmoor)
                        </Dropdown.Item>
                        <Dropdown.Item href={level9} className="class2">
                            Apex Predator (Berlin)
                        </Dropdown.Item>
						<Dropdown.Item href={level10} className="class2">
                            End of an Era (Chongqing)
                        </Dropdown.Item>
						<Dropdown.Item href={level11} className="class2">
                            The Farewell (Mendoza)
                        </Dropdown.Item>
                        <Dropdown.Item href={level12} className="class2">
                            Untouchable (Romania)
                        </Dropdown.Item>
                        <Dropdown.Item href={level13} className="class2">
                            icon Training
                        </Dropdown.Item>
						<Dropdown.Item href={level14} className="class2">
                            The Final Test
                        </Dropdown.Item>
						<Dropdown.Item href={level15} className="class2">
                            The Showstopper (Paris)
                        </Dropdown.Item>
                        <Dropdown.Item href={level16} className="class2">
                            World of Tomorrow (Sapienza)
                        </Dropdown.Item>
                        <Dropdown.Item href={level17} className="class2">
                            A Gilded Cage (Marrakesh
                        </Dropdown.Item>
						<Dropdown.Item href={level18} className="class2">
                            Club 27 (Bangkok)
                        </Dropdown.Item>
						<Dropdown.Item href={level19} className="class2">
                            Freedom Fighters (Colorado)
                        </Dropdown.Item>
						<Dropdown.Item href={level20} className="class2">
                            Situs Inversus (Hokkaido)
                        </Dropdown.Item>
						<Dropdown.Item href={level21} className="class2">
                            Nightcall (Hawke's Bay)
                        </Dropdown.Item>
                        <Dropdown.Item href={level22} className="class2">
                            The Finish Line (Miami)
                        </Dropdown.Item>
                        <Dropdown.Item href={level23} className="class2">
                            Three Headed Serpent (Santa Fortuna)
                        </Dropdown.Item>
						<Dropdown.Item href={level24} className="class2">
                            Chasing a Ghost (Mumbai)
                        </Dropdown.Item>
						<Dropdown.Item href={level25} className="class2">
                            Another Life (Whitteton Creek)
                        </Dropdown.Item>
                        <Dropdown.Item href={level26} className="class2">
                            The Ark Society (Sgail)
                        </Dropdown.Item>
                        <Dropdown.Item href={level27} className="class2">
                            The Golden Handshake (New York)
                        </Dropdown.Item>
						<Dropdown.Item href={level28} className="class2">
                            The Last Resort (Haven)
                        </Dropdown.Item>
						<Dropdown.Item href={level29} className="class2">
                            Landslide
                        </Dropdown.Item>
						<Dropdown.Item href={level30} className="class2">
                            The Icon
                        </Dropdown.Item>
						<Dropdown.Item href={level31} className="class2">
                            A House Built on Sand
                        </Dropdown.Item>
                        <Dropdown.Item href={level32} className="class2">
                            The Source
                        </Dropdown.Item>
                        <Dropdown.Item href={level33} className="class2">
                            The Author
                        </Dropdown.Item>
						<Dropdown.Item href={level34} className="class2">
                            The Vector
                        </Dropdown.Item>
						<Dropdown.Item href={level35} className="class2">
                            Patient Zero Hokkaido
                        </Dropdown.Item>
                        <Dropdown.Item href={level36} className="class2">
                            Embrace of the Serpent
                        </Dropdown.Item>
                        <Dropdown.Item href={level37} className="class2">
                            Illusions of Grandeur
                        </Dropdown.Item>
						<Dropdown.Item href={level38} className="class2">
                            A Silver Tongue
                        </Dropdown.Item>
						<Dropdown.Item href={level39} className="class2">
                            A Bitter Pill
                        </Dropdown.Item>
						<Dropdown.Item href={level40} className="class2">
                            Holiday Hoarders [Peacock]
                        </Dropdown.Item>
						<Dropdown.Item href={level41} className="class2">
                            Snow Festival [Peacock]
                        </Dropdown.Item>
                    </Dropdown.Menu>
					
                </Dropdown>

                <Col xl={16} lg={12} className="pr-2 mb-3 overflow-auto">
                    <center>
                        <h4 className="text-center">
                            {category} {rating} {diff}
                        </h4>
                        <center></center>

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
                            </tr>
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
        revalidate: 300,
    }
}

export default Leaderboard