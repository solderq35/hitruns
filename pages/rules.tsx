// @ts-nocheck
import Dropdown from "react-bootstrap/Dropdown"
import Layout from "../components/Layout"


const IndexPage = (): JSX.Element => (

    <Layout title="Hitman 3 Run Rules | HitRuns" headerText="HITMAN SPEEDRUNS">
	
	<center>
	<h1>Hitman 3 Run Rules</h1>
	
	<p className="class9">
	Reminder: This site is just a mirror of speedrun.com, to ensure your run appears on the leaderboard, go to speedrun.com to submit your run.
	</p>
	</center>
	<h2>General Full Game Rules</h2>
	<h4> Map Categories </h4>
	<p>
	<ul>
	<li>Season 3: 6 levels from Dubai to Romania (in order)</li>
	<li>Season 2 w/ DLC: 8 levels from Hawke's Bay to Haven (in order)</li>
	<li>Season 1: 6 levels from Paris to Hokkaido (in order)</li>
	<li>Trilogy Campaign: 6 levels of Season 1, 8 levels of Season 2 with DLC, 6 levels of Season 3. 20 levels from Paris to Romania. (in order)</li>
	<li>Patient Zero: 4 levels of Source, Author, Vector, PZ Hokkaido (in that order)</li>
	<li>Season 2 (no DLC): 6 levels from Hawke's Bay to Sgail (in order)</li>
	</ul>
	</p>
	
	<h4> Full Game Timing Rules (In Game Time) </h4>
	<p>
	<ul>
	<li>Add up the in game time from each level's rating screen to get the total in game time. Use <a href="http://www.grun1.com/utils/timeCalc.html" className="class8"  target="blank"> Grun Time Calculator</a>.</li>
	<li>If you reset, add the time on the timer HUD to the total in game time</li>
	<li>If rating screen time is negative (<a href="https://rentry.org/h3_peacock_installation" className="class8" target="blank">Peacock</a> bug), or you get the unskippable syringe cutscene bug in Romania, but the rating screen still shows "Silent Assassin", then use the last seen timer HUD time + 1 second for that level.</li>
	<li>If rating screen time is missing, then use the last seen timer HUD time + 1 second for that level. (Only for any% runs, if SA or SASO runs have no rating screen, they won't be accepted).</li>
	</ul>
	</p>
	
	<h4> Full Game Timing Rules (Real Time) </h4>
	<p>
	<ul>
	<li>Timing starts when the player ends the opening cutscene of the first mission, and timing ends when exit prompt is pressed on final mission.</li>
	</ul>
	</p>
	
	<h2> General Individual Level Timing Rules </h2>
		<p>
	<ul>
	<li>Use the time on the level's rating screen (in game time)</li>
	<li>If rating screen time is negative (<a href="https://rentry.org/h3_peacock_installation" className="class8" target="blank">Peacock</a> bug), or you get the unskippable syringe cutscene bug in Romania, but the rating screen still shows "Silent Assassin", then use the last seen timer HUD time + 1 second.</li>
	<li>If rating screen time is missing, then use the last seen timer HUD time + 1 second. (Only for any% runs, if SA or SASO runs have no rating screen, they won't be accepted).</li>
	</ul>
	</p>
	
	<h2> Rating Rules </h2>
	<h4> SA Rating </h4>
	<p>
	<ul>
	<li>"Silent Assassin" text on the rating screen (non-negotiable)</li>
	<li>SA runs can be performed on professional or master difficulty</li>
	</ul>
	</p>
	
	<h4> SASO Rating </h4>
	<p>
	<ul>
	<li>"Silent Assassin" text on the rating screen (non-negotiable)</li>
	<li>Start in a suit, finish the whole level in the suit.</li>
	<li><a href="https://hitman.fandom.com/wiki/Category:HITMAN%E2%84%A2_III_Suits" className="class8" target="blank">List of Suits that can be used for SASO</a></li>
	<ul>
      <li>Midnight Black Suit not allowed in Mendoza (trespassing permissions bugged)</li>
      <li>Polar Sniper Suit not allowed in any map (trespassing permissions bugged)</li>
    </ul>
	<li>SASO runs can be performed on professional or master difficulty</li>
	</ul>
	</p>
	
	<h4> Any% Rating </h4>
	<p>
	<ul>
	<li>Any rating is allowed on the rating screen.</li>
	<li>Any% runs can be performed on any difficulty including casual.</li>
	</ul>
	</p>
	
	<h2> Standard Game Version/ Ruleset </h2>
	<p>
	<ul>
	<li>Run should be possible on current patch of Hitman 3</li>
	<li>Run should not use <a href="https://youtu.be/w3Yd-BraFwM" className="class8" target="blank"> tranq glitch</a> (shoot target with Kalmer or use other sedative on them, kill with non-accident method right after, keep SA if body found).</li>	
	<li>Run does not use Midnight Suit in Mendoza (trespassing permissions are bugged)</li>
	<li>Run does not use Polar Survival Suit on any map (trespassing permissions are bugged)</li>	
	<li>Run should not use <a href="https://youtu.be/mJyyyYnrXlk?t=1529" className="class8" target="blank"> 24 hour in game timer overflow exploit</a>.</li>
	<li>Run should not be performed on VR </li>
	
	
	</ul>
	</p>
    </Layout>
	
	
)

export default IndexPage
