"use client";
import Image from "next/image";

import { useState } from "react";

export default function OurResorces() {
    const [activeTab, setActiveTab] = useState("Creative Writing");

    const tabs = ["Creative Writing", "Software Engineers", "AI Engineers", "Stem Experts"];

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-5xl mx-auto text-center">
                <h4 className="text-pink-500 font-semibold mb-2">OUR RESOURCES</h4>
                <h2 className="text-3xl font-bold mb-8">Resources We Have</h2>

                {/* Tabs */}
                <div className="flex justify-center space-x-6 relative">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-md font-medium ${activeTab === tab
                                ? "bg-pink-500 text-white shadow"
                                : "text-gray-700 hover:text-pink-500"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="mt-12 bg-white mx-4 md:mx-auto md:max-w-5xl p-10 shadow rounded border-t-4 border-pink-500 flex flex-col md:flex-row items-center gap-10">

                {/* Left Text */}
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Creative Writers</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Our creative writers possess a deep understanding of language nuances, enabling them to craft clear and consistent annotations, especially for tasks involving sentiment analysis, text summarization, or chatbot development.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <Image
                        src='/img/ourResorces.png'
                        width={500}
                        height={400}
                        alt="Creative Writers Illustration"
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
}
