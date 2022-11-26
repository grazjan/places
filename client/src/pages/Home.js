import { Box, CircularProgress, Container, Grid } from '@mui/material'
import { useEffect } from 'react';
import Card from '../components/Card/Card'
import ErrorHandler from '../components/ErrorHandler/ErrorHandler';

import { useGetPlacesQuery, useLazyGetPlacesQuery } from '../features/apiSlice'

const Home = () => {

  const [ 
    fetchPlaces,
    {data: places,
    isLoading,
    isSuccess,
    isError
    }
    ] = useLazyGetPlacesQuery();

   useEffect(() => {
    fetchPlaces()
  }, [])

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>

        {isLoading && 
          <Grid item xs={12} textAlign="center">
            <CircularProgress color="primary" />
          </Grid>
        }

        {isError && 
          <Grid item xs={12} textAlign="center">
            <ErrorHandler callback={fetchPlaces}/>
          </Grid>
        }
        

        {isSuccess && places.map(place => (
              <Grid item xs={6} key={place._id}>
                  <Card item={place} />
              </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default Home