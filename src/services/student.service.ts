import { supabase } from "@/lib/supabase";
import { StudentProgress } from "@/types/database.types";

export const studentService = {
  // Obtener progreso del estudiante
  async getStudentProgress(userId: string) {
    const { data, error } = await supabase
      .from("student_progress")
      .select(
        `
        *,
        levels (*)
      `
      )
      .eq("user_id", userId);

    if (error) throw error;
    return data;
  },

  // Actualizar progreso del estudiante
  async updateProgress(
    userId: string,
    levelId: number,
    status: StudentProgress["status"]
  ) {
    const { data, error } = await supabase
      .from("student_progress")
      .upsert({
        user_id: userId,
        level_id: levelId,
        status,
        updated_at: new Date().toISOString(),
      })
      .select();

    if (error) throw error;
    return data[0];
  },

  // Obtener ejercicios por nivel
  async getLevelExercises(levelId: number) {
    const { data, error } = await supabase
      .from("exercises")
      .select("*")
      .eq("level_id", levelId)
      .order("created_at");

    if (error) throw error;
    return data;
  },

  // Enviar solución de ejercicio
  async submitExercise(userId: string, exerciseId: number, solution: string) {
    const { data, error } = await supabase
      .from("exercise_submissions")
      .insert({
        user_id: userId,
        exercise_id: exerciseId,
        solution,
        is_correct: true, // Aquí deberías implementar la lógica de validación
      })
      .select();

    if (error) throw error;
    return data[0];
  },
};
