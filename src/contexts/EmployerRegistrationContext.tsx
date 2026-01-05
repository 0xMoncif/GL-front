// contexts/EmployerRegistrationContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { authApi } from '@/api';



interface EmployerRegistrationData {
  user_type : 'company',
  company_name: string;
  email: string;
  phone_number: string;
  password: string;
  city? : string;
  idustry? : string
  website?: string;
  bio?: string;
}

interface EmployerRegistrationContextType {
  // Current state
  currentPhase: 'account' | 'profile';
  currentStep: number;
  
  // Data
  registrationData: EmployerRegistrationData;
  
  // Navigation
  goToNextStep: () => void;
  goToPrevStep: () => void;
  goToStep: (phase: 'account' | 'profile', step: number) => void;
  goToPhase: (phase: 'account' | 'profile') => void;
  
  // Data management
  updateData: (data: Partial<EmployerRegistrationData>) => void;
  submitRegistration: () => Promise<{ success: boolean; error?: any; } | undefined>;
  
  // Progress info
  getPhaseProgress: (phase: 'account' | 'profile') => {
    currentStep: number;
    totalSteps: number;
    percentage: number;
  };
  // UI states
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

const EmployerRegistrationContext = createContext<EmployerRegistrationContextType | undefined>(undefined);

const EMPLOYER_PHASE_CONFIG = {
  account: {
    totalSteps: 3, 
    title: 'Création du compte',
  },
  profile: {
    totalSteps: 2,
    title: 'Informations de l\'entreprise',
  },
};

interface EmployerRegistrationProviderProps {
  children: ReactNode;
}

export const EmployerRegistrationProvider = ({ children }: EmployerRegistrationProviderProps) => {
  // Initialize from localStorage
  const [currentPhase, setCurrentPhase] = useState<'account' | 'profile'>(() => {
    const saved = localStorage.getItem('employerRegistrationPhase');
    return (saved as 'account' | 'profile') || 'account';
  });
  
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem('employerRegistrationStep');
    return saved ? parseInt(saved) : 1;
  });
  
  const [registrationData, setRegistrationData] = useState<EmployerRegistrationData>(() => {
    const saved = localStorage.getItem('employerRegistrationData');
    return saved ? JSON.parse(saved) : {
      email: '',
      company_name: '',
      phone_number: '',
      password: '',
      city : '',
      idustry : ''
    };
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('employerRegistrationData', JSON.stringify(registrationData));
  }, [registrationData]);

  useEffect(() => {
    localStorage.setItem('employerRegistrationPhase', currentPhase);
    localStorage.setItem('employerRegistrationStep', currentStep.toString());
  }, [currentPhase, currentStep]);

  const getCurrentPhaseConfig = () => EMPLOYER_PHASE_CONFIG[currentPhase];
  const getTotalSteps = () => getCurrentPhaseConfig().totalSteps;

  const goToNextStep = () => {
    if (currentStep < getTotalSteps()) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Move to next phase
      if (currentPhase === 'account') {
        setCurrentPhase('profile');
        setCurrentStep(1);
      }
      // Else: already at last phase
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      // Move to previous phase
      if (currentPhase === 'profile') {
        setCurrentPhase('account');
        setCurrentStep(EMPLOYER_PHASE_CONFIG.account.totalSteps);
      }
    }
  };

  const goToStep = (phase: 'account' | 'profile', step: number) => {
    setCurrentPhase(phase);
    setCurrentStep(Math.max(1, Math.min(step, EMPLOYER_PHASE_CONFIG[phase].totalSteps)));
  };

  const goToPhase = (phase: 'account' | 'profile') => {
    setCurrentPhase(phase);
    setCurrentStep(1);
  };

  const updateData = (data: Partial<EmployerRegistrationData>) => {
    setRegistrationData(prev => ({ ...prev, ...data }));
  };
  
  const clearError = ()=> setError(null);

  const submitRegistration = async () => {
      setLoading(true);
      setError(null);
  
     
  
      try{
        const apiData: EmployerRegistrationData = {
        user_type: 'company', 
        email: registrationData.email,
        password: registrationData.password,
        phone_number : registrationData.phone_number,
        company_name : registrationData.company_name,
        idustry : registrationData.idustry,
        city : registrationData.city
      };
  
      const response = await authApi.registerCompany(apiData);
  
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
  
      setLoading(false);
      return { success: true };
      
      }catch(err : any){
      const errorMessage = err.response?.data?.error || 
                          err.message || 
                          'Registration failed';
      alert(errorMessage);  
      setError(errorMessage);
      setLoading(false);
      
      return { 
        success: false, 
        error: errorMessage 
      };
      }
    };

  const getPhaseProgress = (phase: 'account' | 'profile') => {
  const config = EMPLOYER_PHASE_CONFIG[phase];
  const isCurrentPhase = phase === currentPhase;
  
  return {
    currentStep: isCurrentPhase ? currentStep : (phase === 'account' ? config.totalSteps : 0),
    totalSteps: config.totalSteps,
    percentage: isCurrentPhase 
      ? ((currentStep - 1) / (config.totalSteps - 1)) * 100
      : phase === 'account' ? 100 : 0,  // Same logic as student context
  };
};

  return (
    <EmployerRegistrationContext.Provider
      value={{
        currentPhase,
        currentStep,
        registrationData,
        goToNextStep,
        goToPrevStep,
        goToStep,
        goToPhase,
        updateData,
        submitRegistration,
        getPhaseProgress,
        loading,
        error,
        clearError,
      }}
    >
      {children}
    </EmployerRegistrationContext.Provider>
  );
};

export const useEmployerRegistration = () => {
  const context = useContext(EmployerRegistrationContext);
  if (!context) {
    throw new Error('useEmployerRegistration must be used within an EmployerRegistrationProvider');
  }
  return context;
};