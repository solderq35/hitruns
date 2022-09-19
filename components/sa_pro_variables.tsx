import Dropdown from "react-bootstrap/Dropdown"
export const rating = "SA"
export const diff = "Pro"

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

export { ratingdropdown }
export { diffdropdown }

export const level1 = "h3_s1_" + ratingdropdown + "_" + diffdropdown
export const level2 = "h3_s2dlc_" + ratingdropdown + "_" + diffdropdown
export const level3 = "h3_s3_" + ratingdropdown + "_" + diffdropdown
export const level4 = "h3_trilogy_" + ratingdropdown + "_" + diffdropdown
export const level5 = "h3_patientzero_" + ratingdropdown + "_" + "p"
export const level6 = "h3_s2nodlc_" + ratingdropdown + "_" + diffdropdown
export const level7 = "h3_dubai_" + ratingdropdown + "_" + diffdropdown
export const level8 = "h3_dartmoor_" + ratingdropdown + "_" + diffdropdown
export const level9 = "h3_berlin_" + ratingdropdown + "_" + diffdropdown
export const level10 = "h3_chongqing_" + ratingdropdown + "_" + diffdropdown
export const level11 = "h3_mendoza_" + ratingdropdown + "_" + diffdropdown
export const level12 = "h3_romania_" + ratingdropdown + "_" + diffdropdown
export const level13 = "h3_freeform_" + ratingdropdown + "_" + "p"
export const level14 = "h3_finaltest_" + ratingdropdown + "_" + "p"
export const level15 = "h3_paris_" + ratingdropdown + "_" + diffdropdown
export const level16 = "h3_sapienza_" + ratingdropdown + "_" + diffdropdown
export const level17 = "h3_marrakesh_" + ratingdropdown + "_" + diffdropdown
export const level18 = "h3_bangkok_" + ratingdropdown + "_" + diffdropdown
export const level19 = "h3_colorado_" + ratingdropdown + "_" + diffdropdown
export const level20 = "h3_hokkaido_" + ratingdropdown + "_" + diffdropdown
export const level21 = "h3_hawkesbay_" + ratingdropdown + "_" + diffdropdown
export const level22 = "h3_miami_" + ratingdropdown + "_" + diffdropdown
export const level23 = "h3_santafortuna_" + ratingdropdown + "_" + diffdropdown
export const level24 = "h3_mumbai_" + ratingdropdown + "_" + diffdropdown
export const level25 = "h3_whittleton_" + ratingdropdown + "_" + diffdropdown
export const level26 = "h3_sgail_" + ratingdropdown + "_" + diffdropdown
export const level27 = "h3_newyork_" + ratingdropdown + "_" + diffdropdown
export const level28 = "h3_haven_" + ratingdropdown + "_" + diffdropdown
export const level29 = "h3_landslide_" + ratingdropdown + "_" + "p"
export const level30 = "h3_icon_" + ratingdropdown + "_" + "p"
export const level31 = "h3_ahbos_" + ratingdropdown + "_" + "p"
export const level32 = "h3_source_" + ratingdropdown + "_" + "p"
export const level33 = "h3_author_" + ratingdropdown + "_" + "p"
export const level34 = "h3_vector_" + ratingdropdown + "_" + "p"
export const level35 = "h3_pzhokkaido_" + ratingdropdown + "_" + "p"
export const level36 = "h3_embrace_" + ratingdropdown + "_" + diffdropdown
export const level37 = "h3_illusions_" + ratingdropdown + "_" + diffdropdown
export const level38 = "h3_silvertongue_" + ratingdropdown + "_" + diffdropdown
export const level39 = "h3_bitterpill_" + ratingdropdown + "_" + diffdropdown
export const level40 = "h3_holidayhoarders_" + ratingdropdown + "_" + "p"
export const level41 = "h3_snowfestival_" + ratingdropdown + "_" + "p"
export const level42 = "h3_ambrose_" + ratingdropdown + "_" + diffdropdown

export function FullGameButton() {
    return (
        <Dropdown className="justify-content-end" style={{ width: "100%" }}>
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
    )
}

export function ILButton() {
    return (
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
                    Holiday Hoarders
                </Dropdown.Item>
                <Dropdown.Item href={level41} className="class2">
                    Snow Festival
                </Dropdown.Item>
                <Dropdown.Item href={level42} className="class2">
                    Shadows in the Water (Ambrose Island)
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
