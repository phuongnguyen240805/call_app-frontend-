import React from "react";

function Button({ children, primary, className = "", ...props }) {
    const baseClass = "btn";
    const primaryClass = primary ? "btn-primary" : "btn-ghost";
    const combinedClass = [baseClass, primaryClass, className].filter(Boolean).join(" ");

    return (
        <button className={combinedClass} {...props}>
            {children}
        </button>
    );
}

export default Button;