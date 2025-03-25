import { Container, Title, Text, Space, useMantineTheme } from '@mantine/core';
import Search from '../components/Search/Search';
import PrtyGalery from '../components/PrtyGalery/PrtyGalery';
import classes from './HomePage.module.css';

function HomePage() {
    const theme = useMantineTheme();
    return (
      <Container fluid className={classes.root}>
      <Search></Search>
      <PrtyGalery></PrtyGalery>
      </Container> 
    );
  }
  
  export default HomePage;