import { X } from "@phosphor-icons/react";

const CardSubmit = ({ onClose }) => {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                <div className="relative bg-color-primary max-w-sm rounded overflow-hidden shadow-lg bg-white backdrop-filter-none">
                    <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white rounded-full px-2 py-1"><X size={32} /></button>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Enter your XTR Amount</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatibus quia, nulla! Maiores et perferendis eaque,
                            exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <input
                            className="border-[1px] rounded-lg border-opacity-10 border-color-gray"
                            placeholder="Input Number"
                        />
                        <button className="ml-3 p-2 bg-color-typography rounded-full font-semibold">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardSubmit;
