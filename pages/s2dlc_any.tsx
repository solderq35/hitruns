// @ts-nocheck
import { GetStaticProps } from 'next';
import { requestRuns } from '../lib/s2dlc_any_run';
import { ParsedRun } from '../interfaces/leaderboard';
import Layout from '../components/Layout';
import LeaderboardTable from '../components/LeaderboardTable';
import { Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'

var category = "Season 2 (w/ DLC)";
var rating = "Any%";
var diff = "";
var linkname = "s2dlc";

var sap = linkname + "_sa_p";
var sasop = linkname + "_saso_p";
var any = linkname + "_any";
var sam = linkname + "_sa_m";
var sasom = linkname + "_saso_m";

type Props = {
  gamecubeRuns: ParsedRun[];
};



const Leaderboard = ({ gamecubeRuns }: Props): JSX.Element => {
	
  return (
  

    <Layout title="Leaderboard || HitRuns" headerText="FULL GAME LEADERBOARD">
      <Row>
	  
	  <div className="dropdownlevel">
	   <Dropdown>
  <Dropdown.Toggle variant="warning" id="dropdown-basic">
    Full Game Category Select
  </Dropdown.Toggle>

  

   <Dropdown.Menu variant="dark">
  <div className="dmenu">
    <Dropdown.Item href="s3_sa_p" className = "class2">Season 3</Dropdown.Item>
    <Dropdown.Item href="s2dlc_sa_p" className = "class2">Season 2</Dropdown.Item>
    <Dropdown.Item href="s1_sa_p" className = "class2">Season 1</Dropdown.Item>
	   
  </div>
  </Dropdown.Menu>

</Dropdown>
  </div>


        <Col xl={16} lg={12} className="pr-2 mb-3 overflow-auto">
		  <center>
		  
		   <h4 className="text-center">{category} {rating} {diff}</h4>

		  </center>
		  			  <center>
			  <a href={sap} className="class1">SA Pro</a>     
			  &nbsp
			  &nbsp
			  <a href={sasop} className="class1">SASO Pro</a>     
			  &nbsp
			  &nbsp
			  <a href={any} className="class1">Any%</a>
			  &nbsp
			  &nbsp
			  <a href={sam} className="class1">SA Master</a>
			  &nbsp
			  &nbsp
			  <a href={sasom} className="class1">SASO Master</a>
			    
          
		  </center>

		  <center>
		    
 </center>		 
 &nbsp
			  &nbsp
		 <LeaderboardTable runs={gamecubeRuns} />

        </Col>
 // <Col xl={6} lg={12} className="pl-2 mb-3 overflow-auto">
     
        
        //</Col>
        //<Col xs={12}>
          
        </Col>
      </Row>
	  <p>
	  
	  </p>

    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [gamecubeRuns] = await requestRuns();

  return {
    props: { gamecubeRuns },
    revalidate: 300,
  };
};

export default Leaderboard;
