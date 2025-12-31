import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpHeader } from "../sections/signUpHeader";
import { Button } from "@components";
import { ProgressBar } from "../layout/progressBar";
import { useRegistration } from "../../contexts/RegistrationContext";

const baseInputClass =
  "pl-[1.875rem] bg-[#F9F7F3] bg-opacity-[1%] rounded-[1.25rem] h-[4.38rem] border-[1px] border-[#1F1F1F] border-opacity-[10%] placeholder:text-[#1F1F1F] placeholder:opacity-[40%] cursor-text";

const classes = {
  container: "min-h-screen font-unbounded",

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

type Domain = string;

type Field = {
  id: number;
  field: string;
  domains: Domain[];
};

const testData: Field[] = [
  {
    id: 1,
    field: "Développement web",
    domains: ["front end", "backend", "devops"],
  },
  { id: 2, field: "Design", domains: ["UI/UX", "Graphics", "3D"] },
  { id: 3, field: "multimedia", domains: ["video editing", "scipt writing"] },
  {
    id: 4,
    field: "data analyste",
    domains: ["databases", "datastuff", "kekw"],
  },{
    id: 5,
    field: "data bababoi",
    domains: ["databases", "datastuff"],
  },
];

export const CreateAcconut = () => {
  const navigate = useNavigate();
  const { currentPhase, currentStep, registrationData, goToPrevStep } =
    useRegistration();
  useEffect(() => {
    console.log("🔄 Registration data changed:", registrationData);
  }, [registrationData]);

  return (
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
            <p className={classes.headerText}>Vos informations personnelles</p>
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
          <ProgressBar content="Informations personnelles" phase="account" />
          <ProgressBar content="Configurer votre profil" phase="profile" />
        </div>
      </main>
    </div>
  );
};

const AccountStep1 = () => {
  const { goToNextStep, currentPhase, currentStep, updateData } =
    useRegistration();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const stepData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
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
          name="firstName"
          required
          className={classes.nameInput}
          placeholder="Prénom"
          style={{
            color: "#1F1F1F",
          }}
        />
        <input
          type="text"
          name="lastName"
          required
          className={classes.nameInput}
          placeholder="Nom"
          style={{
            color: "#1F1F1F",
          }}
        />
      </div>
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
      <Button variant="moba6an" size="large" type="submit">
        Continuer
      </Button>
    </form>
  );
};

const AccountStep2 = () => {
  const { goToNextStep, currentPhase, currentStep, updateData } =
    useRegistration();

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
      <Button variant="moba6an" size="large" type="submit">
        Continuer
      </Button>
    </form>
  );
};

const AccountStep3 = () => {
  const { goToNextStep, updateData, goToPrevStep } = useRegistration();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const schools = [
    { id: "1", name: "École Nationale d'Informatique (ENI)" },
    {
      id: "2",
      name: "Université des Sciences et de la Technologie Houari Boumediene (USTHB)",
    },
    { id: "3", name: "École Supérieure d'Informatique (ESI)" },
    {
      id: "4",
      name: "Institut National des Télécommunications et des TIC (INTTIC)",
    },
    { id: "5", name: "École Nationale Polytechnique (ENP)" },
    { id: "6", name: "Université d'Alger 1 Benyoucef Benkhedda" },
    { id: "7", name: "Université d'Alger 2 Abou El Kacem Saâdallah" },
    { id: "8", name: "Université d'Alger 3 Brahim Soltane Chaibout" },
    { id: "9", name: "École Normale Supérieure (ENS)" },
    { id: "10", name: "École Nationale de Commerce (ENC)" },
    {
      id: "11",
      name: "Institut d'Optique et de Mécanique de Précision (IOMP)",
    },
    {
      id: "12",
      name: "École Nationale de la Statistique et de l'Économie Appliquée (ENSEA)",
    },
    { id: "13", name: "Université de Constantine 1 Frères Mentouri" },
    { id: "14", name: "Université d'Oran 1 Ahmed Ben Bella" },
    { id: "15", name: "Université de Béjaïa" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedSchool) {
      alert("Veuillez sélectionner une école!");
      return;
    }

    const stepData = {
      schoolId: selectedSchool.id,
    };

    console.log("Step 3 Data:", stepData);
    updateData(stepData);
    goToNextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[1.875rem]">
      {/* Custom dropdown */}
      <div className="relative" ref={dropdownRef}>
        {/* Input field that looks like your other inputs */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`
            ${classes.largeInput} 
            flex items-center justify-between pr-[1.875rem] 
            cursor-pointer transition-all duration-200
            ${isOpen ? "border-[#DCA934] border-opacity-100" : ""}
          `}
        >
          <span
            className={
              selectedSchool ? "text-[#1F1F1F]" : "text-[#1F1F1F] opacity-40"
            }
          >
            {selectedSchool
              ? selectedSchool.name
              : "Choisissez votre institution"}
          </span>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className="
              absolute top-full left-0 right-0 mt-2 
              border border-[#1F1F1F] border-opacity-[10%] 
              rounded-[1.25rem] bg-white 
              max-h-[15rem] overflow-hidden
              shadow-lg z-10
            "
          >
            {/* Scrollable container with inline scrollbar styles */}
            <div
              className="max-h-[15rem] overflow-y-auto"
              style={{
                scrollbarWidth: "thin" as const,
                scrollbarColor: "#DCA934 #D9D9D9",
              }}
            >
              {schools.map((school) => (
                <div
                  key={school.id}
                  onClick={() => {
                    setSelectedSchool(school);
                    setIsOpen(false);
                  }}
                  className={`
                    pl-[1.875rem] pr-4 py-4 
                    cursor-pointer transition-all duration-150
                    hover:bg-[#DCA934] hover:bg-opacity-10
                    ${
                      selectedSchool?.id === school.id
                        ? "bg-[#DCA934] bg-opacity-20"
                        : ""
                    }
                    border-b border-[#1F1F1F] border-opacity-[10%] last:border-b-0
                  `}
                >
                  <div className="flex items-center">
                    <div
                      className={`
                      w-3 h-3 rounded-full mr-3 
                      ${
                        selectedSchool?.id === school.id
                          ? "bg-[#DCA934]"
                          : "bg-[#D9D9D9] bg-opacity-60"
                      }
                    `}
                    />
                    <span className="font-red-hat text-[1.25rem] text-[#1F1F1F]">
                      {school.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add WebKit scrollbar styles globally */}
        <style>{`
          .overflow-y-auto::-webkit-scrollbar {
            width: 6px;
          }
          .overflow-y-auto::-webkit-scrollbar-track {
            background: #D9D9D9;
            opacity: 0.6;
            border-radius: 3px;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: #DCA934;
            border-radius: 3px;
          }
        `}</style>

        {/* Hidden input for form submission */}
        <input
          type="hidden"
          name="schoolId"
          value={selectedSchool?.id || ""}
          required
        />
      </div>

      {/* Navigation buttons */}
      <div
        className={`transition-all duration-200 ${
          isOpen ? "mt-[17rem]" : "mt-0"
        }`}
      >
        <Button variant="moba6an" size="large" type="submit">
          Continuer
        </Button>
      </div>
    </form>
  );
};

const ProfileStep1 = () => {
  const { registrationData, goToNextStep } = useRegistration();
  return (
    <div className="flex flex-col gap-[3.75rem] mt-[10rem] text-center">
      <div>
        <h1 className={`${classes.headerTitle} font-unbounded`}>
          Bienvenue {registrationData.firstName}!
        </h1>
        <p className={`${classes.headerText} font-red-hat`}>
          Compte créé avec succès
        </p>
      </div>
      <div className="w-[37.2rem]">
        <p className={classes.subHeaderText}>
          Votre compte a été créé avec succès ! Pour commencer à travailler,
          nous devons configurer votre profil.
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
  // State type
  const [selectedFieldId, setSelectedFieldId] = useState<number | null>(null);

  // Find selected field
  const selectedField: Field | undefined = testData.find(
    (field) => field.id === selectedFieldId
  );
  return (
    <div className="flex flex-col gap-[3.75rem]">
      <div className="text-center">
        <h1 className={`${classes.headerTitle} font-unbounded`}>
          Configuration de votre profil
        </h1>
        <p className={classes.headerText}>Choisissez vos compétences</p>
      </div>
      <div className="flex gap-[5rem]">
        <div className="flex flex-col">
          <ul className="flex flex-col gap-[0.625rem]">
            {testData.map((field) => (
              <li
                key={field.id}
                className="
              bg-[#F9F7F3] rounded-[1.25rem] 
              py-3 px-6 
              text-[0.875rem] font-bold font-unbounded
              cursor-pointer transition-all duration-200
              min-w-[8rem] w-fit 
               hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]
            "
                onClick={() => setSelectedFieldId(field.id)}
              >
                {field.field}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          {selectedField ? (
            <ul className="grid grid-cols-2 gap-[0.625rem] auto-rows-min">
              {selectedField.domains.map((domain: Domain, index: number) => (
                <li
                  key={index}
                  className={`
                  bg-[#F9F7F3] rounded-[1.25rem] 
                  py-3 px-6
                  text-[0.875rem] font-bold font-unbounded
                  cursor-pointer transition-all duration-200
                  min-w-[8rem]
                  hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]
                  w-full and add flex items-center justify-center
                  ${domain.length > 15 ? 'col-span-2' : ''}
                `}
                >
                  {domain}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 italic">
              Cliquez sur un domaine à gauche pour voir ses spécialités
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
