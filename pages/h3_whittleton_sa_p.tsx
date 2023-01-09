// @ts-nocheck
import { GetStaticProps } from "next"
import { ParsedRun } from "../interfaces/leaderboard"
import Layout from "../components/Layout"
import LeaderboardTable from "../components/LeaderboardTableIL"
import { Row, Col } from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"
import { CategoriesList } from "../components/CategoriesList"
import { NLP_RefreshMessage } from "../components/NLP_RefreshMessage"
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
} from "../components/sa_pro_variables"
import { requestRuns } from "../lib/h3_whittleton_sa_p_run"

const linkname = "h3_whittleton"
const category = "Another Life (Whittleton Creek)"

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
                        <NLP_RefreshMessage></NLP_RefreshMessage>
                        <CategoriesList
                            sap={sap}
                            sasop={sasop}
                            sam={sam}
                            sasom={sasom}
                            any={any}
                        ></CategoriesList>
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
