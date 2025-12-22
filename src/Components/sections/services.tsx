import { useState } from "react";
import {Card} from "@components"


export const Services = () => {
  const [selected, setSelected] = useState<"entreprise" | "etudiant">("entreprise");

  const headerTextClasses = "text-[3rem] font-[800]";
  const goldentText = "text-[#DCA934]";
  
  const baseButtonClasses = "w-[25.652rem] h-[4.96rem] text-[1.25rem]";
  
  return (
    <section className="pt-[10rem] flex flex-col items-center"> 
      <div className={`${headerTextClasses} text-center`}>
        <h2>
          <span className={`${goldentText}`}>Votre</span> porte d'entrée vers une carrière
        </h2>
        <h2 className="pt-[2.5rem]">
          <span className={`${goldentText}`}>professionnelle</span> en Algérie{" "}
          <span className={`${goldentText}`}>.</span>
        </h2>
      </div>

      
      <div className="bg-[#F0F0F0] h-[4.5rem] w-[48.13rem] rounded-[1rem] flex items-center justify-center mt-[7.5rem] shadow-[0_0_20px_#DCA93430] relative p-1">
        
       
        <div 
          className={`absolute bg-white rounded-[0.75rem] h-[3.5rem] transition-all duration-300 ease-in-out ${
            selected === 'entreprise' 
              ? 'left-[0.625rem] w-[23.8rem]'  
              : 'left-[23.4rem] w-[23.8rem]'  
          }`}
          style={{ boxShadow: '0 0 20px #DCA93430' }}
        />
        
        <div className="flex items-center justify-around w-full relative z-10">
          <button
            onClick={() => setSelected('entreprise')}
            className={`font-[700] ${baseButtonClasses} ${
              selected === 'entreprise' ? goldentText : 'text-black'
            } rounded-[0.75rem] transition-colors duration-300`}
          >
            Entreprise
          </button>
          <button 
            onClick={() => setSelected('etudiant')}
            className={`${baseButtonClasses} ${
              selected === 'etudiant' 
                ? 'font-[700] ' + goldentText 
                : 'text-black font-[400]'
            } rounded-[0.75rem] transition-colors duration-300`}
          >
            Étudiant
          </button>
        </div>
      </div>
       <div className=" mt-[2.5rem] "> 
        <div className="grid grid-cols-2 gap-[2.75rem]">
          <Card variant="orange" />
          <Card variant="purple" />
          <Card variant="cyan" />
          <Card variant="lime" />
          
        </div>
      </div>
    </section>
  );
};