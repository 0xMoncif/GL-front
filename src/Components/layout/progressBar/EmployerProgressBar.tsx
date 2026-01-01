import { useEmployerRegistration } from '../../../contexts/EmployerRegistrationContext';
interface ProgressBarProp {
    content : string;
    phase: 'account' | 'profile';
}


export const EmployerProgressBar = ({content ,phase} : ProgressBarProp) => {
   const { getPhaseProgress } = useEmployerRegistration();
  const progress = getPhaseProgress(phase);
  
  return (
    <div className="flex flex-col  items-start gap-[0.6125rem]">
      <div className="text-[1rem] font-red-hat text-[#1F1F1F] text-opacity-[20%] font-meduim">
        {content}
      </div>
      
      {/* Progress bar */}
      <div className={`${phase === 'account' ? 'w-[28.13rem]' : 'w-[9.38rem]'} h-[0.31rem] bg-[#1F1F1F] bg-opacity-[20%] rounded-full overflow-hidden`}>
        <div 
          className="h-full bg-[#DCA934] transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progress.percentage}%` }}
        />
      </div>
    </div>
  );
};

