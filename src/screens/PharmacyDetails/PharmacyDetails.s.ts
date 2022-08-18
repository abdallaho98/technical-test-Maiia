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

export const StatusContainer = styled.View<{ isOpen: boolean }>`
  border-width: 2px;
  border-radius: 40px;
  border-color: ${(props) =>
    props.isOpen ? props.theme.colors.success : props.theme.colors.error};
  background-color: ${(props) => props.theme.colors.white};
  margin-top: ${(props) => props.theme.dimensions.space}px;
  align-items: center;
`;

export const StatusText = styled.Text<{ isOpen: boolean }>`
  font-family: 'SpaceMono-Regular';
  font-size: ${(props) => props.theme.font.sizes.extraSmall}px;
  color: ${(props) =>
    props.isOpen ? props.theme.colors.success : props.theme.colors.error};
`;

export const BlocContainer = styled.View`
  border-radius: ${(props) => props.theme.dimensions.space}px;
  flex: 1;
  flex-direction: column;
  height: 200px;
  background-color: ${(props) => props.theme.colors.white};
  margin-left: ${(props) => props.theme.dimensions.general}px;
  margin-right: ${(props) => props.theme.dimensions.general}px;
  margin-bottom: ${(props) => props.theme.dimensions.general}px;
  margin-top: ${(props) => props.theme.dimensions.general}px;
  padding-left: ${(props) => props.theme.dimensions.space}px;
  padding-right: ${(props) => props.theme.dimensions.space}px;
  padding-bottom: ${(props) => props.theme.dimensions.space}px;
  padding-top: ${(props) => props.theme.dimensions.space}px;
`;

export const BlocTitle = styled.Text`
  font-weight: 900;
  font-size: ${(props) => props.theme.font.sizes.small}px;
  color: ${(props) => props.theme.colors.black};
`;

export const BlocText = styled.Text`
  font-size: ${(props) => props.theme.font.sizes.extraSmall}px;
  color: ${(props) => props.theme.colors.black};
`;
