import { SignUpHeader } from "../sections/signUpHeader"
import { useNavigate } from "react-router-dom";
import defaultPic from "@assets/defaultPic.png";
import { EmployerProgressBar } from "../layout/progressBar/EmployerProgressBar";
import {useEmployerRegistration} from '../../contexts/EmployerRegistrationContext'
import { Button } from "../UI";
const baseInputClass =
  "pl-[1.875rem] bg-[#F9F7F3] bg-opacity-[1%] rounded-[1.25rem] h-[4.38rem] border-[1px] border-[#1F1F1F] border-opacity-[10%] placeholder:text-[#1F1F1F] placeholder:opacity-[40%] cursor-text";
const classes = {
  container: "min-h-screen font-unbounded",

  button : 'rounded-2xl font-unbounded bg-[#DCA934] text-white  border-none w-[28.43rem] h-[4.375rem] text-[1.5rem] font-[800] hover:-translate-y-1.5 hover:shadow-[0_8px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out',
 
  // main
  mainContainer: "",

  // header
  headerContainer: "text-center mt-[2.2rem]",
  headerTitle: "text-[2.5rem] text-[#DCA934] font-extrabold",
  headerText: "text-[1.25rem] text-opacity-[60%] text-[#1F1F1F] font-red-hat",
  subHeaderText: "text-[1.5rem] text-[#1F1F1F]",

  //form
  formContainer:
    "flex justify-center items-center mt-[3.75rem] text-[1.25rem] font-red-hat",
  form: "flex flex-col gap-[1.875rem]",
  nameInputontainer: "flex gap-[1.25rem]",
  nameInput: `${baseInputClass} w-[13.56rem]  `,
  largeInput: `${baseInputClass} w-[28.44rem] `,
  phone: `${baseInputClass} w-[6.13rem]`,
  phoneNumber: `${baseInputClass} w-[21.06rem]`,
};



export const CreateEmployerAccount = ()=>{
    const {currentPhase,currentStep,goToPrevStep} = useEmployerRegistration();
    const navigate = useNavigate()
    return(
        <div className={classes.container}>
              <SignUpHeader
                onClick={() => {
                  if (currentStep === 1 && currentPhase === "account") {
                    navigate("/Sign-up");
                  } else {
                    goToPrevStep();
                  }
                }}
              />
        
              <main className={classes.mainContainer}>
                {currentPhase === "account" ? (
                  <header className={classes.headerContainer}>
                    <h1 className={classes.headerTitle}>Créer un compte</h1>
                    <p className={classes.headerText}>Les informations de votre entrepris</p>
                  </header>
                ) : null}
        
                <div className={classes.formContainer}>
                  {currentPhase === "account" && currentStep === 1 && <AccountStep1 />}
                  {currentPhase === "account" && currentStep === 2 && <AccountStep2 />}
                  {currentPhase === "account" && currentStep === 3 && <AccountStep3 />}

                  {currentPhase === "profile" && currentStep === 1 && <ProfileStep1 />}
                  {currentPhase === "profile" && currentStep === 2 && <ProfileStep2 />}
                  
                </div>
                <div className="flex justify-center gap-[1.25rem] mt-[5.25rem] mb-[2.5rem]">
                  <EmployerProgressBar content="Les informations de l’entreprise" phase="account"  />
                  <EmployerProgressBar content="Configurer le profil" phase="profile"  />
                </div>
              </main>
            </div>
        
    )
}


const AccountStep1 = () => {
  const { goToNextStep, currentPhase, currentStep, updateData } =
    useEmployerRegistration();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const stepData = {
      companyName : formData.get('companyName') as string,
      email : formData.get('email') as string
    }
    updateData(stepData);
    goToNextStep();
 
    console.log("Phase:", currentPhase, "Step:", currentStep);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          required
          className={classes.largeInput}
          placeholder="Nom"
          style={{
            color: "#1F1F1F",
          }}
        />
      
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className={classes.largeInput}
        style={{
          color: "#1F1F1F",
        }}
      />
      <button className={classes.button}>
        Continuer
      </button>
    </form>
  );
};


