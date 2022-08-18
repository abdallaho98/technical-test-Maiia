import styled from 'styled-components/native';

export const ContainerMore = styled.TouchableOpacity`
  border-radius: ${(props) => props.theme.dimensions.space}px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-left: ${(props) => props.theme.dimensions.general}px;
  margin-right: ${(props) => props.theme.dimensions.general}px;
  align-items: center;
  padding-top: ${(props) => props.theme.dimensions.general}px;
  padding-bottom: ${(props) => props.theme.dimensions.general}px;
  margin-bottom: ${(props) => props.theme.dimensions.general * 4}px;
  margin-top: ${(props) => props.theme.dimensions.space}px;
`;

export const LoadMoreText = styled.Text`
  font-family: 'SpaceMono-Regular';
  font-size: ${(props) => props.theme.font.sizes.small}px;
  color: ${(props) => props.theme.colors.white};
`;

export const Container = styled.View`
  padding-bottom: ${(props) => props.theme.dimensions.general * 4}px;
`;
