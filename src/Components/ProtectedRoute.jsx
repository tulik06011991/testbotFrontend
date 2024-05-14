import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element, redirectTo, ...props }) => {
  // Foydalanuvchi roli tekshirilishi mumkin, agar foydalanuvchi mavjud bo'lmasa "/" sahifaga otib qolish
  const isLoggedIn = /* Foydalanuvchi mavjudligini tekshirish */ false;

  return (
    <Route
      {...props}
      element={isLoggedIn ? element : <Navigate to={redirectTo} replace />}
    />
  );
};

export default ProtectedRoute;
