// @ts-nocheck
import { GetStaticProps } from 'next';
import { Row, Col } from 'react-bootstrap';
import { requestRuns } from '../lib/runs';
import { ParsedRun } from '../interfaces/leaderboard';
import ReactPlayer from 'react-player';

import Layout from '../components/Layout';
import LeaderboardTable from '../components/LeaderboardTable';

type Props = {
  gamecubeRuns: ParsedRun[];
  pcRuns: ParsedRun[];
};

const IndexPage = ({ gamecubeRuns, pcRuns }: Props): JSX.Element => (
  <Layout title="Home | HobbitSpeedruns" headerText="HITMAN 3 SPEEDRUNS">
 <center>
 <table class ="table1">
 
  <tr>
    <th><a href="s2dlc_sa_p" className="class1">SA Pro</a> </th>
    <th><a href="s2dlc_sa_p" className="class1">SASO Pro</a> </th>
    <th><a href="s2dlc_sa_p" className="class1">Any%</a> </th>
	<th><a href="s2dlc_sa_p" className="class1">SA Master</a> </th>
	<th><a href="s2dlc_sa_p" className="class1">SASO Master</a> </th>
  </tr>
 
</table>
</center>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const [gamecubeRuns, pcRuns] = await requestRuns();

  return {
    props: { gamecubeRuns, pcRuns },
    revalidate: 300,
  };
};

export default IndexPage;
