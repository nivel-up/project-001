import React from 'react';
import { AppShell, Group, Text, Burger, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';

function Header() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        {/* Logo or Brand Name */}
        <Text size="xl" fw={700} component={Link} to="/" c={theme.colors.blue[6]}>
          LocaLoco
        </Text>

        {/* Navigation Links (Desktop) */}
        <Group visibleFrom="sm">
          <Text component={Link} to="/" c={theme.colors.gray[7]}>
            Home
          </Text>
          <Text component={Link} to="/about" c={theme.colors.gray[7]}>
            About
          </Text>
          <Text component={Link} to="/user-profile" c={theme.colors.gray[7]}>
            Profile
          </Text>
        </Group>

        {/* Hamburger Menu (Mobile) */}
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          color={theme.colors.gray[6]}
        />
      </Group>

      {/* Mobile Navigation Menu */}
      {opened && (
        <Group p="md" hiddenFrom="sm" direction="column" align="flex-start">
          <Text component={Link} to="/" c={theme.colors.gray[7]}>
            Home
          </Text>
          <Text component={Link} to="/about" c={theme.colors.gray[7]}>
            About
          </Text>
          <Text component={Link} to="/user-profile" c={theme.colors.gray[7]}>
            Profile
          </Text>
        </Group>
      )}
    </AppShell.Header>
  );
}

export default Header;