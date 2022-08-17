import React from 'react';
import { Pharmacy } from '../../models/Pharmacy';
import {
  CardContainer,
  TitleText,
  CustomImage,
  ContainerRef,
  UpperContainer,
  TextContainer,
  AddressText,
  HorizontalContainer,
  CustomVector,
  DistanceText,
  AppointmentContainer,
  AppointmentCard,
  AppointmentText,
  DayText,
  DayContainer,
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
              uri: pharmacy.image,
            }}
          />
          <TextContainer>
            <TitleText numberOfLines={1}>{pharmacy.name}</TitleText>
            <AddressText numberOfLines={1}>{pharmacy.address}</AddressText>
            <HorizontalContainer>
              <CustomVector
                source={require('../../../assets/images/map-marker.png')}
              />
              <DistanceText>Hello</DistanceText>
            </HorizontalContainer>
          </TextContainer>
        </UpperContainer>
        <UpperContainer>
          <AppointmentContainer>
            <DayContainer>
              <TitleText>Lun</TitleText>
              <DayText>13/09</DayText>
            </DayContainer>
            <AppointmentCard>
              <AppointmentText>9:30</AppointmentText>
            </AppointmentCard>
            <AppointmentCard>
              <AppointmentText>10:30</AppointmentText>
            </AppointmentCard>
            <AppointmentCard>
              <AppointmentText>11:30</AppointmentText>
            </AppointmentCard>
          </AppointmentContainer>
        </UpperContainer>
      </ContainerRef>
    </CardContainer>
  );
};

export default PharmacyCard;
