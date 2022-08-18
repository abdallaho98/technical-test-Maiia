import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import fetchPharmacies from '../../api/fetchers/fetchPharmacies';
import PharmacyCard from '../../components/PharmacyCard';
import { Pharmacy } from '../../models/Pharmacy';
import { RootStackParamList } from '../../navigation/StackParams';
import { ThunkDispatchType } from '../../redux/types';
import operations from '../../redux/operations';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import theme from '../../theme/theme';
import { Container, ContainerMore, LoadMoreText } from './Page.s';

type OwnProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Details'>;
};

type ConnectedProps = ReturnType<typeof mapDispatchToProps>;

type Props = OwnProps & ConnectedProps;

const Page = ({ navigation, onUpdatePharmacy }: Props) => {
  const [data, setData] = useState<Pharmacy[]>([]);
  const [totalLoaded, setTotalLoaded] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [dataOffset, setDataOffset] = useState<Pharmacy[]>([]);
  const [totalData, setTotalData] = useState<number>(0);
  const [isMaxLoaded, setIsMaxLoaded] = useState<Boolean>(false);

  useEffect(() => {
    const response = async () => {
      const responseData = await fetchPharmacies();
      setData(responseData);
      setTotalData(responseData.length);
      if (responseData.length > 10) {
        setDataOffset(responseData.slice(0, 11));
        setTotalLoaded(10);
      } else {
        setIsMaxLoaded(true);
        setDataOffset(responseData);
        setTotalLoaded(responseData.length);
      }
    };

    setIsLoading(true);
    response();
    setIsLoading(false);
  }, [setData]);

  const renderItem = ({ item }: { item: Pharmacy }) => (
    <PharmacyCard
      pharmacy={item}
      onPress={() => {
        onUpdatePharmacy(item);
        navigation.push('Details');
      }}
    />
  );

  const footer = () => {
    return !isMaxLoaded ? (
      isLoading ? (
        <Loader color={theme.colors.primary} size={'large'} />
      ) : (
        <ContainerMore
          onPress={() => {
            const nextTotal = totalLoaded + 10;
            setIsLoading(true);
            if (nextTotal < totalData) {
              setDataOffset([
                ...dataOffset,
                ...data.slice(totalLoaded + 1, nextTotal),
              ]);
              setTotalLoaded(nextTotal);
            } else {
              setDataOffset([
                ...dataOffset,
                ...data.slice(totalLoaded, totalData + 1),
              ]);
              setIsMaxLoaded(true);
              setTotalLoaded(totalData);
            }
            setIsLoading(false);
          }}>
          <LoadMoreText>More</LoadMoreText>
        </ContainerMore>
      )
    ) : (
      <Container />
    );
  };

  return (
    <View>
      <Text>Nombre de résultat :</Text>
      <Text>{totalLoaded}</Text>
      {isLoading ? (
        <Loader color={theme.colors.primary} size={'large'} />
      ) : (
        <FlatList
          data={dataOffset}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={footer}
        />
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatchType) => {
  return {
    onUpdatePharmacy: (pharmacy: Pharmacy) =>
      dispatch(operations.updatePharmacy(pharmacy)),
  };
};

export default connect(null, mapDispatchToProps)(Page);
