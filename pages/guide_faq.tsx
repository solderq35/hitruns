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
	<h2> Beginner FAQ </h2>
	<p>
	   <p>Q: What should I buy, what do the different editions mean? </p>
		
		<p>
		A: You can buy any combination of DLC you like, but to compete at the top level with other NG+ runs (more on this later), you will want to buy the Hitman 3 standard edition, and then Hitman 1 GOTY Access Pass and HITMAN 2 Gold Access pass, and possibly the 7 deadly sins DLC too. Note that if you are an owner of HITMAN (2016) or HITMAN 2 (2018) you may be eligible to redeem the Hitman 1 or 2 Access Passes. More info here: <a href="https://www.ioi.dk/hitman-3-pre-launch-guide/"  target="blank">https://www.ioi.dk/hitman-3-pre-launch-guide/</a></p>
	<pre>
	</pre>
	<p>Q: Do I need to be connected to the Internet at all times to speedrun this game? </p>
	
	<p>
	A: For Silent Assassin runs, yes for the most part. If you are on PC, you can try <a href="https://rentry.org/h3_peacock_installation"  target="blank">The Peacock Project (a Server Emulator)</a> to bypass IOI's servers. You will need to be connected to Internet for the initial connection, but afterwards you can play offline for the duration of your play session using Peacock. Using either Peacock or connecting to the official servers is required for Silent Assassin runs, as you cannot get to an accurate rating screen otherwise.
	Playing offline and without Peacock is allowed for any%, provided you have the in game timer HUD on.</p>
    <pre>
	</pre>
	<p>Q: I don't want to unlock stuff before I speedrun, where is the "New Game"/ "Fresh file" category?</p>

	<p>A: The main leaderboards are NG+ by default. There isn't a <em>true</em> New Game speedrun category due to 2 main factors. Firstly, all progress is stored online, and you can only wipe an account's progress every 6 months through IO's website. Secondly, some platforms like Epic Games do not have family sharing built in, meaning it would cost a lot of money to buy the game multiple times for multiple accounts.</p>
    <ul>
      <li>There are some categories in Category Extensions that comes close to simulating a New Game experience, you can check the leaderboards <a href="https://www.speedrun.com/hitman_3_extensions/full_game"  target="blank">here</a>. Click on "Default Loadout/Start (NG)" or "Default Loadout/Start (NG+)" and then click "View Rules" if confused about the rules.</li>
      <li>"Default Loadout/Start (NG)" is a category for playing the game like you would on the first playthrough, but with zero unlocking of items/ features allowed.</li>
      <li>"Default Loadout/Start (NG+)" is a category that allows for some minimal NG+ features.</li>
    </ul>
	<pre>
	</pre>
    <p>Q: Okay, say I'm willing to try the NG+ categories, how do I level up quickly to get the item and starting location unlocks? </p>
	<p>
	A: First of all, if you are PC, consider using <a href="https://rentry.org/h3_peacock_installation"  target="blank">The Peacock Project</a>. This tool will allow you to get access to all unlocks right away.</p>
    <ul>
      <li>If you are on console or do not wish to use Peacock, take a look at <a href="https://hitman.fandom.com/wiki/List_of_mastery_unlocks_by_mission"  target="blank">this list of unlocks</a> first, so you know what you need to do to get a certain item.</li>
      <li>In general, to level up mastery you should first get The Classics challenges (SASO, Sniper Assassin) done first, as you can get many challenges done in one run. Note that for the most part, <strong>any other challenge besides The Classics do not require you to finish the level to get XP</strong>.</li>
      <li>Thus, for other challenges, the most efficient way to get XP is to make a save right before critical points in a run, such as after you have a target isolated. Then you can load the save multiple times to complete multiple challenges. Note that the mastery level can take a while to update if you don't finish the mission, go to Career-&gt;Mastery from main menu to get a more accurate look at your current mastery level. Note that if you dislike the in game challenges, you technically can get XP just by playing the game normally, it will just take way longer to level up.</li>
    </ul>
    <p>Q: What are the optimal in-game settings to run the game? </p>
	<p>
	A: Go to Options&gt; Gameplay &gt; HUD. Turn on Difficulty HUD (for verification purposes), Silent Assassin HUD (to see what rating you have at all times), Timer HUD (helps for timing certain kills). For Miami, you may also want to turn Simulation Quality in Graphics Settings to Base, to avoid rendering some racetrack flags.</p>
	<pre>
	</pre>
    <p>Q: How do I set up livesplit for full game runs? </p>
	
	<p>
	A: We use in game time for this game, so you should consider using <a href="guide_livesplit_manual">Livesplit (Manually Entered Times)</a> or <a href="guide_livesplit_auto">Livesplit (Autosplitter)</a> to enter in the in game time for each level manually. Be sure to read the rules for Full Game leaderboard carefully first as well.</p>
	<pre>
	</pre>
    <p>Q: I am having trouble with X trick/ have a question about the leaderboard rules, can anyone help me?
	</p>
	
	<p>
	A: Consider asking in <a href="https://discord.com/invite/kVMBEZA"  target="blank">Frotes Speedrun Community</a> or <a href="https://discord.gg/g27npc75kp"  target="blank">Hitman Runs Discord</a>. For more general advice, you can also consider looking at the <a href="guides">other guides</a>. For questions about the rules, you can either ask in the above Discord servers, or contact a moderator directly (go to Profile -&gt; Message, or use the moderator's social media).</p>
	
	</p>
	
)

    </Layout>
)
export default IndexPage
