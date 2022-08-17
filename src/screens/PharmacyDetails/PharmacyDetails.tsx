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
} from './PharmacyDetails.s';

type Props = {
  pharmacy: Pharmacy;
  onPress: () => void;
};

const PharmacyDetails = ({ pharmacy, onPress }: Props) => {
  return (
    <>
      <TitleText>Hello</TitleText>
    </>
  );
};

export default PharmacyDetails;
