import { useState } from 'react'
import copy from 'clipboard-copy'
import { useAuth } from './use-auth'

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false)
  const { user } = useAuth()

  const copyApiKey = async () => {
    try {
      if (user?.apiKey) {
        await copy(user?.apiKey)
        setIsCopied(true)
      }
    } catch (error) {
      setIsCopied(false)
      console.error('Failed to copy text: ', error)
    } finally {
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    }
  }

  return {
    isCopied,
    copyApiKey,
  }
}
