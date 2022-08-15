import React, { useMemo } from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { doc } from '../constants/doc';

const makeStyles = (theme) =>
  StyleSheet.create({
    container: {
      padding: theme.dimensions.space,
    },
    title: {
      fontWeight: 'bold',
      fontSize: theme.font.sizes.title,
      textAlign: 'center',
      color: theme.colors.secondary,
      marginVertical: theme.dimensions.general,
    },
    subtitle: {
      fontWeight: '400',
      fontSize: theme.font.sizes.medium,
      textAlign: 'center',
      color: theme.colors.secondary,
      marginVertical: theme.dimensions.general,
    },
    text: {
      marginBottom: theme.dimensions.general,
      color: theme.colors.input.text,
      fontSize: theme.font.sizes.small,
    },
    image: {
      width: '100%',
    },
  });

const Home = () => {
  const theme = useTheme();
  const s = useMemo(() => makeStyles(theme), [theme]);

  return (
    <ScrollView style={s.container}>
      <Text style={s.title}>{doc.greeting}</Text>
      <Text style={s.subtitle}>{doc.description}</Text>
      <Text style={s.text}>{doc.info_1}</Text>
      <Text style={s.text}>{doc.info_2}</Text>
      <Image
        style={s.image}
        source={require('../assets/images/card-ui.png')}
        resizeMode="contain"
      />
      <Text style={s.text}>{doc.info_3}</Text>
      <Text style={s.text}>{doc.info_4}</Text>
      <Text style={s.text}>{doc.info_5}</Text>
      <Text style={s.text}>{doc.nb}</Text>
      <Text style={s.subtitle}>{doc.bonus}</Text>
      <Text style={[s.text, { marginBottom: 100 }]}>{doc.bonus_q}</Text>
    </ScrollView>
  );
};

export default Home;
