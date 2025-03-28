import { useState } from 'react';
import { Container, Title, Text, Space, useMantineTheme } from '@mantine/core';
import Search from '../components/Search/Search';
import PrtyGalery from '../components/PrtyGalery/PrtyGalery';
import classes from './HomePage.module.css';

function HomePage() {
    const theme = useMantineTheme();
    const [searchParams, setSearchParams] = useState({
      location: '',
      radius: 10,
      minSurface: 0,
      maxPrice: 0,
    });

    const handleSearch = (params) => {
      setSearchParams(params);
    }

    return (
      <Container fluid className={classes.root}>
      <Search onSearch={handleSearch}></Search>
      <PrtyGalery searchParams={searchParams}></PrtyGalery>
      </Container> 
    );
  }
  
  export default HomePage;