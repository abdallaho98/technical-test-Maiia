import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import fetchPharmacies from '../api/fetchers/fetchPharmacies';
import PharmacyCard from '../components/PharmacyCard';
import { Pharmacy } from '../models/Pharmacy';
import { RootStackParamList } from '../navigation/StackParams';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Details'>;
};

const Page = ({ navigation }: Props) => {
  const [data, setData] = useState<Pharmacy[]>([]);
  const [totalLoaded, setTotalLoaded] = useState(0);

  useEffect(() => {
    const response = async () => {
      const responseData = await fetchPharmacies();
      setData(responseData);
    };

    response();
  }, [setData]);

  useEffect(() => {
    setTotalLoaded(data.length);
  }, [data]);

  const renderItem = ({ item }: { item: Pharmacy }) => (
    <PharmacyCard
      pharmacy={item}
      onPress={() => {
        navigation.push('Details');
      }}
    />
  );

  return (
    <View>
      <Text>Nombre de résultat :</Text>
      <Text>{totalLoaded}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Page;
