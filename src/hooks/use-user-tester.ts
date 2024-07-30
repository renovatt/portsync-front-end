import { USER_TESTER } from '~static/env'
import { useAuth } from './use-auth'
import { useState, useEffect } from 'react'

const userTester = USER_TESTER

export const useUserTester = () => {
  const [isUserTester, setIsUserTester] = useState(false)

  const { user } = useAuth()

  useEffect(() => {
    if (user?.email === userTester) {
      setIsUserTester(true)
    }
  }, [user])

  return {
    isUserTester,
  }
}
