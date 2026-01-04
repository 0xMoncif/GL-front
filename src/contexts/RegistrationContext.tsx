import { createContext, useContext, useState,useEffect } from 'react';
import type { ReactNode } from 'react';
import { authApi } from '@/api';
type Domain = string;

type Field = {
  id: number;
  field: string;
  domains: Domain[];
};

interface RegistrationData {
  // Phase 1: Account Creation
  user_type : 'student'
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  password: string;
  schoolId?: string;
  
  // Phase 2: Profile Configuration
  profileData?: {
    // i will add this later
    field?: Field;
    bio? : string;
    portfolio? : string;
  };
}

interface RegistrationContextType {
  // Current state
  currentPhase: 'account' | 'profile';
  currentStep: number;
  
  // Data
  registrationData: RegistrationData;
  
  // Navigation
  goToNextStep: () => void;
  goToPrevStep: () => void;
  goToStep: (phase: 'account' | 'profile', step: number) => void;
  goToPhase: (phase: 'account' | 'profile') => void;
  
  // Data management
  updateData: (data: Partial<RegistrationData>) => void;
  submitRegistration: () => Promise<{ success: boolean; error?: any; } | undefined>;
  
  // Progress info
  getPhaseProgress: (phase: 'account' | 'profile') => {
    currentStep: number;
    totalSteps: number;
    percentage: number;
  };

  // UI state
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

// Configuration
const PHASE_CONFIG = {
  account: {
    totalSteps: 2,
    title: 'Création du compte',
  },
  profile: {
    totalSteps: 4, // Change this based on your needs
    title: 'Configuration du profil',
  },
};

interface RegistrationProviderProps {
  children: ReactNode;
}

export const RegistrationProvider = ({ children }: RegistrationProviderProps) => {
   const [currentPhase, setCurrentPhase] = useState<'account' | 'profile'>(() => {
    const saved = localStorage.getItem('registrationPhase');
    return (saved as 'account' | 'profile') || 'account';
  });
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem('registrationStep');
    return saved ? parseInt(saved) : 1;
  });
   const [registrationData, setRegistrationData] = useState<RegistrationData>(() => {
    const saved = localStorage.getItem('registrationData');
    return saved ? JSON.parse(saved) : {
      user_type : 'student',
      email: '',
      first_name: '',
      last_name: '',
      phone: '',
      password: '',
      schoolId: '',
    };
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCurrentPhaseConfig = () => PHASE_CONFIG[currentPhase];
  const getTotalSteps = () => getCurrentPhaseConfig().totalSteps;

  const goToNextStep = () => {
    if (currentStep < getTotalSteps()) {
      setCurrentStep(prev => prev + 1);
    } else if (currentPhase === 'account') {
      // Move to profile phase
      setCurrentPhase('profile');
      setCurrentStep(1);
    }
    // Else: already at last step of profile phase
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else if (currentPhase === 'profile') {
      // Go back to account phase
      setCurrentPhase('account');
      setCurrentStep(PHASE_CONFIG.account.totalSteps);
    }
  };

  const goToStep = (phase: 'account' | 'profile', step: number) => {
    setCurrentPhase(phase);
    setCurrentStep(Math.max(1, Math.min(step, PHASE_CONFIG[phase].totalSteps)));
  };

  const goToPhase = (phase: 'account' | 'profile') => {
    setCurrentPhase(phase);
    setCurrentStep(1);
  };

  const updateData = (data: Partial<RegistrationData>) => {
    setRegistrationData(prev => ({ ...prev, ...data }));
  };

  const clearError = () => setError(null);


  const submitRegistration = async () => {
    setLoading(true);
    setError(null);

   

    try{
      const apiData: RegistrationData = {
      user_type: 'student', 
      email: registrationData.email,
      password: registrationData.password,
      phone_number: registrationData.phone_number || '',  
      first_name: registrationData.first_name,
      last_name: registrationData.last_name,
    };

    const response = await authApi.register(apiData);

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
    const config = PHASE_CONFIG[phase];
    const isCurrentPhase = phase === currentPhase;
    
    return {
      currentStep: isCurrentPhase ? currentStep : (phase === 'account' ? config.totalSteps : 0),
      totalSteps: config.totalSteps,
      percentage: isCurrentPhase 
        ? ((currentStep - 1) / (config.totalSteps - 1)) * 100
        : phase === 'account' ? 100 : 0,
    };
  };


useEffect(() => {
  
  localStorage.setItem('registrationData', JSON.stringify(registrationData));
}, [registrationData]);


useEffect(() => {
  localStorage.setItem('registrationPhase', currentPhase);
  localStorage.setItem('registrationStep', currentStep.toString());
}, [currentPhase, currentStep]);


  return (
    <RegistrationContext.Provider
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
        clearError,
        loading,
        error,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within a RegistrationProvider');
  }
  return context;
};