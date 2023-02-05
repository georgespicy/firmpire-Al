import React from 'react'
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import MovieInformation from './MovieInformation/MovieInformation';
import Movies from './Movies/Movies';
// import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Actors from './Actors/Actors';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main>
        <Routes>
          <Route path='/' element={<MovieInformation />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/actors' element={<Actors />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App