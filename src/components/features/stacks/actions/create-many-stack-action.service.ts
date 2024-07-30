'use server'
import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'
import { BASE_URL } from '@/static/env'
import { CustomError } from '@/utils/custom-error'
import { StackDto } from '@/entities/stack.dto'

type StackResponseDto = Pick<StackDto, 'iconUrl'>[]

export const createMany = async (stacks: StackResponseDto) => {
  try {
    const apiKey = cookies().get('@api-key')?.value as string
    const accessToken = cookies().get('@access-token')?.value as string

    const response = await fetch(`${BASE_URL}/stacks/many`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(stacks),
    })

    const data = await response.json()
    revalidateTag('stacks')

    return { ...data, ok: response.ok }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error
    }
    throw new Error('Erro interno: ' + error)
  }
}
