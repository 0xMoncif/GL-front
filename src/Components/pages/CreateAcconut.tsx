import { SignUpHeader } from "../sections/signUpHeader"
import { Button } from "@components";
import { ProgressBar } from "../layout/progressBar";
import { useStep } from "../../contexts/StepContext";

const baseInputClass = 'pl-[1.875rem] bg-[#F9F7F3] bg-opacity-[1%] rounded-[1.25rem] border-[1px] border-[#1F1F1F] border-opacity-[10%]'

const classes = {
    container: "min-h-screen font-unbounded",

    // main 
    mainContainer : '',

    // header
    headerContainer : 'text-center mt-[2.2rem]',
    headerTitle : 'text-[2.5rem] text-[#DCA934] font-extrabold',
    headerText : 'text-[1.25rem] text-opacity-[60%] text-[#1F1F1F] font-red-hat',

    //form
    formContainer :'flex justify-center items-center mt-[3.75rem] text-[1.25rem] font-red-hat text-[#1F1F1F] text-opacity-[20%]',
    form : 'flex flex-col gap-[1.875rem]',
    nameInputontainer : 'flex gap-[1.25rem]',
    nameInput : `${baseInputClass} w-[13.56rem] h-[4.38rem] `,
    emailInput : `${baseInputClass} w-[28.44rem] h-[4.38rem]`
}



export const CreateAcconut = ()=>{

    const { goToNextStep, currentStep, totalSteps } = useStep();

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data:", data);
        
        // Just increase step to see animation
        goToNextStep();
        
        // Optional: Reset when at last step
        if (currentStep === totalSteps) {
            console.log("Reached last step, but continuing to test animation");
            // You could reset here if you want:
            // goToStep(1);
        }
    };

    return (
        <div className={classes.container}>
            <SignUpHeader navigationUrl="/Sign-up" />

            <main className={classes.mainContainer}>
                <header className={classes.headerContainer}>
                    <h1 className={classes.headerTitle}>Créer un compte</h1>
                    <p className={classes.headerText}>Vos informations personnelles</p>
                </header>

                <div className={classes.formContainer}>
                    <form className={classes.form} onSubmit={handleSubmit} >
                        <div className={classes.nameInputontainer}>
                            <input type="text" name="first-name" required className={classes.nameInput} placeholder="Prénom" style={{ 
                                    color: '#1F1F1F',
                                }}  />
                            <input type="text" name="last-name" required className={classes.nameInput} placeholder="Nom" style={{ 
                                    color: '#1F1F1F',
                                }} />
                        </div>
                        <input type="email" name="email" required placeholder="Email" className={classes.emailInput} style={{ 
                                    color: '#1F1F1F',
                                }} />
                        <Button variant="moba6an" size="large" type="submit">
                            Continuer
                        </Button>
                    </form>
                </div>
                <div className="flex justify-center gap-[1.25rem] mt-[5.25rem]">
                    <ProgressBar content="Informations personnelles" />
                    <ProgressBar content="Informations personnelles" />
                </div>
            </main>

        </div>
    )
}