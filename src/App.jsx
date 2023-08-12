import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import ResendCode from "./pages/ResendCode";
import Detail from "./components/Detail";
import LoginGuard from "./components/LoginGuard";
import ForgotCode from "./pages/ForgotCode";
import RouteGuard from "./components/RouteGuard";
import ErrorPage from "./components/ErrorPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <LoginGuard>
              <Home />
            </LoginGuard>
          }
        />
        <Route
          path="/register"
          element={
            <RouteGuard>
              <Register />
            </RouteGuard>
          }
        />
        <Route
          path="/login"
          element={
            <RouteGuard>
              <Login />
            </RouteGuard>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <RouteGuard>
              <ForgotPassword />
            </RouteGuard>
          }
        />
        <Route
          path="/forgot-code"
          element={
            <RouteGuard>
              <ForgotCode />
            </RouteGuard>
          }
        />
        <Route
          path="/verify-email"
          element={
            <RouteGuard>
              <VerifyEmail />
            </RouteGuard>
          }
        />
        <Route
          path="/reset"
          element={
            <RouteGuard>
              <ResetPassword />
            </RouteGuard>
          }
        />
        <Route
          path="/resend"
          element={
            <RouteGuard>
              <ResendCode />
            </RouteGuard>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <LoginGuard>
              <Detail />
            </LoginGuard>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
