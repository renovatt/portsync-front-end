'use server'
import { cookies } from 'next/headers'
import { BASE_URL, API_KEY } from '@/static/env'
import { CustomError } from '@/utils/custom-error'
import { revalidateTag } from 'next/cache'

export const deleteProject = async (id: string) => {
  try {
    const accessToken = cookies().get('@access-token')?.value as string

    const response = await fetch(`${BASE_URL}/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'x-api-key': API_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
    })

    revalidateTag('projects-public')

    return { ok: response.ok }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error
    }
    return { message: 'Internal error', ok: false }
  }
}