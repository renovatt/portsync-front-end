'use server'
import { cookies } from 'next/headers'
import { BASE_URL } from '~static/env'
import { revalidateTag } from 'next/cache'
import { CustomError } from '@utils/custom-error'
import { ProjectDto } from '@schemas/project-schema'
import { ProjectResponseDto } from '@entities/project-response.dto'

export const update = async (
  id: string,
  project: ProjectDto,
): Promise<ProjectResponseDto> => {
  try {
    const apiKey = cookies().get('@api-key')?.value as string
    const accessToken = cookies().get('@access-token')?.value as string

    const response = await fetch(`${BASE_URL}/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(project),
    })

    const data: ProjectResponseDto = await response.json()
    revalidateTag('projects')

    return { ...data, ok: response.ok }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error
    }
    throw new Error('Erro interno: ' + error)
  }
}
