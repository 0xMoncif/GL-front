import logowhite from "@assets/logowhite.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI";

export const LoginPage = () => {
  const navigate = useNavigate();
  const baseInputClass =
    "w-[28.43rem] h-[4.375rem] rounded-[1.25rem] bg-[#F9F7F3] bg-opacity-[5%] border-[1px] border-[#1F1F1F8C] pl-[1.875rem] placeholder:text-[#1F1F1F] placeholder:opacity-[20%] placeholder:font-red-hat text-[1.25rem]";
  return (
    <div>
      <div className="flex h-screen font-unbounded">
        <div className="w-1/2 bg-[#DCA934] rounded-br-[40px] rounded-tr-[40px] py-[1rem] px-[1.625rem]">
          <header className="flex justify-between">
            <div className="flex items-center gap-[0.7rem] ">
              <img src={logowhite} alt="" />
              <h1 className="text-black text-[1rem] font-semibold">
                DZ <span className="text-white">Stagiaire</span>
              </h1>
            </div>
            <div className="flex pl-[19rem] mt-[3.3rem]">
              <div
                className="inline-flex items-center gap-2 text-[1rem] text-[#1F1F1F] text-opacity-[20%] cursor-pointer font-bold transition-all duration-300 ease-out group"
                onClick={() => navigate("/")}
              >
                <span className="transition-all duration-300 ease-out group-hover:scale-125 group-hover:mr-2">
                  ←
                </span>
                <span>Retour</span>
              </div>
            </div>
          </header>

          <main>
            <div className="pt-[6.9rem]">
              <div className="flex flex-col gap-[3.75rem]">
                <div className="text-center">
                  <h1 className="flex flex-col gap-[1.125rem] text-[##1F1F1F] font-[800] text-[2.5rem]">
                    Ravi de vous retrouver!
                  </h1>
                  <p className="font-red-hat text-[1.25rem] text-[##1F1F1F]">
                    Connectez-vous pour continuer sur DZ-Stagiaire.
                  </p>
                </div>
                <form
                  action=""
                  className="flex flex-col gap-[3.75rem] justify-center items-center"
                >
                  <input
                    type="email"
                    placeholder="Email"
                    name=""
                    className={`${baseInputClass}`}
                  />
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    name=""
                    className={`${baseInputClass}`}
                  />
                </form>
                <div className="flex flex-col gap-[1.875rem] items-center">
                  <div className="w-[28.43rem]">
                    <Button variant="mo9a3arWhite" size="large">
                      Se connecter
                    </Button>
                  </div>
                  <div className="w-[28.43rem]">
                    <p className="self-start text-left cursor-pointer font-red-hat text-[1rem] font-[400] opacity-[50%] text-[#1F1F1F] " onClick={()=> navigate('/Sign-up')}>
                      Nouveau sur DZ-Stagiaire ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="w-1/2 bg-white"></div>
      </div>
    </div>
  );
};
