import Dropdown from "react-bootstrap/Dropdown"
import Layout from "../components/Layout"

const IndexPage = (): JSX.Element => (
    <Layout title="Home || HitRuns" headerText="HITMAN 3 SPEEDRUNS">
        <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Full Game Category Select
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <div className="dmenu">
                    <Dropdown.Item href="s3_sa_p" className="class2">
                        Season 3
                    </Dropdown.Item>
                    <Dropdown.Item href="s2dlc_sa_p" className="class2">
                        Season 2
                    </Dropdown.Item>
                    <Dropdown.Item href="s1_sa_p" className="class2">
                        Season 1
                    </Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>

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
            . It is intended as a backup and/or supplement to the speedrun.com
            leaderboards, not as a replacement. Backups of important Hitman 3
            leaderboards will be hosted here, as will guides.
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
            . I'm pretty amateur at coding and the original Hobbit Speedruns
            site wasn't designed to host leaderboards from a ton of categories,
            so excuse the poorly optimized code.
        </p>
    </Layout>
)

export default IndexPage
