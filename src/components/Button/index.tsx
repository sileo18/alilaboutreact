import React, { Children } from "react";

interface ButtonProps {
    children: string,
    type: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Button({children, type, onClick}: ButtonProps) {   

        const isTrue = true
        

        return (
            <button onClick={onClick} type={type} className={ isTrue ? "bg-green-600" : "bg-red-600"}>
                {children}
            </button>
        )   
}

