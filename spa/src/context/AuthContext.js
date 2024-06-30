import React, { createContext, useContext, useState, useEffect } from 'react';
import { userLogged } from '../services/user';
import { signin } from '../services/user';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children, initialUser }) => {
  const [user, setUser] = useState(initialUser);
  
  async function getUserLogged() {
    try {
      const userResponse = await userLogged();
      setUser(userResponse.data);
    } catch (error) {
      console.log('Erro ao obter usuário logado:', error);
      setUser(null);
    }
  }

  useEffect(() => {
    validateToken();
    getUserLogged();
  }, []);

  function validateToken() {
    const token = Cookies.get('token');
    // Implemente a lógica necessária para validar o token
    // Se o token não for válido, pode redirecionar o usuário para o login
    // Por exemplo: if (!token) history.push('/signin');
  }

  const login = async (formData) => {
    try {
      const token = await signin(formData);
      Cookies.set('token', token.data, { expires: 1 });
      getUserLogged();
    } catch (error) {
      console.log('Erro ao fazer login:', error.message);
      throw error;
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
  };

  const authContextValue = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
