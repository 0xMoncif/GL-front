export interface RegisterStudentData {
  user_type: 'student';
  email: string;
  password: string;
  phone_number?: string;
  first_name: string;
  last_name: string;
}

export interface RegisterCompanyData {
  user_type: 'company';
  email: string;
  password: string;
  password2: string;
  phone_number?: string;
  company_name: string;
}


export interface RegisterResponse {
  refresh: string;
  access: string;
  user_type: 'student' | 'company';
  has_profile: boolean;
}
