import { Students } from "types/students.type";
import http from "utils/http";

export const getStudent = (page: string | number, limit: string | number) =>
  http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })