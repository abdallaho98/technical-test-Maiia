import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {PharmacieJson, pharmacieMapper} from '../src/mappers/PharmacieMapper';

const URL =
  'https://www.maiia.com/api/pat-public/hcd?limit=500&locality=75001-PARIS&page=0&speciality.shortName=pharmacie';

const Page = ({}) => {
  const [data, setData] = useState<Pharmacie[]>([]);
  const [totalLoaded, setTotalLoaded] = useState(0);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        const mappedJson: Pharmacie[] = json.items.map((item: PharmacieJson) =>
          pharmacieMapper(item),
        );
        setData(mappedJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [URL]);

  useEffect(() => {
    setTotalLoaded(data.length);
  }, [data]);

  const renderItem = ({item}: {item: Pharmacie}) => <Text>{item.name}</Text>;

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
