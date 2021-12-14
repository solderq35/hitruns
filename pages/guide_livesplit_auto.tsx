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
	<h2> In Game Time Autosplit Script Guide </h2>
<p>

<h3 id="specifications">Specifications:</h3>
    <p>This autosplitter script will keep track of in game time. Just as the in game time normally works, this timer will be paused when in loading screens, inventory, planning screen in between levels, and during intro/ exit cutscenes. It does not split between levels automatically, although a running total of the in game time is maintained.</p>
	 <p>
      <strong>Disclaimer: This autosplitter may not be 100% accurate, this tool is just to get a decent estimate of your final in game time. Runs will be retimed by moderators as necessary.</strong>
    </p>
    <h3 id="instructions">Instructions</h3>
    <p>Download Livesplit <a href="https://livesplit.org/downloads/">here</a></p>
    <p>Download the hitman3.asl code from here: <a href="https://github.com/sandro-h/hitman3_asl">https://github.com/sandro-h/hitman3_asl</a></p>
    <p>Unzip the folder of the Livesplit Download, and then click on the Livesplit Application to start. Unzip the hitman3.asl file from its folder as well.</p>
    <p>Right click on main Livesplit application window, go to "Edit Splits". Here you can enter information about the game name, category, and splits for each map to your liking. Be sure to select the "Game Time" option. Enter your estimated in game time splits for each map in "segment time" column.</p>
    <p>
      <a href="https://i.ibb.co/TrJWrq5/splitsedit.png">https://i.ibb.co/TrJWrq5/splitsedit.png</a>
    </p>
    <p>Click "okay", then right click the main Livesplit application window and click on "save splits as" to save the splits for later use.</p>
    <p>Right click on main Livesplit application window, and go to "Edit Layout". Click on the "+" symbol, then List -&gt; Splits to make sure the splits created earlier show up on screen.</p>
    <p>Click on the "+" symbol, then go to "Control", then "Scriptable Autosplitter". Double click on "Scriptable Autosplitter", then "browse", and select the hitman3.asl file you downloaded earlier.</p>
    <p>
      <a href="https://i.ibb.co/Mn4qC8w/editlayout.png">https://i.ibb.co/Mn4qC8w/editlayout.png</a>
    </p>
    <p>Click "okay", then right click the main Livesplit application window and click on "save layout as" to save the splits for later use.</p>
    <p>Right click on main Livesplit application window, and go to "Compare Against", then "Game Time".</p>
    <p>Right click on main Livesplit application window, and go to "Settings", and adjust hotkeys as needed. "Numpad 1" (have Num Lock on) is the default for starting and splitting.</p>
    <p>If you followed the steps above correctly, pressing on Numpad 1 will move the timer to the next split (level).</p>
    <p>
      <strong>Note that this autosplit script will keep a running total of your in game time, but it does not split between levels automatically.</strong>
    </p>
    <p>If you mess up, you can reset the run (numpad 3 by default).</p>

</p>
	
)

    </Layout>
)
export default IndexPage
