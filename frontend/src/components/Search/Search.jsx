import React, { useState } from 'react';
import { Container, TextInput, Button, NumberInput, Group, Slider } from '@mantine/core';
import classes from './Search.module.css';

function Search() {
  const [radius, setRadius] = useState(10); // Default radius in KM

  return (
    <Container fluid className={classes.root}>
      <Group grow>
        <TextInput placeholder="Location" />
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
        <NumberInput placeholder="Min Sq Meters" />
        <NumberInput placeholder="Max Budget (€)" />
        <Button>Search</Button>
      </Group>
    </Container>
  );
}

export default Search;
