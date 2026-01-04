import apiClient from '../client';
import type {RegisterStudentData,RegisterResponse} from './types'

export const authApi = {
  
  register: async (data: RegisterStudentData): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>('auth/register/', data);
    return response.data;
  }
};