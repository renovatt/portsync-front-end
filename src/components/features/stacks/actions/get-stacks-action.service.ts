'use server'
import { StacksResponseDto } from '@/entities/stack.dto'
import { BASE_URL } from '@/static/env'
import { CustomError } from '@/utils/custom-error'
import { isErrorMessageDto } from '@/utils/type-guard-error'
import { cookies } from 'next/headers'

export const getStacks = async (): Promise<StacksResponseDto> => {
  try {
    const apiKey = cookies().get('@api-key')?.value as string
    const accessToken = cookies().get('@access-token')?.value as string

    const response = await fetch(`${BASE_URL}/stacks`, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        revalidate: 0,
        tags: ['stacks'],
      },
    })

    const data: StacksResponseDto = await response.json()

    if (isErrorMessageDto(data)) {
      throw new CustomError(data.message, data.error, response.status)
    }

    return data
  } catch (error) {
    if (error instanceof CustomError) {
      throw error
    }
    throw new Error('Erro interno: ' + error)
  }
}
