// @ts-nocheck
import Dropdown from "react-bootstrap/Dropdown"
import Layout from "../components/Layout"
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
        <p>
            <a
                href="https://hitruns-wiki.vercel.app/docs/resources"
                className="class4"
                target="_blank"
                rel="noreferrer"
            >
                Resources
            </a>{" "}
            and{" "}
            <a
                href="https://hitruns-wiki.vercel.app/docs/index"
                className="class4"
                target="_blank"
                rel="noreferrer"
            >
                {" "}
                guides{" "}
            </a>{" "}
            are now hosted on{" "}
            <a
                href="https://hitruns-wiki.vercel.app/"
                className="class4"
                target="_blank"
                rel="noreferrer"
            >
                {" "}
                HitRuns Wiki
            </a>
            .
              For a more quick summary of the Hitman speedrun top times for each category, as well as sum-of-bests, check {" "}
            <a
                href="https://hitruns-top-times.vercel.app/"
                className="class4"
                target="_blank"
                rel="noreferrer"
            >
                Hitruns Top Times
            </a>
            .
        </p>
        &nbsp
        <h2> Hitman 3 Leaderboards </h2>
        <FullGameButton></FullGameButton>
        <ILButton></ILButton>
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
                solderq35.github.io
            </a>
        </p>
        &nbsp
    </Layout>
)

export default IndexPage
