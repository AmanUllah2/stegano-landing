import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import FooterWrapper, { List, ListItem } from './footer.style';
import LogoImage from 'common/assets/image/cryptoModern/logonew.png';

import { Footer_Data } from 'common/data/CryptoModern';

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  function sendEmail() {
    window.location = "mailto:hello@watermark-nft.io";
  }
  return (
    <FooterWrapper id="contact">
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={LogoImage}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <Text content="hello@watermark-nft.io" {...textStyle} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input style={{ border: 0, padding: 12, height: 39, width: '75%', borderRadius: '12px 0px 0px 12px' }} placeholder='Email Us' />
              <button onClick={()=>sendEmail()} style={{ backgroundImage: 'linear-gradient(to right,#4ba1d8,#4464bd 95%)', height: 39, border: 0, borderRadius: '0px 12px 12px 0px', cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: 8, paddingLeft: 5, padding: 5 }} className="icon icon-tabler icon-tabler-send" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                  <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
              </button>
            </div>
            {/* <Text content="+33-695-418-225" {...textStyle} /> */}
          </Box>
          {/* End of footer logo column */}

          {/* End of footer List column */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px',
  },
  // Default logo size
  logoStyle: {
    width: '120px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#8ec7ff',
    fontSize: '16px',
    mb: '10px',
    fontWeight: '300',
  },
};

export default Footer;
