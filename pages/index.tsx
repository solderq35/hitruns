// @ts-nocheck
import Dropdown from "react-bootstrap/Dropdown"
import Layout from "../components/Layout"

const rating = "SA"
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
const level41 = "h3_snowfestival_" + ratingdropdown + "_" + "p"

const IndexPage = (): JSX.Element => (
    <Layout title="Home | HitRuns" headerText="HITMAN SPEEDRUNS">
        <h2>Welcome to HitRuns</h2>
        <p>
            This is a mirror for the{" "}
            <a
                href="https://speedrun.com/hitman_3"
                className="class4"
                target="_blank"
                rel="noreferrer"
            >
                Hitman 3 speedrun.com leaderboard
            </a>
            , and potentially other Hitman series leaderboards in the future. It
            is intended as a backup and/or supplement to the speedrun.com
            leaderboards, not as a replacement. Please go to speedrun.com to
            submit new runs to the leaderboards.
        </p>
        <p>
            I mostly based the structure of this site from{" "}
            <a
                href="https://github.com/milankarman/HobbitSpeedruns"
                className="class4"
                target="_blank"
                rel="noreferrer"
            >
                milankarman's Hobbit Speedruns site
            </a>
            . You can follow my progress of adapting the site structure for
            Hitman 3 at the{" "}
            <a
                href="https://github.com/solderq35/hitruns"
                className="class4"
                target="_blank"
                rel="noreferrer"
            >
                HitRuns GitHub
            </a>
            .
        </p>
        &nbsp
        <h2> Hitman 3 Leaderboards </h2>
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
                    Freeform Training
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
                    A Gilded Cage (Marrakesh)
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
        &nbsp
        <h2> Other HITMAN Coding Projects </h2>
        <p>
            I'm Solderq35. You can follow my other coding projects (so far
            HITMAN related) here:{" "}
            <a
                href="https://solderq35.github.io/"
                className="class4"
                target="_blank"
                rel="noreferrer"
            >
                https://solderq35.github.io/
            </a>
        </p>
        &nbsp
    </Layout>
)

export default IndexPage
