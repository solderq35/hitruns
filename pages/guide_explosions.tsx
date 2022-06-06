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
        <h2> Explosions/ Explosives Guide </h2>
        <p>
            <p>
                Disclaimer- Guide ported from H2. The tricks here seem to work
                in H3 as well so far based on personal testing, but keep in mind
                some small things may be altered.
            </p>
            <p>
                Please consult the following tables for explosive device
                properties before reading further:{" "}
                <a href="https://imgur.com/a/d4ZCtvO">
                    https://imgur.com/a/d4ZCtvO
                </a>
            </p>
            <p>
                <a href="https://i.ibb.co/yVd6R4m/unknown-5.png">
                    https://i.ibb.co/yVd6R4m/unknown-5.png{" "}
                </a>
                (Credit: muddye)
            </p>
            <p>
                <strong>
                    Note that it is possible to KO or kill a target with an
                    explosive device before the accident explosion kills them.
                    If you KO a target before they die from accident explosion,
                    you lose SA
                </strong>
            </p>
            <ul>
                <li>
                    <p>
                        <a href="https://youtu.be/9Y2jrg4JYPI">
                            Example of a propane kill that is not SA due to
                            explosive device being too close, and KOing target
                        </a>
                    </p>
                </li>
                <li>
                    <p>
                        <a href="https://imgur.com/a/Q9tygKe">
                            Graphic of the sweet spot for SA with an explosive
                            device and accident explosion source
                        </a>
                    </p>
                </li>
                <li>
                    <p>
                        Breaching charge, bullets, Big One, EMP, and tasers can
                        be considered "safe" ways to trigger accident explosions
                        due to not doing much explosive damage themselves.
                    </p>
                </li>
                <li>
                    <p>
                        Note that accident KO will keep SA on nontargets, but
                        lose you SA on targets.
                    </p>
                </li>
                <li>
                    <p>
                        Note that EMP and tasers do not ignite vehicle oil for
                        some reason
                    </p>
                </li>
                <li>
                    <p>
                        Note that car explosions come out of the back, so try to
                        lure targets there for a car kill
                    </p>
                </li>
                <li>
                    <p>
                        Note that proximity taser does not work when concealed
                        in briefcase unlike other proximity items
                    </p>
                </li>
            </ul>
            <h3 id="advanced-accident-explosion-setup-examples">
                Advanced Accident Explosion Setup Examples
            </h3>
            <ul>
                <li>
                    <p>
                        <a href="https://youtu.be/jqbNe-RkfMs?t=148">
                            Example 1
                        </a>
                        : Breacher propane kill. This is actually pretty basic,
                        but bears repeating. When you are holding propane tank
                        and you drop breaching charge from inventory, it takes a
                        moment for NPC's to realize you dropped an illegal item.
                        If you detonate the breaching charge ASAP, you will keep
                        SA.
                    </p>
                </li>
                <li>
                    <p>
                        <a href="https://youtu.be/CASEkNKCG8I?t=185">
                            Example 2
                        </a>
                        : Set up a leaking propane+proximity taser to blow up
                        Francesca later. Note the proximity taser is placed
                        behind a door so it cannot be seen before it's too late.
                    </p>
                </li>
                <li>
                    <p>
                        <a href="https://youtu.be/vf9XCjUlc6I">Example 3</a>:
                        Tripwire propane setup (no leaking needed). Note that a
                        flat vertical surface and a good amount of distance
                        between the propane and tripwire is necessary for a SA
                        tripwire setup. Note also the tripwire is placed to the
                        side where it cannot be seen before it's too late.
                    </p>
                </li>
                <li>
                    <p>
                        <a href="https://youtu.be/gp_m9OzlHl0?t=134">
                            Example 4
                        </a>
                        : Proximity concussion car explosion setup. Note that I
                        lured two NPC's upstairs so they would stay out of the
                        way while Rico grabbed briefcase. This both prevents the
                        bystanders from picking up the briefcase themselves, and
                        them spotting Rico as he is blown up (concussion will KO
                        him before car explosion kills, so would lose SA with
                        witnesses).
                    </p>
                </li>
                <li>
                    <p>
                        <a href="https://youtu.be/NTJ0egcBqr0?t=94">
                            Example 5
                        </a>
                        : Proximity concussion car explosion setup. Note that I
                        left some room between the concussion explosive and the
                        briefcase, to prevent a KO before Cassidy dies.
                    </p>
                </li>
                <li>
                    <p>
                        <a href="https://youtu.be/01N4wAJcQ_w?t=119">
                            Example 6
                        </a>
                        : Proximity concussion propane setup. Note that I place
                        the concussion device and propane at a precise spot so
                        Claus dies as he runs around the corner. Since his guard
                        can't see around the corner as Claus dies, the guard
                        cannot see Claus getting KO'd by the concussion device
                        before dying to propane.
                    </p>
                </li>
            </ul>
            <h3 id="advanced-explosive-device-kill-examples">
                Advanced Explosive Device Kill Examples
            </h3>
            <ul>
                <li>
                    <p>
                        <a href="https://youtu.be/PqRxJjudG-A?t=13">
                            Example 1
                        </a>
                        : Explosive baseball kill on Soders through wall. Note
                        that Soders' body simply cannot be found no matter how
                        you kill him; Soders is also more frail than other
                        NPC's. Most explosives will work here although Shaman
                        Powder or Explosive Baseball are best.
                    </p>
                </li>
                <li>
                    <p>
                        <a href="https://youtu.be/ITWmeusSv48?t=64">
                            Example 2
                        </a>
                        : Explosive baseball ceiling wallbang on Jordan Cross.
                        Note that the explosion can travel through the ceiling
                        but not the sound, which is why Cross goes unfound.
                    </p>
                </li>
                <li>
                    <p>
                        <a href="https://youtu.be/RxrDmDqFk9U?t=66">
                            Example 3
                        </a>
                        : Suitcase breaching charge kill. Note that the
                        breaching charge does have a larger noise radius than
                        you might think, so this technique is not as versatile
                        as you might imagine.
                    </p>
                </li>
                <li>
                    <p>
                        <a href="https://youtu.be/uNuyQ9zCc-w?t=132">
                            Example 4
                        </a>
                        : Virus wallbang. Note that this only works with the
                        explosive phone, and it must be dropped at a very
                        precise place to work. The phone explosion through the
                        floor triggers a stalactite to fall on virus.
                    </p>
                </li>
            </ul>
            <h3 id="flying-explosives">Flying Explosives!</h3>
            <p>
                If you place breaching charge next to another explosive, you can
                make the second explosive fly. Note that if you place the second
                explosive too close, it will ignite instantly or in mid-air
                immediately. Usually you want to place the second explosive
                device far enough from the breaching charge that it does not
                explode until triggered. This can enable kills that are
                otherwise impossible due to long range/ walls in way. C4 is
                usually optimal for this, as it has biggest explosion radius and
                can wallbang.
            </p>
            <ul>
                <li>
                    <p>
                        <a href="https://youtu.be/ywTUAZBngIM">
                            Example 1, in depth tutorial
                        </a>
                        : C4 explosive is launched by breaching charge up to
                        near where the auction chandelier is. Triggering the C4
                        then causes the chandelier to fall on Dalia.
                    </p>
                </li>
                <li>
                    <p>
                        <a href="https://youtu.be/DX0MfURfqPo?t=13">
                            Example 2
                        </a>
                        : C4 explosive is launched by breaching charge to where
                        Reza Zeydan's office is. Triggering the C4 later causes
                        an accident kill on Reza Zeydan.
                    </p>
                </li>
            </ul>
        </p>
        )
    </Layout>
)
export default IndexPage
