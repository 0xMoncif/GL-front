import type { ButtonProps } from "./button.type";

//{children,onCLick,disabled,variant,size}: ButtonProps
export const Button = ({
  children,
  variant = "mo9a3ar",
  size = "small",
  disabled = false,
  onCLick,
  onHover,
  className,
}: ButtonProps) => {
  const baseButtonClasses: string = "rounded-2xl";

  const buttonVariants = {
    mo9a3ar: "bg-white border-[2.5px] border-[#DCA934]  text-[#DCA934]", // will remove the shadow later just for testing now and add it only to the sign up button
    moba6an:
      "bg-[#DCA934] text-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-none",
    mo9a3arWhite: " text-white border-[2.5px] border-white",
  };

  const buttonSizes = {
    small:
      "w-[133px] h-[54px] text-[18px] font-[500] hover:-translate-y-1.5 hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out",
    medium: "w-[349px] h-[72px] text-[20px] font-[700]",
    large: "w-[455px] h-[70px] text-[24px] font-[800]",
  };
  return (
    <div className="bg-[#DCA934]">
      <button
        className={`${className} ${buttonVariants[variant]} ${buttonSizes[size]} ${baseButtonClasses}`}
        onClick={onCLick}
        onMouseOver={onHover}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};
