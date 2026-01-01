// contexts/EmployerRegistrationContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface EmployerProfileData {
  website?: string;
  bio?: string;
}

interface EmployerRegistrationData {
  
  companyName: string;
  email: string;
  phone: string;
  password: string;
  city : string;
  sector : string
  
  companyInfo?: EmployerProfileData;
  
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
  submitRegistration: () => Promise<void>;
  
  // Progress info
  getPhaseProgress: (phase: 'account' | 'profile') => {
    currentStep: number;
    totalSteps: number;
    percentage: number;
  };
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
      companyName: '',
      phone: '',
      password: '',
      city : '',
      sector : ''
    };
  });

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

  const submitRegistration = async () => {
    console.log('Submitting employer registration:', registrationData);
    // API call here
    // await api.registerEmployer(registrationData);
  };

  const getPhaseProgress = (phase: 'account' | 'profile') => {
    const config = EMPLOYER_PHASE_CONFIG[phase];
    const isCurrentPhase = phase === currentPhase;
    
    return {
      currentStep: isCurrentPhase ? currentStep : 0,
      totalSteps: config.totalSteps,
      percentage: isCurrentPhase 
        ? ((currentStep - 1) / (config.totalSteps - 1)) * 100
        : 0,
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