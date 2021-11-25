// @ts-nocheck
import Dropdown from "react-bootstrap/Dropdown"
import Layout from "../components/Layout"


const level1 = "guide_faq"
const level2 = "guide_misc"
const level3 = "guide_fast_anim"
const level4 = "guide_explosions"


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
                            Fast Animations Guide
                        </Dropdown.Item>
						<Dropdown.Item href={level4} className="class2">
                            Explosions and Explosives Guide
                        </Dropdown.Item>
                    </Dropdown.Menu>
					
                </Dropdown>
	<h2> Fast Animations </h2>
<p>

<p>Disclaimer- Guide ported from H2. The tricks here seem to work in H3 as well so far based on personal testing, but keep in mind some small things may be altered.</p>
    <h2 id="fast-throw-instructions-all-platforms">Fast throw instructions (all platforms)</h2>
    <ul>
      <li>
        <p>Press the crouch button, then press the throw button, then press crouch again to un-crouch all in quick succession. The second crouch button press is unnecessary, but it make the animation smoother and makes you ready for a second fast throw. Fast throw will make your throw at an NPC come out half a second faster (ish) per throw.</p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/tBnykFC3fE4?t=24">PC Example</a>
        </p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/cyuw5pHubsk?t=78">Console Example</a>
        </p>
      </li>
    </ul>
    <h2 id="fast-interact">Fast Interact</h2>
    <ul>
      <li>Disclaimer the below methods are not the <em>only</em> way of fast interact, just the easiest methods</li>
      <li>Note that if you have a briefcase in your hand, you will need to have an additional item (so briefcase in left hand, additional item in right), to be able to make this work easily. Otherwise you may conceal an item in briefcase instead of instant interacting.</li>
    </ul>
    <h2 id="pc-fast-interact-instructions">PC Fast Interact Instructions</h2>
    <p>For PC, this trick can be used for any prompt tied to the default interact button (G). This includes, but is not limited to, exits, turning on sinks, turning on radios, and unlocking doors.</p>
    <ul>
      <li>
        <p>To do the trick, press inventory (default button I), then the interact button (G) in quick succession when in front of an interact prompt. This trick will save about half a second per use, enabling you to instantly trigger the prompt instead of waiting to fill up circle.</p>
      </li>
	  </ul>
	  	  <h5>
	  
	  PC Video Examples
	  </h5>
	  <ul>
      <li>
        <p>
          <a href="https://youtu.be/muO9Mm3yUvQ?t=14">Sink fast interact example</a>
        </p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/muO9Mm3yUvQ?t=53">Fast exit example</a>
        </p>
      </li>
    </ul>
    <h2 id="console-fast-interact">Console Fast Interact</h2>
    <p>For console, fast interact can be used for any circle prompt tied to the buttons triangle, circle, and X (on PS4), or Y, A, and B (on XB1).
This includes, but it not limited to, picking up items, disguise changes, dragging bodies, and exits/ sinks/ radios/ unlocking doors.</p>
    <h2 id="ps4-instructions">PS4 Instructions</h2>
    <p>For fast pickup, fast exit, fast interact with sinks/ radios/ unlocking doors etc:</p>
    <ul>
      <li>When by a pickup/ interact prompt, press inventory button (D-pad left or right button), then square OR circle, then triangle in quick succession.</li>
    </ul>
    <p>For fast disguise change:</p>
    <ul>
      <li>When by a pickup/ interact prompt, press inventory (D-pad left or right button), then square OR circle, then X in quick succession.</li>
    </ul>
    <p>For fast body drag:</p>
    <ul>
      <li>When by a body drag prompt, press inventory (D-pad left or right button), then square OR circle , then circle in quick succession.</li>
    </ul>
    <h2 id="xb1-instructions">XB1 Instructions</h2>
    <p>For fast pickup, fast exit, fast interact with sinks/ radios/ unlocking doors etc:</p>
    <ul>
      <li>When by a pickup/ interact prompt, press inventory button (D-pad left or right button), then X OR B, then Y in quick succession</li>
    </ul>
    <p>For fast disguise change:</p>
    <ul>
      <li>When by a disguise change prompt, press inventory button (D-pad left or right button), then X OR B, then A in quick succession</li>
    </ul>
    <p>For fast body drag:</p>
    <ul>
      <li>
        <p>When by a drag body prompt, press inventory button (D-pad left or right button), then X OR B, then B in quick succession.</p>
      </li>
	  </ul>
	  <h5>
	  
	  Console Video Examples
	  </h5>
	  <ul>
      <li>
        <p>
          <a href="https://youtu.be/KB4gU2d7938?t=89">Example of fast pickup</a>
        </p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/KB4gU2d7938?t=50">Example of fast disguise change</a>
        </p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/4fzWz6h5mjM?t=42">Example of fast body drag</a>
        </p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/KB4gU2d7938?t=112">Example of fast exit</a>
        </p>
      </li>
    </ul>

</p>
	
)

    </Layout>
)
export default IndexPage