const AccountStep2 = () => {
  const { goToNextStep, currentPhase, currentStep, updateData } =
    useEmployerRegistration();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmedPassword = formData.get("confirmed-password") as string;
    if (password !== confirmedPassword) {
      alert("Les mots de passe ne correspondent pas!");
      return;
    }
    const stepData = {
      phone: formData.get("phone") as string,
      password: formData.get("password") as string,
    };
    updateData(stepData);
    goToNextStep();

    console.log("Phase:", currentPhase, "Step:", currentStep);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.nameInputontainer}>
        <input
          type="text"
          disabled
          required
          className={`${classes.phone} placeholder:opacity-[100%]`}
          placeholder="+213"
        />
        <input
          type="tel"
          name="phone"
          required
          className={classes.phoneNumber}
          placeholder="Numéro de téléphone"
          style={{
            color: "#1F1F1F",
          }}
        />
      </div>
      <input
        type="password"
        name="password"
        required
        placeholder="Mot de passe"
        className={classes.largeInput}
        style={{
          color: "#1F1F1F",
        }}
      />
      <input
        type="password"
        name="confirmed-password"
        required
        placeholder="Confirmer le mot de passe"
        className={classes.largeInput}
        style={{
          color: "#1F1F1F",
        }}
      />
      <button className={classes.button}>
        Continuer
      </button>
    </form>
  );
};
const AccountStep3 = () => {
  const { goToNextStep, currentPhase, currentStep, updateData } =
    useEmployerRegistration();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const stepData = {
      city: formData.get("City") as string,
      sector: formData.get("Sector") as string,
    };
    updateData(stepData);
    goToNextStep();

    console.log("Phase:", currentPhase, "Step:", currentStep);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      
      <input
        type="text"
        name="City"
        required
        placeholder="Ville"
        className={classes.largeInput}
        style={{
          color: "#1F1F1F",
        }}
      />
      <input
        type="text"
        name="Sector"
        required
        placeholder="Secteur d’activité"
        className={classes.largeInput}
        style={{
          color: "#1F1F1F",
        }}
      />
      <button className={classes.button}>
        Continuer
      </button>
    </form>
  );
};

const ProfileStep1 = () => {
  const { registrationData, goToNextStep } = useEmployerRegistration();
  return (
    <div className="flex flex-col gap-[3.75rem] mt-[10rem] text-center">
      <div>
        <h1 className={`${classes.headerTitle} font-unbounded`}>
          Bienvenue {registrationData.companyName}!
        </h1>
        <p className={`${classes.headerText} font-red-hat`}>
          Compte créé avec succès
        </p>
      </div>
      <div className="w-[26.75rem]">
        <p className={`${classes.subHeaderText}`}>
          Pour commencer, veuillez compléter la
          configuration de votre profil.
        </p>
      </div>
      <div>
        <Button size="large" variant="moba6an" onClick={() => goToNextStep()}>
          Configurer mon profil !
        </Button>
      </div>
    </div>
  );
};

const ProfileStep2 = () => {
  const { registrationData, goToNextStep, updateData } = useEmployerRegistration();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const stepData = {
      bio: formData.get("bio") as string,
      portfolio: formData.get("portfolio") as string,
    };
    
    goToNextStep();
  };
  return (
    <div className="flex flex-col gap-[3.75rem]">
      <div className="text-center">
        <h1 className={`${classes.headerTitle} font-unbounded`}>
          Configuration de votre profil
        </h1>
        <p className={classes.headerText}>L’apparence de votre profil.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-[2.5rem]">
          <img src={defaultPic} alt="" />
          <div className="">
            <h1 className="text-[2rem] font-bold font-unbounded">
              {registrationData.companyName}
            </h1>
            
            <h2 className="test-[1.875rem] font-red-hat">
              {registrationData.sector}
            </h2>
          </div>
        </div>
      </div>
      <form
        id="profileForm"
        className="flex flex-col gap-[1.875rem] items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="bio"
          placeholder="À propos de moi…"
          className={`${classes.largeInput} h-[6.875rem]`}
        />
        <input
          type="text"
          name="portfolio"
          placeholder="Lien du site web officiel"
          className={`${classes.largeInput}`}
        />
      </form>
      <div className="flex justify-center">
        <Button size="large" variant="moba6an" type="submit" form="profileForm">
          Continuer
        </Button>
      </div>
    </div>
  );
};