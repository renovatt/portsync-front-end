'use server'
import { cookies } from 'next/headers'
import { BASE_URL } from '~static/env'
import { CustomError } from '@utils/custom-error'
import { revalidateTag } from 'next/cache'

export const deleteStack = async (id: string) => {
  try {
    const apiKey = cookies().get('@api-key')?.value as string
    const accessToken = cookies().get('@access-token')?.value as string

    const response = await fetch(`${BASE_URL}/stacks/${id}`, {
      method: 'DELETE',
      headers: {
        'x-api-key': apiKey,
        Authorization: `Bearer ${accessToken}`,
      },
    })

    revalidateTag('stacks')

    return { ok: response.ok }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error
    }
    return { message: 'Internal error', ok: false }
  }
}
