import { Students, Student } from 'types/students.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: number | string, signal?: AbortSignal) =>
  http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    },
    signal
  })

export const getStudent = (id: string | number) => http.get<Student>(`students/${id}`)
export const addStudent = (body: Omit<Student, 'id'>) => http.post<Student>('students', body)
export const editStudent = (id: string | number, body: Omit<Student, 'id'>) => http.put<Student>(`students/${id}`, body)
export const deleteStudent = (id: string | number) => http.delete<{}>(`students/${id}`)
