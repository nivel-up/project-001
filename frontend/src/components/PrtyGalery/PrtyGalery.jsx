import React, { useEffect, useState, useMemo } from 'react';
import { Container, SimpleGrid, Pagination } from '@mantine/core';
import PrtyCard from '../PrtyCard/PrtyCard';
import useProperties from '../../hooks/useProperties';
import { useSearchParams} from 'react-router-dom';

function PrtyGalery() {
  const [searchParams] = useSearchParams();

  const location = searchParams.get('location');
  const radius = searchParams.get('radius');
  const minSurface = searchParams.get('minSurface');
  const maxPrice = searchParams.get('maxPrice');
  const maxResults = searchParams.get('maxResults') || 20;
  const pageNumer = searchParams.get('page') || 1;

  const paramObj = useMemo(() => ({
    location, radius, minSurface, maxPrice, maxResults, pageNumer,
  }), [location, radius, minSurface, maxPrice, maxResults, pageNumer]);

  const { properties, error, isLoading } = useProperties({searchParams: paramObj});

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
      <Pagination total={10}/>
    </Container>
  );
}

export default PrtyGalery;