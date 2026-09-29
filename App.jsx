import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SafetyProvider } from "./context/SafetyContext";
import { PhoneFrame } from "./components/PhoneFrame";
import { TopNavbar, BottomNavbar } from "./components/Navbar";
import { EmergencyModal } from "./components/EmergencyModal";

// Pages
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { AwarenessHub } from "./pages/AwarenessHub";
import { TopicDetail } from "./pages/TopicDetail";
import { EmergencyGuides } from "./pages/EmergencyGuides";
import { Resources } from "./pages/Resources";
import { SafetyTools } from "./pages/SafetyTools";
import { Scanner } from "./pages/Scanner";
import { PrivacyCheckup } from "./pages/PrivacyCheckup";
import { Profile } from "./pages/Profile";
import { AdminDashboard } from "./pages/AdminDashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export default function App() {
  return (
    <AuthProvider>
      <SafetyProvider>
        <BrowserRouter>
          <PhoneFrame>
            <TopNavbar />
            <main style={{ flex: 1, overflowY: "auto" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/awareness" element={<AwarenessHub />} />
                <Route path="/awareness/:id" element={<TopicDetail />} />
                <Route path="/guides" element={<EmergencyGuides />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/safety" element={<SafetyTools />} />
                <Route path="/scanner" element={<Scanner />} />
                <Route path="/privacy" element={<PrivacyCheckup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <EmergencyModal />
            <BottomNavbar />
          </PhoneFrame>
        </BrowserRouter>
      </SafetyProvider>
    </AuthProvider>
  );
}
