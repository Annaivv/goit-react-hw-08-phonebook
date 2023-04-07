import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { AppBar } from './AppBar/AppBar';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" />
      </Routes>
      <GlobalStyle />
    </Layout>
  );
};
