import React from 'react';
import { Pharmacy } from '../../models/Pharmacy';
import {
  AddressText,
  CustomImage,
  TextContainer,
  TitleText,
  UpperContainer,
  ViewContainer,
} from './PharmacyDetails.s';

type Props = {
  pharmacy: Pharmacy;
};

const PharmacyDetails = ({}: Props) => {
  return (
    <ViewContainer>
      <UpperContainer>
        <CustomImage source={require('../../../assets/images/icon.png')} />
        <TextContainer>
          <TitleText>Here Name</TitleText>
          <AddressText>Here Address</AddressText>
        </TextContainer>
      </UpperContainer>
    </ViewContainer>
  );
};

export default PharmacyDetails;
