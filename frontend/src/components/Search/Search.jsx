import React, { useState } from 'react';
import { Container, TextInput, Button, NumberInput, Group, Slider } from '@mantine/core';
import classes from './Search.module.css';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [radius, setRadius] = useState(searchParams.get('radius') || 10);
  const [minSurface, setMinSurface] = useState(searchParams.get('minSurface') || undefined);
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || undefined);
  
  const handleSearchClick = () => {
    const params = {};

    if (location) params.location = location;
    if (radius) params.radius = radius;
    if (minSurface) params.minSurface = minSurface;
    if (maxPrice) params.maxPrice = maxPrice;
    
    setSearchParams(params);
  };

  return (
    <Container fluid className={classes.root}>
      <Group grow>
        <TextInput 
        placeholder="Location"
        value={location}
        onChange={(event) => setLocation(event.currentTarget.value)}
        />
        <div style={{ width: 200 }}>
          <Slider
            value={radius}
            onChange={setRadius}
            min={1}
            max={50}
            step={1}
            label={(value) => `${value} km`}
          />
        </div>
        <NumberInput 
        placeholder="Min Sq Meters" 
        value={minSurface}
        onChange={(value) => setMinSurface(value)}  
        />
        <NumberInput 
        placeholder="Max Budget (€)" 
        value={maxPrice}
        onChange={(value) => setMaxPrice(value)}
        />
        <Button onClick={handleSearchClick}>Search</Button>
      </Group>
    </Container>
  );
}

export default Search;
