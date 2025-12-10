import { useState } from "react";

export const Services = () => {
  const [selected, setSelected] = useState<"entreprise" | "etudiant">(
    "entreprise"
  );

  const headerTextClasees = "text-[55px] font-[800]";
  const goldentText = "text-[#DCA934]";
  const baseTextClasses = "text-[20px] font-[400]";
  const baseButtonClasses = "w-[410px] h-[65px]  text-[25px]";
  return (
    <section className="pt-[160px] flex flex-col items-center">
      <div className={` ${headerTextClasees} text-center`}>
        <h2>
          <span className={`${goldentText}`}>Votre</span> porte d’entrée vers
          une carrière
        </h2>
        <h2 className="pt-[40px]">
          <span className={`${goldentText}`}>professionnelle</span> en Algérie{" "}
          <span className={`${goldentText}`}>.</span>
        </h2>
      </div>

       <div className="bg-[#F0F0F0] h-[82px]  w-[910px] rounded-[16px]  flex items-center justify-center mt-[120px] shadow-[0_0_20px_#DCA93430] relative p-1">
        {/* Single moving background element - ADDED THIS */}
        <div 
          className={`absolute bg-white rounded-[12px] h-[65px] transition-all duration-300 ${
            selected === 'entreprise' 
              ? 'left-3 w-[448px]'  // (900px - 4px padding) / 2 = 448px
              : 'left-[451px] w-[448px]'  // 1px + 450px (half width)
          }`}
          style={{ boxShadow: '0 0 20px #DCA93430' }}
        />
        
        <div className={`flex items-center justify-around ${baseTextClasses} w-full relative z-10`}>
          <button
            onClick={() => setSelected('entreprise')}
            className={`font-[700] ${baseButtonClasses} ${selected === 'entreprise' ? goldentText : 'text-gray-600'} rounded-[12px] transition-colors duration-300`}
          >
            Entreprise
          </button>
          <button 
            onClick={() => setSelected('etudiant')}
            className={`${baseButtonClasses} ${selected === 'etudiant' ? 'font-[700] ' + goldentText : 'text-gray-600 font-[400]'} rounded-[12px] transition-colors duration-300`}
          >
            Étudiant
          </button>
        </div>
      </div>
    </section>
  );
};
