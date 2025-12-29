// components/ProgressBar.tsx
import { useStep } from '../../../contexts/StepContext';

interface ProgressBarProp {
    content : string;
}


export const ProgressBar = ({content} : ProgressBarProp) => {
  const { currentStep, totalSteps } = useStep();
  
  // Calculate fill percentage (0 to 100)
  const fillPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
  
  return (
    <div className="flex flex-col items-center gap-[1.25rem] mt-[2rem]">
      <div className="text-[1.25rem] font-red-hat text-[#1F1F1F] font-[600]">
        {content}
      </div>
      
      {/* Progress bar */}
      <div className="w-[18.75rem] h-[0.31rem] bg-[#1F1F1F] bg-opacity-[20%] rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#DCA934] transition-all duration-300 ease-out rounded-full"
          style={{ width: `${fillPercentage}%` }}
        />
      </div>
    </div>
  );
};

