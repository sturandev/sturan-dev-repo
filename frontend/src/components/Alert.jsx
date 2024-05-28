"use client"
import { useEffect, useState } from "react";

const Alert = () => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false);
            window.location.reload()
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {isOpen && (
                <div className="bg-color-red text-center py-4 lg:px-4 relative border-b-2 alert-toast">
                    <div
                        className="p-2 bg-color-red items-center text-color-white leading-none lg:rounded-full flex lg:inline-flex"
                        role="alert"
                    >
                        <span className="font-semibold mr-2 text-left flex-auto">
                            Champagne is close, Stay tuned for more champagne
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Alert;