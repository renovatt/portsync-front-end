import { CustomError } from '@/utils/custom-error'

interface ErrorMessageProps {
  error: CustomError
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="flex flex-col items-start justify-center rounded-lg bg-accent p-2">
      <p className="text-muted-foreground">Error: {error.error}</p>
      <p className="text-muted-foreground">Message: {error.message}</p>
      <p className="text-muted-foreground">Status Code: {error.statusCode}</p>
    </div>
  )
}

export default ErrorMessage
