// @ts-nocheck
import Dropdown from "react-bootstrap/Dropdown"
import Layout from "../components/Layout"


const level1 = "guide_faq"
const level2 = "guide_misc"
const level3 = "guide_fast_anim"
const level4 = "guide_electrocution"
const level5 = "guide_explosions"
const level6 = "guide_lures"
const level7 = "guide_breakable_boosting"
const level8 = "guide_livesplit"
const level9 = "guide_bullets"


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
                            Miscellaneous Tips/ Glossary
                        </Dropdown.Item>
						<Dropdown.Item href={level3} className="class2">
                            Fast Animations
                        </Dropdown.Item>
						<Dropdown.Item href={level4} className="class2">
                            Electrocutions
                        </Dropdown.Item>
						<Dropdown.Item href={level5} className="class2">
                            Explosions/ Explosives
                        </Dropdown.Item>
						<Dropdown.Item href={level6} className="class2">
                            Lures
                        </Dropdown.Item>
						<Dropdown.Item href={level7} className="class2">
                            Breakable Object Boosting
                        </Dropdown.Item>
						<Dropdown.Item href={level8} className="class2">
                            Livesplit Guide
                        </Dropdown.Item>
						<Dropdown.Item href={level9} className="class2">
                            Bullets/ Gun Mechanics
                        </Dropdown.Item>
                    </Dropdown.Menu>
					
                </Dropdown>
	<h2> Breakable Object Boosts </h2>
<p>

<p>Throw/ drop a breakable object near certain ledges, and you can walk off the ledge to the ground. You will suffer no damage, as Hitman has no fall damage. This can result in huge time saves since falling to the ground is often faster than stairs/ pipe. Try to run over the particles of the broken object as it hits the ground, and strafe rapidly from left to right as you do so for best results.</p>
    <ul>
      <li>
        <p>
          <a href="https://youtu.be/VLHuum_tGZg?t=16">Example 1</a>:  Throw muffin near ledge to walk off it to the ground</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/dh8IuU2kTho?t=33">Example 2</a>: Throw breakable brick to get onto stair railings</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/264oMY9Ys34?t=60">Example 3</a>: Throw breakable crystal ball to walk on briefcase and get a better sniping angle</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/LtnYqLLBPvs?t=3">Example 4</a>: Throw breakable violin onto suitcase, then use breaching charge to propel 47 even higher over ledge</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/J74iidO5cCg">More in depth video guide</a>
        </p>
      </li>
    </ul>

</p>
	
)

    </Layout>
)
export default IndexPage
