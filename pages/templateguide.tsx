// @ts-nocheck
import Dropdown from "react-bootstrap/Dropdown"
import Layout from "../components/Layout"


const level1 = "guide_faq"
const level2 = "guide_misc"


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
                    </Dropdown.Menu>
					
                </Dropdown>
	<h2> Title </h2>
<p>



</p>
	
)

    </Layout>
)
export default IndexPage
