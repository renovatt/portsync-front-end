export interface Count {
  projects: number
  stacks: number
}

export interface User {
  id: string
  email: string
  name: string
  apiKey: string
  _count: Count
}
