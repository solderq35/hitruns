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
 <table class ="table1">
  <tr>
    <th><a href="s2dlc_sa_p" class="class2">Season 2 (w/ DLC) SA Pro</a> </th>
    <th>Season 3 SASO Pro</th>
    <th>Season SA Master</th>
  </tr>
  <tr>
    <th>Season 3</th>
    <th>Maria Anders</th>
    <th>Germany</th>
  </tr>
  <tr>
    <th>Season 1</th>
    <th>Francisco Chang</th>
    <th>Mexico</th>
  </tr>
</table>
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
