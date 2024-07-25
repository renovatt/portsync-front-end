'use server'
import { User } from '@/entities/user-response.dto'
import { BASE_URL } from '@/static/env'
import { cookies } from 'next/headers'

export const getUser = async (): Promise<User> => {
  try {
    const apiKey = cookies().get('@api-key')?.value as string
    const accessToken = cookies().get('@access-token')?.value as string

    const response = await fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        revalidate: 0,
        tags: ['user'],
      },
    })

    const data: User = await response.json()

    return data
  } catch (error) {
    throw new Error('Erro interno: ' + error)
  }
}
