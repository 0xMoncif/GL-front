import logo from "@/assets/logo.svg";
import student from '@assets/student.png';
import employer from '@assets/employer.png';

const classes = {
  // Layout spacing
  container: 'min-h-screen font-unbounded',
  
  // Logo styling
  logoContainer: 'flex items-center gap-[1rem] pt-[1.0625rem] pl-[1.4375rem]', 
  logoText: 'text-[1rem] font-extrabold ',
  
  // Header section
  headerContainer: 'mt-[17.5rem] text-center', 
  headerTitle: 'text-[2.5rem] md:text-4xl font-extrabold text-[#DCA934]',
  headerSubtitle: 'mt-2 text-[1.25rem] text-opacity-[60%] text-black font-red-hat',
  
  // Cards container
  cardsContainer: 'flex justify-center items-center gap-[1.8rem] mt-[9rem]', 
  card: 'w-[28.44rem] h-[11.63rem] rounded-[2.5rem] bg-[#F9F7F3] px-[3rem] pt-[2rem] border-[1px] border-[#1F1F1F] border-opacity-[10%]  cursor-pointer transition-all duration-300 ease-in-out',
  cardHover: 'hover:bg-[#DCA934] hover:text-white group',


  cardHeader: 'mb-[1.5rem]',
  cardHeaderTitle: 'text-[2rem]  font-extrabold',
  cardContent: '',
  cardContentText: 'font-red-hat text-[1.25rem]',
};

export const SignUpPage = () => {
  const cardsData = [
    {
      id: 1,
      title: 'je suis Employeur',
      description: 'Publier vos offres, gérer les candidatures, et cibler vos annonces.',
    },
    {
      id: 2,
      title: 'je suis Étudiant',
      description: 'Créer votre CV, rechercher et postuler aux offres, et suivre vos candidatures.',
    },
  ];

  return (
    <div className={classes.container}>
      {/* Logo in top left */}
      <div className={classes.logoContainer}>
        <img src={logo} alt="Logo" className="w-[2.44rem] h-[3.13rem]"  />
        <div className={classes.logoText}>DZ <span className='text-[#DCA934] font-semibold'>Stagiaire</span></div>
      </div>

      {/* Main content */}
      <main className="">
        
        <header className={classes.headerContainer}>
          <h1 className={classes.headerTitle}>
            Bienvenue sur DZ-Stagiaire!
          </h1>
          <p className={classes.headerSubtitle}>
            Quel est votre objectif ici?
          </p>
        </header>

        {/* Cards section */}
        <div className={classes.cardsContainer}>
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`${classes.card} ${classes.cardHover}`}
              onClick={() => console.log(`Selected: ${card.title}`)}
            >
              <div className={classes.cardHeader}>
                <h3 className={classes.cardHeaderTitle}>{card.title}</h3>
              </div>
              <div className={classes.cardContent}>
                <p className={classes.cardContentText}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

