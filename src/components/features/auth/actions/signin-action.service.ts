'use server'
import { cookies } from 'next/headers'
import { BASE_URL, API_KEY } from '@/static/env'
import { CustomError } from '@/utils/custom-error'
import { SigninDto } from '@/schemas/signin-schema'
import { isErrorMessageDto } from '@/utils/type-guard-error'
import { SigninResponseDto } from '@/entities/signin-response.dto'
import { decode } from 'jsonwebtoken'

export const signin = async (
  signinData: SigninDto,
): Promise<SigninResponseDto> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signinData),
    })

    const data: SigninResponseDto = await response.json()

    if (isErrorMessageDto(data)) {
      throw new CustomError(data.message, data.error, response.status)
    }

    const userId = decode(data.accessToken ?? '')?.sub as string

    cookies().set('@access-token', data.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 8,
    })

    cookies().set('@user', userId, {
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 8,
    })

    return { ...data, ok: response.ok }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error
    }
    throw new Error('Erro interno: ' + error)
  }
}
