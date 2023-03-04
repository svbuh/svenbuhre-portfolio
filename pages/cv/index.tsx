import { Timeline } from "flowbite-react";
import type { NextPage } from "next";
import { sanityClient } from "../../sanity";

interface CvDocument {
  cvItems: [CvItem];
}

interface CvItem {
  title: string;
  timePeriod: string;
  jobTitle: string;
  jobDescription: string;
}

interface Props {
  cv: [CvDocument];
}

const CV: NextPage<Props> = ({ cv }: Props) => {
  const cvItems = cv[0].cvItems;

  return (
    <>
      <div>
        <div className="max-w-xl mx-auto p-6">
          <Timeline>
            {cvItems.map((item: CvItem, index) => (
              <Timeline.Item key={index}>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>{item.timePeriod}</Timeline.Time>
                  <Timeline.Title>{item.jobTitle}</Timeline.Title>
                  <Timeline.Body>{item.jobDescription}</Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type == "cv"]{
    cvItems[]->{
      title,
      timePeriod,
      jobTitle,
      jobDescription
    }
  }`;
  const cv = await sanityClient.fetch(query);
  return {
    props: {
      cv,
    },
  };
};

export default CV;
