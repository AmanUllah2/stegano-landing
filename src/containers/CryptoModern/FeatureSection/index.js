import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import { Features } from 'common/data/CryptoModern';
import Container from 'common/components/UI/Container';
import FundGraphImg from 'common/assets/image/cryptoModern/GifOwnershipChain.gif';
import FeatureSectionWrapper from './featureSection.style';
import NextImage from 'common/components/NextImage';

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <FeatureSectionWrapper id="key-features">
      <Container>
        <Box {...sectionHeader} className="sectionHeader">
          <Text content="Steganography algorithm" {...sectionSubTitle} />
          <Heading
            content="Steganography is the practice of concealing a message within another message or a physical object. In computing/electronic contexts, a computer file, message, image, or video is concealed within another file, message, image, or video. Steganography algorithms are used by Intelligence agencies are quite popular for digital  watermarking"
            {...sectionTitle}
          />
          <Heading
            content="Our steganography algorithm is an algorithm that hides well the data and is not
            detected easily by the human eye, just like a good watermark does. It is not because we want
            to “hide” the data strictly speaking but because we do not want to deteriorate the visual
            artistic creation. By “hiding” the steganography meta-data correctly we will keep the same
            image quality as the original one."
            {...sectionTitle}
          />
        </Box>
        <div className="image" style={{display: 'flex', justifyContent:'center', marginBottom: 40}}>
          <NextImage src={FundGraphImg} alt="Graph Image" />
        </div>
        <Box className="row" {...row}>
          {Features.map((feature, index) => (
            <Box className="col" {...col} key={index}>
              <FeatureBlock
                icon={<img src={feature?.icon?.src} />}
                wrapperStyle={blockWrapperStyle}
                contentStyle={contentStyle}
                title={<Heading content={feature.title} {...featureTitle} />}
                description={
                  <Text content={feature.description} {...featureDescription} />
                }
                className="cryptoFeature"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '40px', '40px', '80px'],
    display: 'flex',
    width: '100%',
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: ['30px', '40px'],
    fontWeight: '300',
    letterSpacing: '-0.025em',
    color: '#fff',
    mb: '15px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['14px', '16px'],
    fontWeight: '400',
    color: '#496b96',
    mb: '0',
    marginTop: '20px',
    maxWidth: '80%',
    lineHeight: '1.5',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 4, 1 / 4],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },

  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '15px'],
    letterSpacing: '-0.025em',
    mt: ['15px', '15px', '15px', '25px'],
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'rgba(142, 199, 255, 0.502)',
  },
};

export default FeatureSection;
