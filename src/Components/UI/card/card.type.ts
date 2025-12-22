import type { BaseProps } from "@/types";

type CardVarient = "orange" | "purple" | "cyan" | "lime"

export interface CardProps extends BaseProps{
    variant : CardVarient;
}