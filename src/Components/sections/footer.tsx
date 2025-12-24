import logo from '@/assets/logo-footer.png'

export const Footer  = ()=>{
    return(
        <footer className=' flex  items-center h-[20.69rem] rounded-t-[1.875rem] shadow-[0_-4px_20px_rgba(0,0,0,0.25)]'>
            <div>
                <img src={logo} alt="" className='h-[11.5rem] w-[9rem]' />
            </div>
            <div>
               
            </div>
        </footer>
    )
}