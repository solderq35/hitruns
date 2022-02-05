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
		<h2> Miscellaneous Tricks/ Glossary </h2>
	<p>
	
	<p>

<p>Disclaimer- Guide ported from H2. The tricks here seem to work in H3 as well so far based on personal testing, but keep in mind some small things may be altered.</p>
    <h3 id="cutscene-wait">Cutscene Wait</h3>
    <p>Cutscene waiting is a great way to speed up a run. While the cutscene plays, NPC's in the level will already start moving, which means you can save in-game time otherwise spent waiting for an NPC to move into position.</p>
    <ul>
      <li>
        <p>Note that sometimes you must perform certain actions in a route ASAP and as such you do not have time to play cutscene</p>
      </li>
      <li>
        <p>Note that default starting locations have longer cutscenes (sometimes nearing a minute) vs other locations (10-20 seconds)</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/F5SXFdx04pI?t=18"  target="blank">Example</a>: This player played about 20 seconds of cutscene. As a result Maya Parvarti walked under the hay bale at 1:41. Without waiting cutscene Parvarti walks under hay bale at about 2 minutes.</p>
      </li>
    </ul>
    <h3 id="fast-sniper-briefcase-unpack">Fast Sniper Briefcase Unpack</h3>
    <ul>
      <li>Technically this works with all large items that can be unpacked from briefcases, but most common use is with sniper rifle.</li>
      <li>To perform fast unpack: Drop Briefcase&gt; Crouch &gt; Unpack, or Drop &gt; Unpack &gt; Crouch &gt; Uncrouch</li>
      <li>
        <a href="https://youtu.be/ou48fdLsmZQ?t=17"  target="blank">Example</a>. This saves about half a second overall.</li>
    </ul>
    <h3 id="unlocking-doors">Unlocking Doors</h3>
    <p>Some of the methods of unlocking doors were covered <a href="https://www.speedrun.com/hitman_3/guide/h5jij"  target="blank">here</a>, but I will go more into depth on the topic here as well.</p>
    <p>General guidelines:</p>
    <ul>
      <li>
        <p>Lockpick and Crowbar obviously only work on physical lock doors, while scramblers/ key hackers and EMP only work on electric doors.</p>
      </li>
      <li>
        <p>All SMG's, assault rifles, sniper rifles, shotguns, striker/ matador and full auto pistols can shoot open physical lock doors and electric <strong>swinging</strong> doors alike. You cannot shoot open sliding electric doors with guns.</p>
      </li>
      <li>
        <p>You can open swinging doors with semi automatic pistols if you use pause buffering.</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/Wozdp8NAvvQ?t=16"  target="blank">Example</a>.  Note that Krugermeier and Hwk 21 Homemade may need more shots to work with this trick.</p>
      </li>
      <li>
        <p>Explosives can generally open physical lock doors and electric swinging doors, but not electric sliding doors.</p>
      </li>
    </ul>
    <p>Concussive explosives are much less audible making them only be heard in the room that they have exploded in. These are a great alternative</p>
    <ul>
      <li>
        <a href="https://youtu.be/rLJJKdxbMas?t=46"  target="blank">Example</a>
      </li>
      <li>Note that shaman powder is as audible as a regular explosive</li>
    </ul>
    <h3 id="gun-flashing">Gun-flashing</h3>
    <p>Pointing a firearm at a guard in proximity of their VIP Target will cause the guard to panic, and as a result go blind, allowing you to perform illegal actions to the target. (Can also happen without presence of VIP, especially when part of 47's body is hidden when gun goes off).</p>
    <h3 id="full-lockdown">Full Lockdown</h3>
    <p>Targets in direct danger are taken to a safe space by their VIP guards and heavily protected.</p>
    <h3 id="soft-lockdown">Soft Lockdown</h3>
    <p>Targets that witness panic will retreat to a 'safe space', often closer and less secure than a full lockdown. Their VIP guards can enter 'searching', abandoning the target. Targets that witness their VIP guard panic will enter Full Lockdown state (Needs more testing)</p>
    <h3 id="bad-shelter">Bad Shelter</h3>
    <p>When a Target or VIp guard (sometimes telepathically) considers lockdown location compromised, and redirects to a secondary lockdown point.
hope this helps</p>
    <h3 id="fast-disguise-change">Fast Disguise Change</h3>
    <p>There are several disguise change animations, some of which are slower than others. To avoid the slow disguise change animation, it is best to crouch before taking disguise, or else to grab the body before changing disguise.</p>
    <ul>
      <li>
        <a href="https://youtu.be/hxXunF1WkeM?t=57"  target="blank">Example 1</a>: Slow disguise change animation (where 47 runs his hands along each arm). This happens sometimes if you are standing when you take disguise. Avoid this at all costs!</li>
      <li>
        <a href="https://youtu.be/B-T12TJfHBM?t=44"  target="blank">Example 2</a>: Notice how 47 does a faster animation without running his hands along his arms.</li>
      <li>
        <a href="https://youtu.be/2HGNgKRJMdc?t=55"  target="blank">Example 3</a>: Grabbing body before disguise change is also a way to avoid the slow disguise change animation. Note this works even if you are standing up before grabbing body.</li>
    </ul>
    <h3 id="fast-equip-no-inventory">Fast Equip (no inventory)</h3>
    <p>Shot + Inventory, next item in your inventory will be equipped with zero stutter, without going through inventory. Note that you will have to order your inventory correctly in advance to get the desired item.</p>
    <ul>
      <li>
        <a href="https://youtu.be/KPA9t3FVysA?t=22"  target="blank">Example</a>
      </li>
    </ul>
    <h3 id="strafe-to-avoid-inventory-stutter">Strafe to avoid Inventory Stutter</h3>
    <p>Strafe slightly to one side while running forwards, cycle through inventory via opposite direction you strafed to desired item.</p>
    <ul>
      <li>
        <a href="https://youtu.be/E27yVaESkTY"  target="blank">Example</a> (strafe left, cycle inventory to the right)</li>
    </ul>
    <h3 id="hipfire-glide">Hipfire Glide</h3>
    <p>Hipfire (shoot without aiming) while moving down slope backwards. A bit faster than just running down normally.
<a href="https://youtu.be/gH1o5VsJqh4"  target="blank">Example</a></p>
</p>
	</p>


    </Layout>
)

export default IndexPage
