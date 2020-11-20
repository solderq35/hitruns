import { GetStaticProps } from 'next';

import { getGuidesPreviews } from '../lib/guides';
import { GuidePreview } from '../interfaces';
import Layout from '../components/Layout';
import GuideList from '../components/GuideList';

type Props = {
  guidePreviews: GuidePreview[];
};

const GuidesPage = ({ guidePreviews }: Props): JSX.Element => {
  return (
    <Layout title="Guides | HobbitSpeedruns" headerText="guides">
      <GuideList guides={guidePreviews}></GuideList>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const guidePreviews: GuidePreview[] = getGuidesPreviews();
  return { props: { guidePreviews } };
};

export default GuidesPage;
