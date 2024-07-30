import { ProjectDto } from '@schemas/project-schema'

export type ProjectResponseDto = ProjectDto[] & {
  ok?: boolean
  message?: string
}
