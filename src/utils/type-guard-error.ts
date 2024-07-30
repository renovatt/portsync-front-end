import { ErrorMessageDto } from '@entities/error.dto'
import { ProjectResponseDto } from '@entities/project-response.dto'
import { SigninResponseDto } from '@entities/signin-response.dto'
import { StacksResponseDto } from '@entities/stack.dto'
import { ProjectDto } from '@schemas/project-schema'
import { SigninDto } from '@schemas/signin-schema'

export function isErrorMessageDto(
  object:
    | ProjectResponseDto
    | ProjectDto
    | SigninDto
    | SigninResponseDto
    | StacksResponseDto
    | ErrorMessageDto,
): object is ErrorMessageDto {
  return 'error' in object
}
