// @ts-nocheck
import Dropdown from "react-bootstrap/Dropdown"
import Layout from "../components/Layout"


const IndexPage = (): JSX.Element => (

    <Layout title="Guides || HitRuns" headerText="HITMAN SPEEDRUNS">
	
	<h4> Guides </h4>
	<p>
	<ul>
	
	<li>
	<a href="/guide_faq">Beginner FAQ</a>
	</li>

	<li>
	<a href="/guide_misc">Miscellaneous Tips/ Glossary</a>
	</li>
	
	<li>
	<a href="/guide_fast_anim">Fast Animations</a>
	</li>
	
	<li>
	<a href="/guide_explosions">Explosions Guide</a>
	</li>


	
	
	</ul>
</p>
    </Layout>
)

export default IndexPage
