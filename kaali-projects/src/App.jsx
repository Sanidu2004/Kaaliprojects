import Layout from './components/layout/Layout.jsx'
import SplashScreen from './components/layout/SplashScreen.jsx'
import AppRouter from './router/AppRouter.jsx'

export default function App() {
  return (
    <>
      <SplashScreen />
      <Layout>
        <AppRouter />
      </Layout>
    </>
  )
}
