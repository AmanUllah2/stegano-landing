import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/components/Accordion';
import { Icon } from 'react-icons-kit';
import { thinDown } from 'react-icons-kit/entypo/thinDown';
import { thinRight } from 'react-icons-kit/entypo/thinRight';
import FaqSectionWrapper from './faqSection.style';

import { Faq } from 'common/data/CryptoModern';

const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle,
}) => {
  return (
    <FaqSectionWrapper id="about">
      <Container>
        <div className='' style={{ marginTop: 80 }}></div>
        <Box {...sectionHeader} className="sectionHeader">
          <Text content="About Us" {...sectionSubTitle} />
        </Box>
        <div className='' style={{ display: 'flex', justifyContent: 'space-between', marginTop: 80 }}>
          <div style={{ width: "25%", height: '25%' }}>
            <a href='https://linkedin.com/' target="_blank">
              <img style={{ borderRadius: 32, cursor: 'pointer' }} src="/1.png" alt="Banner" />
            </a>
          </div>
          <div style={{ width: "25%", height: '25%' }}>
            <a href='https://linkedin.com/' target="_blank">
              <img style={{ borderRadius: 32, cursor: 'pointer' }} src="/2.png" alt="Banner" />
            </a>
          </div>
          <div style={{ width: "25%", height: '25%' }}>
            <a href='https://linkedin.com/' target="_blank">
              <img style={{ borderRadius: 32, cursor: 'pointer' }} src="/3.png" alt="Banner" />
            </a>
          </div>
        </div>
      </Container>
    </FaqSectionWrapper>
  );
};

// FaqSection style props
FaqSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
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
    maxWidth: '420px',
    lineHeight: '1.5',
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '17px'],
    fontWeight: '400',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#496b96',
    lineHeight: '1.75',
    mb: '0',
  },
};

export default FaqSection;
