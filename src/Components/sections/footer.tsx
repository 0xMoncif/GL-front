import logo from '@/assets/logo-footer.png'

export const Footer = () => {
    // Reusable style variables
    const headerStyle = 'text-[1.25rem] font-bold mb-3';
    const linkStyle = 'text-[1.25rem] hover:text-[#DCA934] transition-colors';
    const columnStyle = 'flex flex-col gap-4';
    
    return (
        <footer className='flex items-start pt-[3rem] h-auto min-h-[20.69rem] rounded-t-[1.875rem] shadow-[0_-4px_20px_rgba(0,0,0,0.25)] px-[3.875rem] pb-[2rem]'>
            {/* Logo Section */}
            <div className='flex flex-col items-center gap-[0.77rem] flex-shrink-0 mr-[7.4375rem]'>
                <div className='px-[3.4rem]'>
                    <img src={logo} alt="" className='h-[11.5rem] w-[9rem]' />
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='text-[2rem] text-[#DCA934] font-[600]'>DZ Stagiaire</h2>
                    <p className='text-[1rem] font-red-hat'>Copyright © 2025</p>
                </div>
            </div>
            
            {/* Content Sections */}
            <div className='flex gap-[6.25rem] flex-1 font-red-hat pt-[1rem]'>
                {/* First Column - Entreprise */}
                <div className={`${columnStyle} mr-[2.5rem]`}>
                    <h3 className={headerStyle}>Entreprise</h3>
                    <a href="#" className={linkStyle}>Publier des offres</a>
                    <a href="#" className={linkStyle}>Consulter les candidatures</a>
                    <a href="#" className={linkStyle}>Modifier des offres</a>
                    <a href="#" className={linkStyle}>Suivre les statistiques</a>
                    
                </div>
                
                {/* Second Column - Étudiant */}
                <div className={`${columnStyle} mr-[4.375rem]`}>
                    <h3 className={headerStyle}>Étudiant</h3>
                    <a href="#" className={linkStyle}>Gérer son CV</a>
                    <a href="#" className={linkStyle}>Rechercher des offres</a>
                    <a href="#" className={linkStyle}>Postuler</a>
                    <a href="#" className={linkStyle}>Suivre ses candidatures</a>
                </div>
                
                {/* Third Column - Aide */}
                <div className={columnStyle}>
                    <h3 className={headerStyle}>Aide</h3>
                    <a href="#" className={linkStyle}>À propos de nous</a>
                    <a href="#" className={linkStyle}>Comment ça fonctionne</a>
                    <a href="#" className={linkStyle}>Assistance et support</a>
                    
                </div>
            </div>
        </footer>
    )
}