import React, { FunctionComponent } from 'react';
import Disqus from 'disqus-react';
import './DisqusSection.scss';

interface IProps {
  articleTitle: string;
  articlesTitle: string;
}

const DisqusSection: FunctionComponent<IProps> = ({
  articleTitle,
  articlesTitle,
}) => {
  const disqusShortname = 'NoToTrip';
  const disqusConfig = {
    url: 'https://nototrip.pl',
    identifier: `${articleTitle}`,
    title: `${articlesTitle}-${articleTitle}`,
  };

  return (
    <div className="disqus">
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
};

export default DisqusSection;
