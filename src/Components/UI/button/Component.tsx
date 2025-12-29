import type { ButtonProps } from "./button.type";

//{children,onCLick,disabled,variant,size}: ButtonProps
export const Button = ({
  children,
  variant = "mo9a3ar",
  size = "small",
  disabled = false,
  onClick,
  type= 'button',
  onHover,
  className,
}: ButtonProps) => {
  const baseButtonClasses: string = "rounded-2xl font-unbounded ";

  const buttonVariants = {
    mo9a3ar: "border-[2.5px] border-[#DCA934]  text-[#DCA934]", // will remove the shadow later just for testing now and add it only to the sign up button
    moba6an:
      "bg-[#DCA934] text-white  border-none",
    mo9a3arWhite: " text-white border-[2.5px] border-white",
  };

  const buttonSizes = {
    small:
      "w-[8.315rem] h-[3.38rem] text-[1.13rem] font-[500] hover:-translate-y-1.5 hover:shadow-[0_8px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out",
    medium: "w-[21.81rem] h-[4.5rem] text-[1.25rem] font-[700] hover:-translate-y-1.5 hover:shadow-[0_8px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out",
    large: "w-[28.43rem] h-[4.375rem] text-[1.5rem] font-[800] hover:-translate-y-1.5 hover:shadow-[0_8px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out",
  };
  return (
    <button
      className={`${className} ${buttonVariants[variant]} ${buttonSizes[size]} ${baseButtonClasses}`}
      onClick={onClick}
      onMouseOver={onHover}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
