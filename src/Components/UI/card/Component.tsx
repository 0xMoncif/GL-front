import type { CardProps } from "./card.type";
import PostAddIcon from '@mui/icons-material/PostAdd';
import ArchiveIcon from '@mui/icons-material/Archive';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AdjustIcon from '@mui/icons-material/Adjust';
const CardVariantIcon = {
    orange : PostAddIcon,
    purple : ArchiveIcon,
    cyan : PersonSearchIcon,
    lime : AdjustIcon
}

const cardData = {
        orange : {
            header : 'Publier des offres',
            content : 'Créer et mettre en ligne des annonces de stage, PFE ou emploi.'
        },
        purple : {
            header : 'Archiver des offres',
            content : 'Mettre à jour les informations ou désactiver une offre à tout moment.'
        },cyan : {
            header : 'Consulter les candidatures',
            content : 'Accèder aux profils et CV des étudiants qui ont postulé.'
        },lime : {
            header : 'Cibler les offres',
            content : 'rendre certaines offres visibles uniquement pour des établissements spécifiques.'
        },
    }

export const Card = ({
    className,
    variant,
}: CardProps) => {

    const IconComponent = CardVariantIcon[variant];
    const CardVarientClasses = {
        orange : "bg-[#DCA934] bg-opacity-[27%] border-[#DCA934] border-opacity-[27%] text-[#DCA934] text-opacity-[67%]",
        purple : "bg-[#9747FF]  bg-opacity-[21%] border-[#9747FF] border-opacity-[58%] text-[#8A38F5] text-opacity-[58%]",
        cyan : "bg-[#AFD7FF] bg-opacity-[55%] border-[#0A82FA]  border-opacity-[50%] text-[#0A82FA] text-opacity-[50%]",
        lime : "bg-[#70DA43] bg-opacity-[13%] border-[#70DA43]  border-opacity-[44%] text-[#70DA43] text-opacity-[44%]"
    }
    
    const baseCardClass = "w-[21.81rem] h-[18.75rem] rounded-[1rem] border-[2px] pt-[2.13rem] pb-[2.13rem] px-[1.88rem] ";

    
    const data = cardData[variant]

    return(
        <div className={`${baseCardClass} ${CardVarientClasses[variant]} ${className || ''}`}>
            <div className="flex flex-col gap-[1.19rem]">
            <IconComponent sx={{
                width: '1.875rem',
                height: '1.875rem'
            }} />

            <h2 className="text-[2rem] font-extrabold leading-tight ">
                {data.header}
            </h2>
            
            <p className="text-[1.2rem] tracking-[2%] text-black font-red-hat leading-[1.75rem]  ">
             {data.content}
            </p>    
           
            
            
            </div>
        </div>
    )
};