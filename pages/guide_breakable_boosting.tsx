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
                            Boosting
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
	<h2> Boosting Guide </h2>
<p>

  <p>List of some common boosting techniques and spots in Hitman 3, to get out of bounds or skip parts of the map. It is by no means exhaustive.</p>
    <p>
      <strong>Note that 47 does not take fall damage in general, but in certain areas of the map, such as over water, you can fall through a kill plane and instantly die.</strong>
    </p>
    <h3 id="boosts-with-no-object-needed-examples">Boosts with No Object Needed (Examples)</h3>
    <p>
      <strong>Following boosts are 100% reliable.</strong>
    </p>
    <ul>
      <li>
        <p>
          <a href="https://youtu.be/3B6tU5FfuGI?t=43">Dartmoor Ledge Boost</a>: Hug left when vaulting, you will be able to drop down.</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/3r5OiAXVCjA?t=116">Sapienza Cave Boost</a>: Aim with gun, press drop down button.</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/qVD5w8apLL4?t=39">Mendoza Fence Boost</a>: Vault at the specific spot</p>
      </li>
    </ul>
    <h3 id="breakable-object-boosts-overview">Breakable Object Boosts (Overview)</h3>
    <p>Throw/ drop a breakable object near certain ledges, and you can walk off the ledge to the ground. You will suffer no damage, as Hitman has no fall damage. This can result in huge time saves since falling to the ground is often faster than stairs/ pipe. Try to run over the particles of the broken object as it hits the ground.</p>
    <h4 id="general-breakable-object-boosting-tips">General Breakable Object Boosting Tips</h4>
    <ul>
      <li>If throwing breakable objects to boost, it may be helpful to fast throw (crouch -&gt; throw to throw faster and save time. <a href="https://youtu.be/syuwT2Ce01M?t=61">Example</a></li>
      <li>Aiming with the gun can help a lot navigating out of bounds, as you move with greater precision when aiming a run. <a href="https://youtu.be/3LJ_Bffotwg?t=610">Example</a></li>
    </ul>
    <h4 id="non-exhaustive-list-of-viable-boosting-breakable-object-items">Non-Exhaustive list of Viable Boosting (Breakable Object) Items</h4>
    <ul>
      <li>Violin (usually optimal, except for some stairs)</li>
      <li>Muffin (better than violin for some stairs)</li>
      <li>Brick (decent substitute if you don't have loadout for violin/muffin)</li>
      <li>Stone bust (decent substitute if you don't have loadout for violin/muffin)</li>
      <li>Apple (finnicky, avoid if possible)</li>
    </ul>
    <h3 id="breakable-object-boost-examples-no-breaching-charge">Breakable Object Boost Examples (no Breaching Charge)</h3>
    <p>
      <strong>Generally speaking, most non-breaching charge boosts can be practiced to be highly consistent, and are viable for full game.</strong>
    </p>
    <h4 id="chair-boost">Chair Boost</h4>
    <ul>
      <li>
        <a href="https://youtu.be/oNCi8t4rjtM?t=57">Paris Chair Boost</a>: Throw as shown. It may be helpful to strafe + slightly aim in with pistol.</li>
      <li>
        <a href="https://youtu.be/YGpj9JLgmyA?t=61">Alternate Paris Chair boost lineup</a>
      </li>
    </ul>
    <h4 id="stair-boost">Stair Boost</h4>
    <ul>
      <li>
        <a href="https://youtu.be/dh8IuU2kTho?t=33">Chongqing Stair Boost</a>: Throw breakable brick to get onto stair railings</li>
      <li>
        <a href="https://youtu.be/3LJ_Bffotwg?t=610">Sgail Stair Boost</a>: Throw muffin to get onto stair railings, use pistol aiming to move precisely after that.</li>
      <li>Additional tips: Throw breakable object about as far away from the side and the width of 47's feet and on the 1st step (<a href="https://media.discordapp.net/attachments/802883289240043571/818312945205248030/unknown.png?width=1043&amp;height=586">Example</a>). If you throw the breakable object on the corner of the step or the edge of the step it may not break. Try to make sure that you get a circle emanating from where the muffin throw reticle is, for most consistency.</li>
      <li>Checking for circle when throwing breakable object <a href="https://youtu.be/1JA3QvBl9b8?t=1">Example</a></li>
    </ul>
    <h3 id="boost-with-briefcase-no-breaching-charge">Boost with Briefcase (no Breaching Charge)</h3>
    <ul>
      <li>
        <a href="https://youtu.be/264oMY9Ys34?t=60">Colorado Boost with Suitcase</a>: Throw breakable crystal ball to walk on briefcase and get a better sniping angle</li>
    </ul>
    <h4 id="gun-boost">Gun Boost</h4>
    <ul>
      <li>
        <a href="https://youtu.be/4FTHkqCRAWU?t=9">Sapienza Shooting Violin Boost</a>: Drop breakable object, shoot object to boost upwards.</li>
    </ul>
    <h3 id="breakable-object-boost-examples-with-breaching-charge">Breakable Object Boost Examples (with Breaching Charge)</h3>
    <p>Same as regular breakable object boosts, but breaching charge can propel you farther.</p>
    <p>
      <strong>Generally speaking, most breaching charge boosts are highly inconsistent, and are not viable for full game.</strong>
    </p>
    <ul>
      <li>
        <p>
          <a href="https://youtu.be/LtnYqLLBPvs?t=3">Sgail Boost with Breaching Charge and Suitcase</a>: Throw breakable violin onto suitcase, then use breaching charge to propel 47 even higher over ledge</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/0uC-qfsMTpk">SF boost with Breaching Charge, no Suitcase, Dropped Breakable</a>: Drop breakable violin, use breaching charge to propel 47 very high into air.</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/5ukFPboydIY?t=28">New York boost with Breaching Charge, no Suitcase, Thrown Breakable</a>: Throw breakable violin, use breaching charge to propel 47 very high into air (note you can clip through floors).</p>
      </li>
    </ul>
    <h3 id="commentated-video-walkthrough">Commentated Video Walkthrough</h3>
    <p>
      <a href="https://youtu.be/J74iidO5cCg">More in depth video guide with commentary</a>
    </p>

</p>
	
)

    </Layout>
)
export default IndexPage
