"use client"
import { useEffect, useState } from "react";

const Pending = () => {
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
                <div className="bg-color-secondary text-center py-4 lg:px-4 relative border-b-2 alert-toast">
                    <div
                        className="p-2 bg-color-secondary items-center text-color-white leading-none lg:rounded-full flex lg:inline-flex"
                        role="alert"
                    >
                        <span className="font-semibold mr-2 text-left flex-auto">
                            Champagne is pending, wait until we open the champagne open again
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Pending;