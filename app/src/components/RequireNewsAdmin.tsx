import { useEffect, useState, type ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { isNewsAdmin, subscribeNewsAdmin } from '../lib/newsAuth'

export function useNewsAdmin() {
  const [admin, setAdmin] = useState(isNewsAdmin)

  useEffect(() => subscribeNewsAdmin(() => setAdmin(isNewsAdmin())), [])

  return admin
}

export function RequireNewsAdmin({ children }: { children: ReactNode }) {
  const admin = useNewsAdmin()
  const location = useLocation()

  if (!admin) {
    return <Navigate to="/news/login" replace state={{ from: location.pathname }} />
  }

  return children
}
