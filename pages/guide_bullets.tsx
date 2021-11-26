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
	<h2> Guns/ Bullet Mechanics </h2>
<p>

<p>Disclaimer- Guide ported from H2. The tricks here seem to work in H3 as well so far based on personal testing, but keep in mind some small things may be altered.</p>
    <p>
      <a href="https://youtu.be/NNprCg14ibk">Supplemental video guide with voiceover from TJGM</a>
    </p>
    <h2 id="useful-guns">Useful Guns</h2>
    <p>If you do not know how to unlock any of the below weapons, check Hitman Wiki's Unlocks/ Mastery guide in Resources.</p>
    <h2 id="ballistic-pistols">Ballistic Pistols</h2>
    <p>ICA19 and its variants are overall the most accurate silenced pistol. Note that the ICA 19 Silverballer's "precise aim" is a placebo and doesn't actually improve the accuracy of the gun. This is confirmed by multiple renowned speedrunners such as Mendietinha, and Foretheseven.</p>
    <p>Krugermeier can sometimes be useful because both the gunshot and bullet impact are quieter, which can sometimes prevent panic/ getting spotted. This does come at the price of an accuracy reduction compared to ICA19.</p>
    <p>HWK21 Pale Homemade Silencer is a decent pistol that is accurate and has less recoil than ICA19, but it also does less damage than any other pistol, so beware if trying to kill with body shots.</p>
    <p>DAK X2 Covert and ICA 19 F/A stealth are silenced handheld guns that can shoot open almost any swinging door, physical or electric lock alike. However, since they are also full auto, they are less useful for precise bullet distractions.</p>
    <ul>
      <li>
        <a href="https://youtu.be/OuoNO_5_oGI?list=PLflusD4O8jzNubvmK7dMBgbZ6Vsl-qiwR&amp;t=48">Example of shooting open a door with ICA 19 F/A stealth</a>
      </li>
    </ul>
    <h2 id="sniper-rifles">Sniper Rifles</h2>
    <p>Sniper Properties Data Table: <a href="https://i.ibb.co/wyVvGrt/image0.jpg">https://i.ibb.co/wyVvGrt/image0.jpg</a>
	</p>
	<p>
