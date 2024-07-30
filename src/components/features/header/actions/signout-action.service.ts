'use server'
import { cookies } from 'next/headers'
import { deleteCookie } from 'cookies-next'
import { redirect } from 'next/navigation'

export const signout = async () => {
  deleteCookie('@access-token', { cookies })
  deleteCookie('@api-key', { cookies })
  redirect('/signin')
}
