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
	<h2> Lures </h2>
<p>

<p>Disclaimer- Guide ported from H2. The tricks here seem to work in H3 as well so far based on personal testing, but keep in mind some small things may be altered.</p>
    <p>
      <strong>For bullet lures, refer <a href="https://www.speedrun.com/just_hitman_2/guide/ig9m0">here</a></strong>
    </p>
    <h1 id="visual-lures">Visual Lures</h1>
    <h2 id="peekaboo">Peekaboo</h2>
    <p>Peekaboo is when you let an NPC almost see you trespass, but not quite. They will wander over to where you were seen last. This only works if you are trespassing, and the NPC you're trying to lure is an enforcer for that area.</p>
    <ul>
      <li>
        <a href="https://youtu.be/7Sl5YjZk9RQ?t=152">Example</a>: Peekaboo Cassidy into yard for easy kill.</li>
    </ul>
    <p>You can make the peekaboo stronger by aiming a gun at the target; this enables long distance lures.</p>
    <ul>
      <li>
        <a href="https://youtu.be/rtOxUR7SW6k?list=PLflusD4O8jzP3x-aiUsCupSy0iWm8Sq1G&amp;t=115">Example</a>: Tyson is lured downstairs with gun peekaboo for a falling object kill.</li>
    </ul>
    <h2 id="briefcase">Briefcase</h2>
    <p>
      <strong>For more info on what explosives work with briefcase, check <a href="https://imgur.com/a/VdQnRVm">here</a></strong>
    </p>
    <p>Briefcase has the highest visual lure range of any passive distraction in the game. Do note however that it can fail to lure NPC's if you are seen near the briefcase. Try to make sure you can not be seen in the same area as the briefcase when attempting a briefcase lure.</p>
    <ul>
      <li>
        <a href="https://youtu.be/1_jXK9Pbg8E?t=107">Example</a>: Briefcase dropped to lure Tyson downstairs for falling object kill.</li>
    </ul>
    <p>Also note that briefcase can uniquely take priority over bullet distractions or peekaboos. With other passive distractions like coins, the NPC will not respond until after they are done investigating the bullet distraction or peekaboo. Briefcase can break the peekaboo and be used to make a seamless chain lure.</p>
    <ul>
      <li>
        <p>
          <a href="https://www.youtube.com/watch?v=GCICN86wF9M&amp;feature=youtu.be">Example 1</a>: Briefcase breaks the peekaboo of Tyson for a potential lure to the cylindrical lamp for an electrocution kill.</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/xbYaP_6clQQ?t=128">Example 2</a>: An initial bullet distraction turns the target to look in the direction of the briefcase, and then the briefcase takes priority over the bullet distraction. The target walks over to pick up briefcase, making for an easy explosive kill.</p>
      </li>
    </ul>
    <p>#Passive distractions
Coins are not unique in their ability to be placed on the ground and lure people. The following list of items (which is not exhaustive) also can lure NPC's passively when placed.</p>
    <ul>
      <li>Ducks</li>
      <li>Phones</li>
      <li>EMP charge</li>
      <li>Gold Bar</li>
    </ul>
    <h1 id="audio-lures">Audio Lures</h1>
    <ul>
      <li>Generally speaking, the phones (flash, explosive, electrocution) have the highest audio lure range in the game.</li>
      <li>Napoleon and Lil Flashy have the next highest audio lure range, followed by Mixtape 47/ ICA audio distraction.</li>
      <li>Note that Napoleon and Lil Flashy can be used for chain lures. You can drop Napoleon/ Lil Flashy a second time and the target will respond to the second distraction as soon as they are close enough. With the phones, the target will not respond to a second phone ring until done investigating the first phone ring.</li>
    </ul>
    <h2 id="empty-gun-lure">Empty Gun Lure</h2>
    <p>Empty guns will still make a sound when you dry-fire them. This sound can even travel through walls.</p>
    <ul>
      <li>Note that the empty gun click cannot panic NPC's no matter how often you do it.</li>
      <li>
        <a href="https://youtu.be/NjJexxqp_c0?t=48">Example 1</a>: Note how the dart gun click lures an NPC through the wall.</li>
      <li>
        <a href="https://youtu.be/YKmnASBZl74?t=218">Example 2</a>: Note how the dart gun click turns the enforcer around.</li>
    </ul>
    <h1 id="stop-unwanted-lures">Stop Unwanted Lures</h1>
    <ul>
      <li>To stop an NPC from checking out a distraction, simply let the NPC see you drop or throw an item. They will yell at out but not investigate further.</li>
      <li>
        <a href="https://youtu.be/gp_m9OzlHl0?t=45">Example</a>: Drop briefcase to stop guards from walking into puddle after hearing bullet.</li>
    </ul>

</p>
	
)

    </Layout>
)
export default IndexPage
