import React, { useEffect, useState } from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import PrtyCard from '../PrtyCard/PrtyCard';
import useProperties from '../../hooks/useProperties';

function PrtyGalery() {

  const { properties, error, isLoading } = useProperties();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {properties.map((property) => (
          <PrtyCard 
            key = {property.id}
            title = {property.title}
            location = {property.location}
            price = {property.price}
            currency = {property.currency}
            surface = {property.sqr_meters}
            imageUrl = {property.main_image}
             />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default PrtyGalery;