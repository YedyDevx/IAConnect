export type Profile = {
  id: string
  full_name: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export type Level = {
  id: number
  name: string
  description: string | null
  order_number: number
  created_at: string
}

export type StudentProgress = {
  id: string
  user_id: string
  level_id: number
  status: 'not_started' | 'in_progress' | 'completed'
  score: number
  started_at: string | null
  completed_at: string | null
  created_at: string
  updated_at: string
}

export type Exercise = {
  id: number
  level_id: number
  title: string
  description: string | null
  difficulty: 'easy' | 'medium' | 'hard'
  created_at: string
}

export type ExerciseSubmission = {
  id: string
  user_id: string
  exercise_id: number
  solution: string
  is_correct: boolean
  submitted_at: string
} 