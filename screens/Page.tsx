import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import fetchPharmacies from '../src/api/fetchers/fetchPharmacies';
import PharmacyCard from '../src/components/PharmacyCard';
import { Pharmacy } from '../src/models/Pharmacy';

const Page = ({}) => {
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
    <PharmacyCard pharmacy={item} onPress={() => {}} />
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
