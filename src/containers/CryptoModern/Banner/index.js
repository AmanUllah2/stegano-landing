import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import BannerWrapper, {
  BannerContent,
  DiscountLabel,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import bannerImg from 'common/assets/image/cryptoModern/nft.jpeg';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          {/* <Fade up>
            <DiscountLabel>
              <Text className="discountAmount" content="25% Discount" />
              <Text
                className="discountText"
                content="on every first project "
              />
            </DiscountLabel>
          </Fade> */}
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Welcome next level  cryptocurrency token with faster transfer"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="The next level Non-Fungible-Token norm for security and auditability
              Strengthen the link between the smart contract and the file. Solves fight rug pulls, copycats and file swaps."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <AnchorLink
                href="#fund"
                offset={81}
              >
                <Button className="primary" title="View demo" />
              </AnchorLink>
              <AnchorLink
                href="#pdf"
                offset={81}
              >
                <Button
                  className="text"
                  variant="textButton"
                  title="WHITE PAPER"
                />
              </AnchorLink>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade in delay={100}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ width: "50%" }} src="/nft.jpeg" alt="Banner" />
            </div>
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
