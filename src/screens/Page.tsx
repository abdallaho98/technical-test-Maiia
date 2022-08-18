import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import fetchPharmacies from '../api/fetchers/fetchPharmacies';
import PharmacyCard from '../components/PharmacyCard';
import { Pharmacy } from '../models/Pharmacy';
import { RootStackParamList } from '../navigation/StackParams';
import { ThunkDispatchType } from '../redux/types';
import operations from '../redux/operations';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import theme from '../theme/theme';

type OwnProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Details'>;
};

type ConnectedProps = ReturnType<typeof mapDispatchToProps>;

type Props = OwnProps & ConnectedProps;

const Page = ({ navigation, onUpdatePharmacy }: Props) => {
  const [data, setData] = useState<Pharmacy[]>([]);
  const [totalLoaded, setTotalLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const response = async () => {
      const responseData = await fetchPharmacies();
      setData(responseData);
    };

    setIsLoading(true);
    response();
    setIsLoading(false);
  }, [setData]);

  useEffect(() => {
    setTotalLoaded(data.length);
  }, [data]);

  const renderItem = ({ item }: { item: Pharmacy }) => (
    <PharmacyCard
      pharmacy={item}
      onPress={() => {
        onUpdatePharmacy(item);
        navigation.push('Details');
      }}
    />
  );

  return (
    <View>
      <Text>Nombre de résultat :</Text>
      <Text>{totalLoaded}</Text>
      {isLoading ? (
        <Loader color={theme.colors.primary} size={'large'} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
