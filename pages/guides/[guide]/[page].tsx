import { GetStaticPaths, GetStaticProps } from 'next';
import { Context } from 'vm';
import ReactMarkdown from 'react-markdown';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

import Layout from '../../../components/Layout';
import { getAllGuidePaths, getGuideData } from '../../../lib/guides';
import { GuideData } from '../../../interfaces';

type Props = {
  data: GuideData;
};

const Guide = ({ data }: Props): JSX.Element => {
  return (
    <Layout title={`${data.browserTitle} - ${data.header} | HobbitSpeedruns`} headerText={data.header.toLowerCase()}>
      <Row>
        {data.pages.length > 1 && (
          <Col md="auto" sm={12}>
            {data.pages.map((page, i) => (
              <Row key={i}>
                <Col>
                  <Link href={`../${page.guidePath.replace('.md', '')}`}>{page.header}</Link>
                </Col>
              </Row>
            ))}
          </Col>
        )}
        <Col>
          <ReactMarkdown>{data.content}</ReactMarkdown>
        </Col>
      </Row>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = getAllGuidePaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Context) => {
  const data: GuideData = getGuideData(params.guide, params.page);
  return { props: { data } };
};

export default Guide;
