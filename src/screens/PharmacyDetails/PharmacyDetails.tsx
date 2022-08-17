import React from 'react';
import { connect } from 'react-redux';
import AppState from '../../redux/types';
import {
  AddressText,
  CustomImage,
  TextContainer,
  TitleText,
  UpperContainer,
  ViewContainer,
} from './PharmacyDetails.s';

type Props = ReturnType<typeof mapStateToProps>;

const PharmacyDetails = ({ pharmacy }: Props) => {
  return (
    <ViewContainer>
      <UpperContainer>
        <CustomImage
          source={{
            uri: pharmacy.image,
          }}
        />
        <TextContainer>
          <TitleText>{pharmacy.name}</TitleText>
          <AddressText>{pharmacy.address}</AddressText>
        </TextContainer>
      </UpperContainer>
    </ViewContainer>
  );
};

const mapStateToProps = (appState: AppState) => {
  return {
    pharmacy: appState.pharmacyDetails,
  };
};

export default connect(mapStateToProps)(PharmacyDetails);
