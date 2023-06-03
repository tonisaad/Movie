import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  getDocumentaries,
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getUpComingMovies,
} from '../Services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';

const Home = ({navigation}) => {
  const dimensions = Dimensions.get('screen');

  const [moviesImages, setMoviesImages] = useState();
  const [pouplarMovies, setPopularMovies] = useState();
  const [popularTV, setPopularTV] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaries, setDocumentaries] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpComingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaries(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upComingMoviesData,
          popularMoviesData,
          popularTVData,
          familyMoviesData,
          documentariesData,
        ]) => {
          const moviesImagesArray = [];
          upComingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });
          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTV(popularTVData);
          setFamilyMovies(familyMoviesData);
          setDocumentaries(documentariesData);
        },
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <React.Fragment>
      {loaded && !error && (
        <ScrollView>
          {moviesImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={moviesImages}
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimensions.height / 1.5}
                autoplay={true}
                circleLoop={true}
              />
            </View>
          )}

          {pouplarMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Popular Movies'}
                content={pouplarMovies}
              />
            </View>
          )}

          {popularTV && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Popular TV Shows'}
                content={popularTV}
              />
            </View>
          )}

          {familyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Family Movies'}
                content={familyMovies}
              />
            </View>
          )}

          {documentaries && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Documentaries'}
                content={documentaries}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator />}
      {error && <Error />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
