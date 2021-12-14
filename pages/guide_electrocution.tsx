// @ts-nocheck
import Dropdown from "react-bootstrap/Dropdown"
import Layout from "../components/Layout"


const level1 = "guide_faq"
const level2 = "guide_breakable_boosting"
const level3 = "guide_bullets"
const level4 = "guide_electrocution"
const level5 = "guide_explosions"
const level6 = "guide_fast_anim"
const level7 = "guide_livesplit_auto"
const level8 = "guide_livesplit_manual"
const level9 = "guide_lures"
const level10 = "guide_misc"


const IndexPage = (): JSX.Element => (
    <Layout title="Guides || HitRuns" headerText="HITMAN SPEEDRUNS">
	        <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
					
                        Guides
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href={level1} className="class2">
                            Beginner FAQ
                        </Dropdown.Item>
						<Dropdown.Item href={level2} className="class2">
                            Breakable Object Boosting
                        </Dropdown.Item>
						<Dropdown.Item href={level3} className="class2">
                            Bullets/ Gun Mechanics
                        </Dropdown.Item>
						<Dropdown.Item href={level4} className="class2">
                            Electrocutions
                        </Dropdown.Item>
						<Dropdown.Item href={level5} className="class2">
                            Explosions/ Explosives
                        </Dropdown.Item>
						<Dropdown.Item href={level6} className="class2">
                            Fast Animations
                        </Dropdown.Item>
						<Dropdown.Item href={level7} className="class2">
                            Livesplit Guide (Autosplitter)
                        </Dropdown.Item>
						<Dropdown.Item href={level8} className="class2">
                            Livesplit Guide (Manually Entered Times)
                        </Dropdown.Item>
						<Dropdown.Item href={level9} className="class2">
                            Lures
                        </Dropdown.Item>
                        <Dropdown.Item href={level10} className="class2">
                            Miscellaneous Tips/ Glossary
                        </Dropdown.Item>
                    </Dropdown.Menu>
					
                </Dropdown>
	<h2> Electrocution </h2>
<p>

 <p>Disclaimer- Guide ported from H2. The tricks here seem to work in H3 as well so far based on personal testing, but keep in mind some small things may be altered.</p>
    <p>
      <a href="https://i.ibb.co/CVr8b8Z/electrotable.png"  target="blank">https://i.ibb.co/CVr8b8Z/electrotable.png</a>
    </p>
    <p>Note that micro taser can electrocute civilian NPC's without a puddle, if placed in mailbox.</p>

</p>
	
)

    </Layout>
)
export default IndexPage
