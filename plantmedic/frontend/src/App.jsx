import { Navigate, Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import About from './pages/About'
import Diagnose from './pages/Diagnose'
import Diseases from './pages/Diseases'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import HelpCenter from './pages/HelpCenter'
import FAQs from './pages/FAQs'
import Community from './pages/Community'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnose" element={<Diagnose />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
