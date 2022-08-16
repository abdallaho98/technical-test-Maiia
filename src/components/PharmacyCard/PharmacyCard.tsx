import React from 'react';
import { Pharmacy } from '../../models/Pharmacy';
import {
  CardContainer,
  TitleText,
  CustomImage,
  ContainerRef,
  UpperContainer,
  TextContainer,
  DescriptionText,
} from './PharmacyCard.s';

type Props = {
  pharmacy: Pharmacy;
  onPress: () => void;
};

const PharmacyCard = ({ pharmacy, onPress }: Props) => {
  return (
    <CardContainer height={160}>
      <ContainerRef onPress={() => onPress()}>
        <UpperContainer>
          <CustomImage
            source={{
              uri: `data:image/jpeg;base64,`,
            }}
          />
          <TextContainer>
            <TitleText numberOfLines={1}>{pharmacy.name}</TitleText>
            <DescriptionText numberOfLines={1}>Hello</DescriptionText>
          </TextContainer>
        </UpperContainer>
      </ContainerRef>
    </CardContainer>
  );
};

export default PharmacyCard;
