import React from "react"
import Qrcode from "./resource/Qr_code.svg"

function Login() {
    return (<>
        <div className="flex rounded justify-center items-center h-screen bg-[url(./resource/start_bg.svg)]">
            <div className="flex bg-[#3b4049] p-10 border rounded-xl border-[#3b4049]">
                <div className="pr-5">
                    <h1 className="text-xl font-bold text-white">Welcome Back!</h1>
                    <h3 className="text-[#b9bbbe]">We're so excited to see you again!</h3>
                    <div className="pt-4 pb-4">
                        <label className="block text-sm text-[#b9bbbe]">EMAIL</label>
                        <input type="email" className="h-9 w-80 mb-1 mt-1.5 bg-[#2f3136] border border-[#202225] text-[#b9bbbe]"></input>
                        <label className=" block pt-3 text-sm text-[#b9bbbe]">PASSWORD</label>
                        <input type="password" className="h-9 w-80 mb-1 mt-1.5 bg-[#2f3136] border border-[#202225] text-[#b9bbbe]"></input>
                    </div>
                    <div className="pb-4">
                        <a href="#" className="text-[#5865f2]">Forgot your password?</a>
                    </div>
                    <button className="block border border-solid px-20 py-2 text-white bg-[#5865f2] border-[#5865f2]">Login</button>
                    <div className="flex pt-1">
                        <p className="text-[#b9bbbe] pr-1">Need an account?</p>
                        <a href="/Signup" className="text-[#5865f2]" id="register">Register</a>
                    </div>
                </div>
                <div className="text-[#b9bbbe]">
                    <img src={Qrcode} alt="QrCode" />
                    <h1 className="text-2xl text-white pb-7">Log in with QR Code</h1>
                    <p>Scan this with the <b>Discord mobile app</b></p>
                    <p>to Log in instantly</p>
                </div>
            </div>
        </div>
    </>)
}

export default Login