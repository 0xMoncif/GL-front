import apiClient from '../client';
import type {RegisterStudentData,RegisterCompanyData,RegisterResponse} from './types'

export const authApi = {
  
  registerStudent: async (data: RegisterStudentData): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>('auth/register/', data);
    return response.data;
  },
  registerCompany: async (data: RegisterCompanyData): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>('auth/register/', data);
    return response.data;
  }
};