import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';


interface StepContextType {
  currentStep: number;
  totalSteps: number;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  goToStep: (step: number) => void;
}


const StepContext = createContext<StepContextType | undefined>(undefined);


interface StepProviderProps {
  children: ReactNode;
  totalSteps?: number;
}

export const StepProvider = ({ children, totalSteps = 4 }: StepProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const goToPrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    setCurrentStep(Math.max(1, Math.min(step, totalSteps)));
  };

  return (
    <StepContext.Provider
      value={{
        currentStep,
        totalSteps,
        goToNextStep,
        goToPrevStep,
        goToStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};


export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};

