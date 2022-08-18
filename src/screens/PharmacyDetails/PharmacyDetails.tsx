import React from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import AppState from '../../redux/types';
import {
  AddressText,
  BlocContainer,
  BlocText,
  BlocTitle,
  CustomImage,
  TextContainer,
  TitleText,
  UpperContainer,
  ViewContainer,
} from './PharmacyDetails.s';

type Props = ReturnType<typeof mapStateToProps>;

const PharmacyDetails = ({ pharmacy }: Props) => {
  const renderItem = ({ item }: { item: string }) => (
    <BlocText>{item}</BlocText>
  );

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
      <BlocContainer>
        <BlocTitle>Specialités</BlocTitle>
        <FlatList
          data={pharmacy.specialties}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </BlocContainer>
      <BlocContainer />
    </ViewContainer>
  );
};

const mapStateToProps = (appState: AppState) => {
  return {
    pharmacy: appState.pharmacyDetails,
  };
};

export default connect(mapStateToProps)(PharmacyDetails);
