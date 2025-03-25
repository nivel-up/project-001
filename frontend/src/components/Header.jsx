import React from 'react';
import { AppShell, Group, Text, Burger, Drawer, Stack, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';

function Header() {
  const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure(false);

  // Navigation items array
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/user-profile', label: 'Profile' },
    { to: '/user-profile', label: 'Landlord Portal' }
  ];

  return (
    <AppShell.Header 
    style={{
      backgroundColor: theme.colors.ocean[1],
    }}>
      <Group h="100%" px="md" justify="space-between">
        <Text size="xl" fw={700} component={Link} to="/" c={theme.colors.black[1]}>
          LocaLoco
        </Text>

        <Group visibleFrom="sm">
          {navItems.map(({ to, label }) => (
            <Text key={to} component={Link} to={to} 
              sx={{
              '&:hover': {
                transform: 'translateY(-2px)',
                color: '#eee',
              },
            }}>
              {label}
            </Text>
          ))}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          color={theme.colors.ocean[7]}
        />
      </Group>

      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        padding="md"
        size="sm"
        position="right"
        overlayProps={{ opacity: 0.5}}
        withCloseButton
        styles={{
          root: { position: 'fixed', zIndex: 1000 },
          drawer: { background: 'white' },
          body: { padding: '1rem' },
        }}
      >
        <Stack spacing="xl">
          {navItems.map(({ to, label }) => (
            <Text
              key={to}
              component={Link}
              to={to}
              size="lg"
              fw={500}
              c="dark"
              onClick={() => close()}
            >
              {label}
            </Text>
          ))}
        </Stack>
      </Drawer>
    </AppShell.Header>
  );
}

export default Header;