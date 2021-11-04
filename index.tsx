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
 <table>
  <tr>
    <th>Season 3</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Season 2</td>
    <td><a href="s2dlc_sa_p" class="class1">SA Pro</a> </td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Season 1</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
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