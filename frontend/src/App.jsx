import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider, AppShell } from '@mantine/core'; 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import UserProfilePage from './pages/UserProfilePage';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import { theme } from './theme/theme';

function App() {
  return (
    <MantineProvider theme={theme} >
      <Router>
      <AppShell 
      header={{ height: 80 }} 
      styles={() => ({
        main: { marginTop: '50px' },
      })}>
          <AppShell.Header>
            <Header/>
          </AppShell.Header>
          <AppShell.Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/user-profile" element={<UserProfilePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </Router>
    </MantineProvider>
  );
}

export default App;

