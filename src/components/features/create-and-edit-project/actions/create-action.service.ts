'use server'
import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'
import { BASE_URL, API_KEY } from '@/static/env'
import { CustomError } from '@/utils/custom-error'
import { ProjectDto } from '@/schemas/project-schema'
import { ProjectResponseDto } from '@/entities/project-response.dto'

export const create = async (
  project: ProjectDto,
): Promise<ProjectResponseDto> => {
  try {
    const accessToken = cookies().get('@access-token')?.value as string

    const response = await fetch(`${BASE_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(project),
    })

    const data: ProjectResponseDto = await response.json()
    revalidateTag('projects-public')

    return { ...data, ok: response.ok }
  } catch (error) {
    if (error instanceof CustomError) {
      throw error
    }
    throw new Error('Erro interno: ' + error)
  }
}
