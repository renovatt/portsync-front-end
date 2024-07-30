'use server'
import { cookies } from 'next/headers'
import { BASE_URL } from '~static/env'
import { CustomError } from '@utils/custom-error'

export const refresh = async (id: string): Promise<{ ok: boolean }> => {
  try {
    const apiKey = cookies().get('@api-key')?.value as string
    const accessToken = cookies().get('@access-token')?.value as string

    const response = await fetch(`${BASE_URL}/users/refresh-key/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const data = await response.json()

    return { ...data, ok: response.ok }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error
    }
    throw new Error('Erro interno: ' + error)
  }
}
