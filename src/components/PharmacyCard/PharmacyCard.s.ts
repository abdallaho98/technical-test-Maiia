import styled from 'styled-components/native';
import { Image } from 'react-native';

export const CardContainer = styled.TouchableOpacity<{ height?: number }>`
  background-color: ${(props) => props.theme.colors.cardBackground};
  ${(props) => props.height && `height: ${props.height}px;`}
`;

export const CustomImage = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: ${(props) => props.theme.dimensions.general}px;
  background-color: ${(props) => props.theme.colors.grey};
`;

export const ContainerRef = styled.View`
  border-radius: ${(props) => props.theme.dimensions.space}px;
  background-color: ${(props) => props.theme.colors.white};
  margin-left: ${(props) => props.theme.dimensions.general}px;
  margin-right: ${(props) => props.theme.dimensions.general}px;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.dimensions.space}px;
  margin-top: ${(props) => props.theme.dimensions.space}px;
`;

export const UpperContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: ${(props) => props.theme.dimensions.general}px;
  margin-right: ${(props) => props.theme.dimensions.general}px;
  margin-bottom: ${(props) => props.theme.dimensions.general}px;
  margin-top: ${(props) => props.theme.dimensions.general}px;
`;

export const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const TitleText = styled.Text`
  font-family: 'SpaceMono-Regular';
  font-size: ${(props) => props.theme.font.sizes.extraSmall}px;
  color: ${(props) => props.theme.colors.primary};
`;

export const AddressText = styled.Text`
  margin-top: ${(props) => props.theme.dimensions.space / 2}px;
  font-family: 'SpaceMono-Regular';
  font-size: ${(props) => props.theme.font.sizes.TooSmall}px;
  color: ${(props) => props.theme.colors.black};
`;

export const DistanceText = styled.Text`
  margin-left: ${(props) => props.theme.dimensions.space}px;
  margin-top: ${(props) => props.theme.dimensions.space / 2}px;
  font-family: 'SpaceMono-Regular';
  font-size: ${(props) => props.theme.font.sizes.TooMuchSmall}px;
  color: ${(props) => props.theme.colors.grey};
`;

export const CustomVector = styled(Image)`
  margin-top: ${(props) => props.theme.dimensions.space / 2}px;
  width: 16px;
  height: 16px;
  tint-color: ${(props) => props.theme.colors.grey};
`;

export const HorizontalContainer = styled.View`
  flex-direction: row;
`;

export const AppointmentCard = styled.View`
  width: 64px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.dimensions.space}px;
  background-color: ${(props) => props.theme.colors.primary};
  margin-left: ${(props) => props.theme.dimensions.general}px;
`;

export const DayContainer = styled.View`
  width: 80px;
  align-items: center;
  flex-direction: column;
`;

export const DayText = styled.Text`
  font-family: 'SpaceMono-Regular';
  font-size: ${(props) => props.theme.font.sizes.TooMuchSmall}px;
  color: ${(props) => props.theme.colors.black};
`;

export const AppointmentText = styled.Text`
  font-family: 'SpaceMono-Regular';
  font-size: ${(props) => props.theme.font.sizes.TooSmall}px;
  color: ${(props) => props.theme.colors.white};
`;

export const AppointmentContainer = styled.View`
  margin-top: ${(props) => props.theme.dimensions.space}px;
  flex-direction: row;
`;
