import styled from 'styled-components/native';
import { View, Image } from 'react-native';

export const CardContainer = styled(View)<{ height?: number }>`
  background-color: ${(props) => props.theme.colors.cardBackground};
  ${(props) => props.height && `height: ${props.height}px;`}
`;

export const CustomImage = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: ${(props) => props.theme.dimensions.general}px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const ContainerRef = styled.TouchableOpacity`
  border-radius: ${(props) => props.theme.dimensions.space}px;
  background-color: ${(props) => props.theme.colors.white};
  margin-left: ${(props) => props.theme.dimensions.general}px;
  margin-right: ${(props) => props.theme.dimensions.general}px;
  flex: 1;
  flex-direction: row;
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

export const DescriptionText = styled.Text`
  font-family: 'SpaceMono-Regular';
  font-size: ${(props) => props.theme.font.sizes.TooSmall}px;
  color: ${(props) => props.theme.colors.black};
`;
