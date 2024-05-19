import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { movieCastDetails, movieDetails } from '../api/apicalls'

const getMovieDetails = async (movieid :number)=>{
  try{
    let response = await fetch(movieDetails(movieid))
    let json = await response.json();
    return json;
}catch{
  console.log('something wrong in getmovoies funqtion ')
}
}


const getMovieCastDetails = async (movieid :number)=>{
  try{
    let response = await fetch(movieCastDetails(movieid))
    let json = await response.json();
    return json;
}catch{
  console.log('something wrong in getcastmovoies funqtion ')
}
}

const MovieDetailsScreen = ({navigation,route}:any) => {
  const [movieData, setMoviedata]= useState(undefined);
  const [movieCastDat, setMovieCastData]= useState<any>(undefined);
  useEffect(()=>{
    (async () => {
      const  tempMovieData = await getMovieDetails(route.params.movievd);
      setMoviedata(tempMovieData)
    })();
    (async () => {
      const  tempMovieData = await getMovieDetails(route.params.movievd);
      setMoviedata(tempMovieData)
    })();

  },[])
  return (
    <View>
      <Text>MovieDetailsScreen</Text>
    </View>
  )
}

export default MovieDetailsScreen

const styles = StyleSheet.create({})