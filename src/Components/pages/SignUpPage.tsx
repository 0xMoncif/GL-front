import { SignUpHeader } from "../sections/signUpHeader";
import student from "@assets/student.png";
import employer from "@assets/employer.png";
import { useNavigate } from "react-router-dom";


const classes = {
  // Layout spacing
  container: "min-h-screen font-unbounded",

  // Logo styling
  logoContainer: "flex items-center gap-[1rem] pt-[1.0625rem] pl-[1.4375rem]",
  logoText: "text-[1rem] font-extrabold ",

  // Return link styling
  returnContainer: "flex pl-[19rem] mt-[3.3rem]",
  returnLink: "inline-flex items-center gap-2 text-[1rem] text-[#1F1F1F] cursor-pointer font-bold transition-all duration-300 ease-out group",
  returnArrow: "transition-all duration-300 ease-out group-hover:scale-125 group-hover:mr-2",

  // Header section
  headerContainer: "mt-[10.25rem] text-center",
  headerTitle: "text-[2.5rem]  font-extrabold text-[#DCA934]",
  headerSubtitle:
    "mt-2 text-[1.25rem] text-opacity-[60%] text-black font-red-hat",

  // Cards container
  cardsContainer: "flex justify-center items-center gap-[1.8rem] mt-[9rem]",
  card: "w-[28.44rem] h-[11.63rem] rounded-[2.5rem] bg-[#F9F7F3] px-[3rem] pt-[2rem] border-[1px] border-[#1F1F1F] border-opacity-[10%]  cursor-pointer transition-all duration-300 ease-in-out",
  cardHover: "hover:bg-[#DCA934] hover:text-white group",

  cardHeader: "mb-[1.5rem]",
  cardHeaderTitle: "text-[2rem]  font-extrabold",
  cardContent: "",
  cardContentText: "font-red-hat text-[1.25rem]",

  image : 'absolute w-[36rem] h-[20rem] -z-10 top-[-35%] opacity-0 pointer-events-none transition-all duration-[700ms] ease-in-out group-hover:opacity-100 ',
  studentImage : 'left-[20%] transition-all duration-[700ms] group-hover:translate-x-[30%]',
  EmployerImage : 'right-[20%]  transition-all duration-[700ms] group-hover:-translate-x-[30%]'
};

export const SignUpPage = () => {
  
  const navigate = useNavigate();
  
  const cardsData = [
    {
      id: 1,
      title: "je suis Employeur",
      description:
        "Publier vos offres, gérer les candidatures, et cibler vos annonces.",
      image: employer,
      imageClasses: `${classes.image} ${classes.EmployerImage} `,
      navigationUrl : '/'
    },
    {
      id: 2,
      title: "je suis Étudiant",
      description:
        "Créer votre CV, rechercher et postuler aux offres, et suivre vos candidatures.",
      image: student,
      imageClasses: `${classes.image} ${classes.studentImage} `,
      navigationUrl : '/Create-Account'
    },
  ];

  return (
    <div className={classes.container}>
      <SignUpHeader navigationUrl= '/' />

      {/* Main content */}
      <main className="">
        <header className={classes.headerContainer}>
          <h1 className={classes.headerTitle}>Bienvenue sur DZ-Stagiaire!</h1>
          <p className={classes.headerSubtitle}>
            Quel est votre objectif ici ?
          </p>
        </header>

        {/* Cards section */}
        <div className={classes.cardsContainer}>
          {cardsData.map((card) => (
            <div  key={card.id} className="relative group">
              <div
                className={`${classes.card} ${classes.cardHover}`}
                onClick={() => navigate(card.navigationUrl)}
              >
                <div className={classes.cardHeader}>
                  <h3 className={classes.cardHeaderTitle}>{card.title}</h3>
                </div>
                <div className={classes.cardContent}>
                  <p className={classes.cardContentText}>{card.description}</p>
                </div>
              </div>
              <img src={card.image} alt="" className={`${card.imageClasses}`} />

            </div>
          ))}
        </div>
      </main>
    </div>
  );
};