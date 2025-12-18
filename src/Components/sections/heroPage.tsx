import { NavBar } from "@components";
import HeroPic from "@/assets/heroPic.png";

export const HeroPage = () => {

    const BaseTextClasses = "font-[300] text-[1.75rem] text-white";
    const HeaderTextClasses = 'text-[5.75rem] font-[800] text-white leading-[1.1]';
    
    return (
        <section className="relative min-h-screen overflow-hidden">
            
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroPic})` }}
            >
                
                <div className="absolute inset-0 bg-black/10"></div>
            </div>
            
           
            <div className="relative z-30">
                <NavBar />
            </div>
            
            
            <div className="relative z-20 flex flex-col justify-center min-h-screen">
                <div className="container mx-auto px-4 pt-[6.25rem]"> 
                    <div className="max-w-[56.25rem] pl-[2.313rem]"> 
                        <h2 className={`${HeaderTextClasses} mb-4`}>
                            <span className="text-[#DCA934]">Votre </span>
                            <span>Avenir</span>
                        </h2>
                        <h2 className={`${HeaderTextClasses} mb-[3.938rem]`}>
                            <span>Commence Ici</span>
                        </h2>
                        
                        <div className="w-full max-w-[56.25rem]">
                            <p className={`${BaseTextClasses} leading-relaxed`}>
                                <span className="text-[#DCA934]">DZ-Stagiaire </span> 
                                connecte étudiants, jeunes diplômés et entreprises grâce à une plateforme fiable, moderne et conçue pour faciliter l’accès aux opportunités de stage en Algérie.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};