import React from "react";

function Register() {
    return (<>
        <div className="flex rounded justify-center items-center h-screen bg-[url(./resource/start_bg.svg)]">
            <div className="bg-[#36393f] p-10 border rounded-xl border-none">
                <h1 className="text-2xl font-bold text-white mb-5">Create an account</h1>
                <header className="text-[#b9bbbe]">EMAIL</header>
                <input className="h-9 w-96 mb-1 mt-1.5 bg-[#2f3136] border border-[#202225] text-[#b9bbbe]" type="email"></input>
                <header className="text-[#b9bbbe]">USERNAME</header>
                <input className="h-9 w-96 mb-1 mt-1.5 bg-[#2f3136] border border-[#202225] text-[#b9bbbe]" type="text"></input>
                <header className="text-[#b9bbbe]">PASSWORD</header>
                <input className="h-9 w-96 mb-1 mt-1.5 bg-[#2f3136] border border-[#202225] text-[#b9bbbe]" type="password"></input>
                <button className="block border border-none w-full h-11 bg-[#5865f2] mt-8 text-white">Continue</button>
                <a href="/Login" className="block text-[#00b0f4] text-sm mt-4">Already have an account?</a>
            </div>
        </div>
    </>)
}

export default Register