import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
interface TooltipProps {
    children: React.ReactNode;
    message: string;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}

const TooltipProvider = TooltipPrimitive.Provider;
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function Tooltip({
                            children,
                            message,
                            side = "top",
                            align = "center"
                        }: TooltipProps) {
    return (
        <TooltipProvider delayDuration={0}>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        side={side}
                        align={align}
                        className={cn(
                            "z-50 overflow-hidden rounded-md bg-[#111] px-3 py-1.5",
                            "text-xs text-white animate-in fade-in-0",
                            "duration-100"
                        )}
                    >
                        {message}
                        <TooltipPrimitive.Arrow className="fill-backgroundneutral-200-night"/>
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipProvider>
    );
}