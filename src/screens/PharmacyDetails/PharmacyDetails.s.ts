import styled from 'styled-components/native';
import { View, Image } from 'react-native';

export const ViewContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.primary};
  flex: 1;
  flex-direction: column;
`;

export const UpperContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: ${(props) => props.theme.dimensions.general}px;
  margin-right: ${(props) => props.theme.dimensions.general}px;
  margin-bottom: ${(props) => props.theme.dimensions.general}px;
  margin-top: ${(props) => props.theme.dimensions.general}px;
`;

export const CustomImage = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-right: ${(props) => props.theme.dimensions.general}px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const TitleText = styled.Text`
  background-color: ${(props) => props.theme.colors.white};
  font-family: 'SpaceMono-Regular';
  font-size: ${(props) => props.theme.font.sizes.small}px;
  color: ${(props) => props.theme.colors.primary};
`;

export const AddressText = styled.Text`
  background-color: ${(props) => props.theme.colors.white};
  margin-top: ${(props) => props.theme.dimensions.space}px;
  font-family: 'SpaceMono-Regular';
  font-size: ${(props) => props.theme.font.sizes.extraSmall}px;
  color: ${(props) => props.theme.colors.black};
`;
