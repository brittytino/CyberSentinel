import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from '../components/Dashboard'
import NotificationAlerts from '../components/NotificationAlerts'

const DashboardPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard - CyberSentinel</title>
        <meta name="description" content="CyberSentinel Dashboard" />
      </Head>

      <main>
        <h1>CyberSentinel Dashboard</h1>
        <NotificationAlerts />
        <Dashboard />
      </main>
    </div>
  )
}

export default DashboardPage