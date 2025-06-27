import { FaExclamationTriangle, FaDatabase, FaCogs } from "react-icons/fa";

export default function WorkingProcess() {
    return (
        <div>
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-pink-500">Work Process</h2>
                <h1 className="text-5xl font-bold">How Do We Work</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10">

                {/* Step 1 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="relative">
                        <div className="bg-pink-500 rounded-xl p-10 shadow-lg">
                            <FaExclamationTriangle className="text-white text-4xl" />
                        </div>
                        <div className="absolute -top-3 -right-3 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow text-pink-500 font-bold">
                            01
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mt-4">Project Kick-Off</h3>
                    <p className="text-gray-600 mt-2">
                        At Genmorphics AI Solutions, We begin with a detailed consultation to understand your specific LLM project goals.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="relative">
                        <div className="bg-pink-500 rounded-xl p-10 shadow-lg">
                            <FaDatabase className="text-white text-4xl" />
                        </div>
                        <div className="absolute -top-3 -right-3 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow text-pink-500 font-bold">
                            02
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mt-4">Meticulous Annotation</h3>
                    <p className="text-gray-600 mt-2">
                        Your project is assigned to a dedicated team of highly trained and experienced annotators who are well-versed in the nuances of LLM training data.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center max-w-xs">
                    <div className="relative">
                        <div className="bg-pink-500 rounded-xl p-10 shadow-lg">
                            <FaCogs className="text-white text-4xl" />
                        </div>
                        <div className="absolute -top-3 -right-3 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow text-pink-500 font-bold">
                            03
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mt-4">Quality Assurance & Delivery</h3>
                    <p className="text-gray-600 mt-2">
                        Our data undergoes rigorous multi-stage quality checks to guarantee accuracy and consistency.
                    </p>
                </div>

            </div>
        </div>
    );
}