Sniper rifles can also shoot swinging doors open, so you may not need a lockpick or disposable scrambler if you're already bringing a sniper rifle.</p>
    <ul>
      <li>
        <a href="https://www.youtube.com/watch?v=yoMQOQgOWQQ&amp;list=PLflusD4O8jzNubvmK7dMBgbZ6Vsl-qiwR&amp;index=2">Example of shooting door open with sniper rifle</a>
      </li>
    </ul>
    <p>Sieger 300 Ghost is usually the best all-around sniper to to having fast unpack, maximum zoom, maximum damage (can blow up car in two shots from any distance, OHKO any NPC from any distance), and also being the most silent (subsonic perk).</p>
    <p>However, the non-Ghost Sieger 300 variants can also be useful for times when you <strong>do not</strong> want to one hit kill people.</p>
    <ul>
      <li>
        <a href="https://youtu.be/1_jXK9Pbg8E?t=37">Example of using Sieger 300 Advanced on Ljudmilla- Bullet does not kill Ljudmilla on impact, but pushes her into water for fall accident.</a>
      </li>
      <li>
        <a href="https://youtu.be/CASEkNKCG8I?t=236">Example of using Sieger 300 to avoid killing scientist near virus when shooting virus</a>
      </li>
    </ul>
    <p>Hackl Levithan Sniper Rifle Covert is also worth considering if you want a piercing sniper rifle (only silenced sniper rifle with piercing and fast unpack animation).</p>
    <h2 id="dart-guns">Dart Guns</h2>
    <p>Kalmer does not fire bullets, but its tranquilizing effect is very useful. Besides the obvious application of public knockouts, guards are temporarily unable to frisk you or spot you trespassing while they are looking at a body unconscious from a Kalmer.</p>
    <ul>
      <li>
        <a href="https://youtu.be/m6UieQE2VD8?t=99">Example of using Kalmer to avoid getting spotted for trespassing</a>
      </li>
    </ul>
    <p>Sieker does not fire bullets, but its emetic effect is very useful. Besides the obvious application of making NPC's go to the toilet, it is also useful for just making NPC's blind and leave the area for more than a minute.</p>
    <ul>
      <li>
        <a href="https://youtu.be/ITWmeusSv48?t=33">Example of using Sieker on gardener so he cannot spot me later</a>
      </li>
    </ul>
    <h2 id="bullet-distractions-1-bullet">Bullet Distractions (1 bullet)</h2>
    <p>The most obvious use of bullet distractions is to briefly turn an NPC around, or lure them to a particular spot.</p>
    <ul>
      <li>
        <a href="https://youtu.be/gp_m9OzlHl0?t=108">Example of 4 bullet distractions to turn NPC around</a>
      </li>
    </ul>
    <p>A lesser known application of bullet distractions is to shoot the top of a wall/ ceiling to lure NPC's upstairs. This can be used not only to lure NPC's to another floor, but to just make an NPC leave the area for an extended period of time.</p>
    <ul>
      <li>
        <a href="https://youtu.be/PxxPBKvBBNQ?t=24">Example of ceiling lure</a> (notice how lady goes upstairs)</li>
    </ul>
    <h2 id="shot-bullet-panic">2 shot bullet panic</h2>
    <p>A common use of 2 shot bullet panic is to panic civilians so they can't spot you trespassing.</p>
    <ul>
      <li>
        <a href="https://youtu.be/gp_m9OzlHl0?t=241">Example bullet panic to avoid getting caught trespassing</a>
      </li>
    </ul>
    <p>2 shot bullet panic can also be used to keep multiple NPC's looking in the direction you shot at for longer than if you just fired one shot. Beware this is risky, as NPC reactions to two bullets can be RNG.</p>
    <ul>
      <li>
        <a href="https://youtu.be/CASEkNKCG8I?t=387">Example of bullet panic to keep guards turned to the right</a>
      </li>
    </ul>
    <h2 id="triple-shot-panic">Triple shot panic</h2>
    <p>When you triple shot a surface near a guard, they will home in on where you shot from. During this time they are unable to see you trespassing. Make sure you leave the area from where you shot as soon as possible, or else you may go into combat. Note that triple shot only works on guards, civilians react the same to triple shot as they would double shot. Note that triple shot blinds guards to everything, not just trespassing. You cannot be spotted wielding a weapon by guards panicked by triple shot, for instance.</p>
    <p>
      <strong>Disclaimer: this technique can be rather inconsistent and doesn't always work as expected. Sometimes you spontaneously go into combat when running past guard, sometimes an NPC runs an unexpected direction and causes panic.</strong>
    </p>
    <ul>
      <li>
        <a href="https://youtu.be/-TNnwIawiEw?t=51">Example of using triple shot panic to blind them to trespassing</a>
      </li>
    </ul>
    <h2 id="body-shots">Body shots</h2>
    <p>Unlike triple shot, body shot works both on guards and civilians. Body shot works pretty much the same as guards as triple shot, causing the guard to home in on where you shot from while blinded to any illegal action you perform. Body shotting civilians also blinds them to illegal actions you perform, but they will just run for a nearby guard instead of homing in on you. Note that body shotting makes NPC's blind to all illegal actions, not just trespassing. You can for example shoot a civilian so they can't spot you shooting something else.</p>
    <p>
      <strong>Disclaimer: this technique can be rather inconsistent and doesn't always work as expected. Sometimes you spontaneously go into combat when running past guard, sometimes an NPC runs an unexpected direction and causes panic.</strong>
    </p>
    <ul>
      <li>
        <p>
          <a href="https://youtu.be/VZhx78JpAVU?t=137">Example of body shotting a guard to make them blind to trespassing</a>
        </p>
      </li>
      <li>
        <p>
          <a href="https://youtu.be/dntnt3NWekM?t=50">Example of body shotting a civilian to make them blind to illegal actions</a>
        </p>
      </li>
    </ul>
    <h2 id="stored-shot">Stored Shot</h2>
    <p>While using Instinct, press the "fire gun" button (left click on PC). When you come out of Instinct and aim (right click on PC), you will perform a shot with zero stutters.</p>
    <h2 id="zoomed-out-aim">Zoomed out aim</h2>
    <p>Sometimes you will get strangely zoomed out camera when aiming with pistol (<a href="https://youtu.be/fEMuIEDegTE?t=69">example</a>).</p>
    <p>To prevent this, crouch and uncrouch before aiming.</p>

</p>
	
)

    </Layout>
)
export default IndexPage
