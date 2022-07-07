import React from 'react';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  ImageWrapper,
} from './mapSection.style';



const MapSection = () => {
  return (
    <SectionWrapper id="map">
      <Container width="1200px">
        <SectionHeader>
          <Heading content="More than 3 Billion worldwide use" />
          <Text content="Cryptographically chained ownership metadata over time. Every new owner’s metadata is forever embedded in the file and the Smart Contract. Each ownership iteration is linked to the previous one by mimicking the original blockchain concept. The ownership metadata at a given iteration is embedded into the file using a steganography algorithm. The steganography hash is used as a link for the next iteration." />
        </SectionHeader>
      </Container>
    </SectionWrapper>
  );
};


export default MapSection;
