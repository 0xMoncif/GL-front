import { useState } from "react";

export const Services = () => {
  const [selected, setSelected] = useState<"entreprise" | "etudiant">(
    "entreprise"
  );

  const headerTextClasses = "text-[3rem] font-[800]";
  const goldentText = "text-[#DCA934]";
  
  const baseButtonClasses = "w-[25.652rem] h-[4.96rem] text-[1.25rem]";
  
  return (
    <section className="pt-[10rem] flex flex-col items-center"> 
      <div className={`${headerTextClasses} text-center`}>
        <h2>
          <span className={`${goldentText}`}>Votre</span> porte d'entrée vers
          une carrière
        </h2>
        <h2 className="pt-[2.5rem]">
          <span className={`${goldentText}`}>professionnelle</span> en Algérie{" "}
          <span className={`${goldentText}`}>.</span>
        </h2>
      </div>

      
      <div className="bg-[#F0F0F0] h-[5.125rem] w-[56.875rem] rounded-[1rem] flex items-center justify-center mt-[7.5rem] shadow-[0_0_20px_#DCA93430] relative p-1">
        
        
        
        <div 
          className={`absolute bg-white rounded-[0.75rem] h-[4.0625rem] transition-all duration-300 ${
            selected === 'entreprise' 
              ? 'left-3 w-[28rem]'
              : 'left-[28.188rem] w-[28rem]'  
          }`}
          style={{ boxShadow: '0 0 20px #DCA93430' }}
        />
        
        <div className={`flex items-center justify-around w-full relative z-10`}>
          <button
            onClick={() => setSelected('entreprise')}
            className={`font-[700] ${baseButtonClasses} ${selected === 'entreprise' ? goldentText : 'text-black'} rounded-[0.75rem] transition-colors duration-300`}
          >
            Entreprise
          </button>
          <button 
            onClick={() => setSelected('etudiant')}
            className={`${baseButtonClasses} ${selected === 'etudiant' ? 'font-[700] ' + goldentText : 'text-black font-[400]'} rounded-[0.75rem] transition-colors duration-300`}
          >
            Étudiant
          </button>
        </div>
      </div>
    </section>
  );
};