// @ts-nocheck
import { GetStaticProps } from 'next';
import { requestRuns } from '../lib/s2dlc_sa_p_run';
import { parseRuns } from '../lib/s2dlc_sa_p_run';
import { ParsedRun } from '../interfaces/leaderboard';
import Layout from '../components/Layout';
import LeaderboardTable from '../components/LeaderboardTable';
import { Row, Col } from 'react-bootstrap';
type Props = {
  gamecubeRuns: ParsedRun[];
  
};

const Leaderboard = ({ gamecubeRuns }: Props): JSX.Element => {
  return (
    <Layout title="Leaderboard | HitmanSpeedruns" headerText="FULL GAME LEADERBOARD">
      <Row>
        <Col xl={16} lg={12} className="pr-2 mb-3 overflow-auto">
          <h4 className="text-center">Season 2 SA Pro</h4>
          <LeaderboardTable runs={gamecubeRuns} />
		  
        </Col>
 // <Col xl={6} lg={12} className="pl-2 mb-3 overflow-auto">
     
        
        //</Col>
        //<Col xs={12}>
          <a className="mb-0" href="https://speedrun.com/hitman_3" target="_blank" rel="noreferrer">Leaderboard data taken from speedrun.com</a>
        </Col>
      </Row>
	  <p>
	  
	  </p>
			  <center>
			  <a href="s2dlc_sa_p" class="class1">SA Pro</a>     
			  &nbsp
			  &nbsp
			  <a href="s2dlc_saso_p" class="class1">SASO Pro</a>     
			  &nbsp
			  &nbsp
			  <a href="s2dlc_sa_m" class="class1">SA Master</a>
			  &nbsp
			  &nbsp
			  <a href="s2dlc_saso_m" class="class1">SASO Master</a>
			  </center>
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
