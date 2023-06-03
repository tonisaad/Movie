import React, {useEffect, useState} from 'react';
import VideoPlayer from 'react-native-video-controls';
import {
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  View,
  Modal,
  Pressable,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';

import {getMovie} from '../Services/services';
import {ScrollView} from 'react-native-gesture-handler';
import PlayButton from '../components/PlayButton';

const placeholderImage = require('../assets/images/placeholder.png');

const height = Dimensions.get('screen').height;

const Detail = ({route, navigation}) => {
  const movieId = route.params.movieId;

  const [movieDetail, setMovieDetail] = useState();

  const [loaded, setLoaded] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  const videoShown = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <React.Fragment>
      {loaded && (
        <View>
          <ScrollView>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={
                movieDetail.poster_path
                  ? {
                      uri:
                        'https://image.tmdb.org/t/p/w500' +
                        movieDetail.poster_path,
                    }
                  : placeholderImage
              }
            />
            <View style={styles.container}>
              <View style={styles.PlayButton}>
                <PlayButton handlePress={videoShown} />
              </View>
              <Text style={styles.movieTitle}>{movieDetail.title}</Text>

              {movieDetail.genres && (
                <View style={styles.genreContainer}>
                  {movieDetail.genres.map(genre => {
                    return (
                      <Text style={styles.genre} key={genre.id}>
                        {genre.name}{' '}
                      </Text>
                    );
                  })}
                </View>
              )}
              <StarRating
                disabled={true}
                maxStars={5}
                rating={movieDetail.vote_average / 2}
                fullStarColor={'gold'}
                starSize={30}
              />
              <Text style={styles.overview}>{movieDetail.overview}</Text>

              <Text style={styles.releasedate}>
                {'Release date: ' +
                  dateFormat(movieDetail.release_date, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </ScrollView>

          <Modal animationType="slide" visible={modalVisible}>
            <View style={styles.VideoModal}>
              <Pressable onPress={() => videoShown()}>
                <Text>{'Hide Model'}</Text>
              </Pressable>
            </View>
          </Modal>
        </View>
      )}
      {!loaded && <ActivityIndicator size="large" />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    height: height / 2.5,
    borderRadius: 20,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  genreContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  genre: {
    marginRight: 5,
    fontWeight: 'bold',
  },
  overview: {
    padding: 15,
  },
  releasedate: {
    fontWeight: 'bold',
  },
  PlayButton: {
    position: 'absolute',
    top: -20,
    right: 20,
  },
  VideoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Detail;
