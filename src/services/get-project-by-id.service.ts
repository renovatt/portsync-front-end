import { ProjectDto } from '@/schemas/project-schema'
import { BASE_URL, API_KEY } from '@/static/env'
import { CustomError } from '@/utils/custom-error'
import { isErrorMessageDto } from '@/utils/type-guard-error'

export const getProjectsById = async (
  projectId: string,
): Promise<ProjectDto> => {
  try {
    const response = await fetch(`${BASE_URL}/projects-public/${projectId}`, {
      method: 'GET',
      headers: {
        'x-api-key': API_KEY,
      },
      cache: 'no-cache',
      next: {
        revalidate: 0,
        tags: ['project-by-id'],
      },
    })

    const data: ProjectDto = await response.json()

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
