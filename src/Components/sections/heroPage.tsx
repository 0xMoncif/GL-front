import { NavBar } from "@components";
import HeroPic from "@/assets/heroPic.png";

export const HeroPage = () => {
    const BaseTextClasses = "font-[300] text-[28px] text-white";
    const HeadeTextCLasses = 'text-[92px] font-[800] text-white';
  return (
    <section className="relative min-h-screen h-[880px]">
        <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none rounded-b-[40px]"
        style={{ backgroundImage: `url(${HeroPic})` }}
      ></div>
      

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen select-text pr-[753px] pt-[100px] text-left">
        <h2 className={`${HeadeTextCLasses} pr-[100px]`} >
            <span className="text-[#DCA934] ">Votre </span>
            <span>Avenir</span>
        </h2>
        <h2 className={`${HeadeTextCLasses} pt-[20px] mb-[63px]`}>
            <span>Commance Ici</span>
        </h2>
        <div className="w-[900px] h-[160px] pl-[37px]">
        <p className={`${BaseTextClasses}  pointer-events-auto`}>
            <span className="text-[#DCA934]">DZ-Stagiaire </span> connecte étudiants, jeunes diplômés et entreprises grâce à une plateforme fiable, moderne et conçue pour faciliter l’accès aux opportunités de stage en Algérie.
        </p>
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
        
    </section>
  );
};
