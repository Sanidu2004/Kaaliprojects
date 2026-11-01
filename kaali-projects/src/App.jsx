import Layout from './components/layout/Layout.jsx'
import SplashScreen from './components/layout/SplashScreen.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <>
      <SplashScreen />
      <Layout>
        <Home />
      </Layout>
    </>
  )
}
