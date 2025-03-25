import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import React from 'react';
import classes from './PrtyCard.module.css';

function PrtyCard({ title, location, price, imageUrl, currency, surface}) {
  const theme = useMantineTheme();
  return (
    <Card className={classes.card}>
      <Card.Section>
        <Image
          src={imageUrl}
          className={classes.image}
          alt={title}
        />
      </Card.Section>

      <Group className={classes.group}>
        <Text fw={500}>{title}</Text>
        <Badge size='lg' color={theme.colors.ocean[5]}>{price} {currency}</Badge>
      </Group>

      <Text size='sm'>{location}</Text>
      <Text size='sm'>{surface} sqm</Text>

      <Button className={classes.button} color="blue">
        View offer
      </Button>
    </Card>
  );
}

export default PrtyCard;