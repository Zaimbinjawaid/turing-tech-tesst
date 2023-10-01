import React from 'react';
import URL from './ApplicationUrls';

const LandingDashboard = React.lazy(() => import('../components/Pages/LandingDashboard'));

const ROUTES = [
  { path: URL.TURING_TECH_FE_TEST.ALL, component: LandingDashboard },

];

export default ROUTES;