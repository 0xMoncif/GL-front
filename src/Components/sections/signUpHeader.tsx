import logo from "@/assets/logo.svg";
import { useNavigate } from "react-router-dom";
const classes = {
  logoContainer: "flex items-center gap-[1rem] pt-[1.0625rem] pl-[1.4375rem]",
  logoText: "text-[1rem] font-extrabold ",

  // Return link styling
  returnContainer: "flex pl-[19rem] mt-[3.3rem]",
  returnLink:
    "inline-flex items-center gap-2 text-[1rem] text-[#1F1F1F] cursor-pointer font-bold transition-all duration-300 ease-out group",
  returnArrow:
    "transition-all duration-300 ease-out group-hover:scale-125 group-hover:mr-2",
};

export const SignUpHeader = () => {
    const navigate = useNavigate()

  return (
    <>
      <div className={classes.logoContainer}>
        <img src={logo} alt="Logo" className="w-[2.44rem] h-[3.13rem]" />
        <div className={classes.logoText}>
          DZ <span className="text-[#DCA934] font-semibold">Stagiaire</span>
        </div>
      </div>

      <div className={classes.returnContainer}>
        <div className={classes.returnLink} onClick={() => navigate("/")}>
          <span className={classes.returnArrow}>←</span>
          <span>Retour</span>
        </div>
      </div>
    </>
  );
};
