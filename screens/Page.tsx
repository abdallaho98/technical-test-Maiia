import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

const URL =
  'https://www.maiia.com/api/pat-public/hcd?limit=500&locality=75001-PARIS&page=0&speciality.shortName=pharmacie';

const Page = ({}) => {
  const [data, setData] = useState([]);
  const [totalLoaded, setTotalLoaded] = useState(0);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [URL]);

  useEffect(() => {
    setTotalLoaded(data.length);
  }, [data]);

  const renderItem = ({item}) => <Text>{item.center.name}</Text>;

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
