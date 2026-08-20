import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'
import { ScrollToHash } from '@components/layout/ScrollToHash'
import { HomePage } from '@components/home/HomePage'
import { ContactPage } from '@components/contact/ContactPage'
import { TestimonialsPage } from '@components/testimonials/TestimonialsPage'
import { InsightsPage } from '@components/insights/InsightsPage'
import { AboutPage } from '@components/about/AboutPage'
import { TeamPage } from '@components/team/TeamPage'
import { CareersPage } from './components/careers/CareersPage'
import { PhilosophyPage } from './components/philosophy/PhilosophyPage'
import { ServicesPage } from './components/services/ServicesPage'
import { paths } from './constants/paths'
import { IndustriesPage } from './components/industries/IndustriesPage'
import { useDisableContextMenu } from './hooks/useDisableContextMenu'

function App() {
    useDisableContextMenu()
    
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path={paths.homeIndex} element={<HomePage />} />
            <Route path={paths.services} element={<ServicesPage />} />
            
            <Route path={paths.industries} element={<IndustriesPage />} />
            <Route path={paths.contact} element={<ContactPage />} />
            <Route path={paths.testimonials} element={<TestimonialsPage />} />
            <Route path={paths.insights} element={<InsightsPage />} />
            <Route path={paths.about} element={<AboutPage />} />
            <Route path={paths.team} element={<TeamPage />} />
            <Route path={paths.careers} element={<CareersPage />} />
            <Route path={paths.philosophy} element={<PhilosophyPage />} />
            <Route
              path="*"
              element={<Navigate to={paths.homeIndex} replace />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
