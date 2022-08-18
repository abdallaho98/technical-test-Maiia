import React from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { isPharmacyOpen } from '../../businessLogic/IsPharmacyOpen';
import { Shift } from '../../models/Shift';
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

interface Agenda {
  day: string;
  times: string;
}

type Props = ReturnType<typeof mapStateToProps>;

const PharmacyDetails = ({ pharmacy }: Props) => {
  const agenda = Object.keys(pharmacy.schedule).map((key) => {
    let times = '';
    pharmacy.schedule[key].forEach((shift: Shift) => {
      times += shift.start + ' ' + shift.end + '   /   ';
    });
    return {
      day: key,
      times: times,
    } as Agenda;
  }) as Agenda[];

  const renderSpecialty = ({ item }: { item: string }) => (
    <BlocText>{item}</BlocText>
  );

  const renderAgenda = ({ item }: { item: Agenda }) => (
    <BlocText>{item.day + '   ' + item.times}</BlocText>
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
          <AddressText>
            {isPharmacyOpen(pharmacy) ? 'OPEN' : 'CLOSED'}
          </AddressText>
        </TextContainer>
      </UpperContainer>
      <BlocContainer>
        <BlocTitle>Specialités</BlocTitle>
        <FlatList
          data={pharmacy.specialties}
          renderItem={renderSpecialty}
          keyExtractor={(item) => item}
        />
      </BlocContainer>
      <BlocContainer>
        <BlocTitle>Agenda</BlocTitle>
        <FlatList
          data={agenda}
          renderItem={renderAgenda}
          keyExtractor={(item) => item.day}
        />
      </BlocContainer>
    </ViewContainer>
  );
};

const mapStateToProps = (appState: AppState) => {
  return {
    pharmacy: appState.pharmacyDetails,
  };
};

export default connect(mapStateToProps)(PharmacyDetails);
