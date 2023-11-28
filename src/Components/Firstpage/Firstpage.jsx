import React from "react";

function Firstpage() {
    return (
        <div className="w-screen bg-zinc-900 h-screen flex justify-center items-center">
            <div className="px-8 py-32">
                <div className="grid gap-8 items-start justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <button className="relative px-10 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                            <span className="flex items-center space-x-5">
                                <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent font-bold text-xl">ALEN BABUu</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Firstpage;

