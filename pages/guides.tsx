// @ts-nocheck
import Dropdown from "react-bootstrap/Dropdown"
import Layout from "../components/Layout"


const IndexPage = (): JSX.Element => (

    <Layout title="Guides | HitRuns" headerText="HITMAN SPEEDRUNS">
	
	<h2> Guides </h2>
	<p>
	<ul>
	<li>
	<a href="/guide_faq" className = "class7">Beginner FAQ</a>
	</li>
	
	<li>
	<a href="/guide_breakable_boosting" className = "class7">Boosting</a>
	</li>
	
	<li>
	<a href="/guide_bullets" className = "class7">Bullets/ Gun Mechanics</a>
	</li>
	
	<li>
	<a href="/guide_electrocution" className = "class7">Electrocutions</a>
	</li>
	
	<li>
	<a href="/guide_explosions" className = "class7">Explosions Guide</a>
	</li>
	
	<li>
	<a href="/guide_fast_anim" className = "class7">Fast Animations</a>
	</li>
	
	<li>
	<a href="/guide_livesplit_auto" className = "class7">Livesplit Guide (Autosplitter)</a>
	</li>
	
	<li>
	<a href="/guide_livesplit_manual" className = "class7">Livesplit Guide (Manually Entered Times)</a>
	</li>
	
	<li>
	<a href="/guide_lures" className = "class7">Lures</a>
	</li>
	
	<li>
	<a href="/guide_misc" className = "class7">Miscellaneous Tips/ Glossary</a>
	</li>	
	</ul>
</p>
    </Layout>
)

export default IndexPage
