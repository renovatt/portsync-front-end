import { useEffect, useState } from 'react'
import { User } from '@/entities/user-response.dto'
import { getUser } from '@/components/features/header/actions/get-user-action.service'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)

  const updateUser = async () => {
    const user = await getUser()
    setUser(user)
  }

  useEffect(() => {
    if (!user) {
      updateUser()
    }
  }, [user])

  return {
    user,
    updateUser,
  }
}
