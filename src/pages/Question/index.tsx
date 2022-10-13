import { Card, Space } from 'antd';
import { useSelector, useIntl, Helmet } from 'umi';
import Header from '@/components/Header';

const Question = function({ ...props }) {
  const settings = useSelector(state => state.settings);
  const intl = useIntl();
  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <title>{`${settings && settings.site ? settings.site.name : 'ITELLYOU , 我告诉你'}`}</title>
        {/* <meta
                    name="keywords"
                    content={intl.formatMessage({ id: 'keywords' })}
                />
                <meta
                    name="description"
                    content={intl.formatMessage({ id: 'description' })}
                /> */}
      </Helmet>
      <div>
        <Header {...props} />
      </div>
      <div className="article-detail-container"></div>
    </>
  );
};

export default Question;
