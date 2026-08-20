import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import { ServiceDetailPage } from './components/service-detail/ServiceDetailPage'
import { CYBERSECURITY_SERVICE } from './data/services/cybersecurity.data'
import { BLOCKCHAIN_SERVICE } from './data/services/blockchain-solutions.data'
import { SOFTWARE_DEVELOPMENT_SERVICE } from './data/services/software-development.data'
import { IT_CONSULTANCY_SERVICE } from './data/services/it-consultancy.data'
import { PRODUCTS_SERVICE } from './data/services/products.data'
import { FINANCIAL_SERVICES_SERVICE } from './data/services/financial-services.data'
import { TRAINING_SERVICE } from './data/services/training.data'
import { IndustriesPage } from './components/industries/IndustriesPage'
import { IndustryDetailPage } from './components/industry-detail/IndustryDetailPage'
import { BANKING_FINANCE_INDUSTRY } from './data/industries/banking-finance.data'
import { GOVERNMENT_INDUSTRY } from './data/industries/government-public-sector.data'
import { HEALTHCARE_INDUSTRY } from './data/industries/healthcare.data'
import { TELECOMMUNICATIONS_INDUSTRY } from './data/industries/telecommunications.data'
import { ENERGY_UTILITIES_INDUSTRY } from './data/industries/energy-utilities.data'
import { EDUCATION_INDUSTRY } from './data/industries/education.data'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path={paths.homeIndex} element={<HomePage />} />
            <Route path={paths.services} element={<ServicesPage />} />
            <Route
              path={paths.cybersecurity}
              element={<ServiceDetailPage config={CYBERSECURITY_SERVICE} />}
            />
            <Route
              path={paths.blockchainSolutions}
              element={<ServiceDetailPage config={BLOCKCHAIN_SERVICE} />}
            />
            <Route
              path={paths.softwareDevelopment}
              element={<ServiceDetailPage config={SOFTWARE_DEVELOPMENT_SERVICE} />}
            />
            <Route
              path={paths.itConsultancy}
              element={<ServiceDetailPage config={IT_CONSULTANCY_SERVICE} />}
            />
            <Route
              path={paths.products}
              element={<ServiceDetailPage config={PRODUCTS_SERVICE} />}
            />
            <Route
              path={paths.financialServicesInvestment}
              element={<ServiceDetailPage config={FINANCIAL_SERVICES_SERVICE} />}
            />
            <Route
              path={paths.trainingCapacityBuilding}
              element={<ServiceDetailPage config={TRAINING_SERVICE} />}
            />

            <Route path="/industries" element={<IndustriesPage />} />
            <Route
              path="/industries/banking-finance"
              element={<IndustryDetailPage config={BANKING_FINANCE_INDUSTRY} />}
            />
            <Route
              path="/industries/government-public-sector"
              element={<IndustryDetailPage config={GOVERNMENT_INDUSTRY} />}
            />
            <Route
              path="/industries/healthcare"
              element={<IndustryDetailPage config={HEALTHCARE_INDUSTRY} />}
            />
            <Route
              path="/industries/telecommunications"
              element={<IndustryDetailPage config={TELECOMMUNICATIONS_INDUSTRY} />}
            />
            <Route
              path="/industries/energy-utilities"
              element={<IndustryDetailPage config={ENERGY_UTILITIES_INDUSTRY} />}
            />
            <Route
              path="/industries/education"
              element={<IndustryDetailPage config={EDUCATION_INDUSTRY} />}
            />
            <Route path={paths.contact} element={<ContactPage />} />
            <Route path={paths.testimonials} element={<TestimonialsPage />} />
            <Route path={paths.insights} element={<InsightsPage />} />
            <Route path={paths.about} element={<AboutPage />} />
            <Route path={paths.team} element={<TeamPage />} />
            <Route path={paths.careers} element={<CareersPage />} />
            <Route path={paths.philosophy} element={<PhilosophyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
