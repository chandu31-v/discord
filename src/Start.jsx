import React from "react";
import Logo from "./resource/logo.svg"
import Start_bg1 from "./resource/start_bg1.svg"
import Start_bg2 from "./resource/start_bg2.svg"
import Start_bg3 from "./resource/start_bg3.svg"
import Start_bg4 from "./resource/start_bg4.svg"
import Start_bg5 from "./resource/start_bg5.svg"
import Map from "./resource/map.png"
import Twitter from "./resource/Social/twitter.svg"
import Instagram from "./resource/Social/instagram.svg"
import Youtube from "./resource/Social/youtube.svg"
import Facebook from "./resource/Social/facebook.svg"
import {useNavigate} from "react-router-dom"


function Start() {
    const navigate = useNavigate()

    return (<>
        <div className="bg-[#404eed] min-h-screen max-w-screen bg-[url(./resource/start_bg.svg)]">
            <header className="flex min-w-full">
                <img className="px-28 py-2.5" src={Logo} alt="Discord" />
                <div className="text-white w-3/5 py-4 text-center text-[16px]">
                    <button className="px-3">Download</button>
                    <button className="px-3">Nitro</button>
                    <button className="px-3">Safety</button>
                    <button className="px-3">Support</button>
                    <button className="px-3">Blog</button>
                    <button className="px-3">Careers</button>
                </div>
                <div className="flex w-1/5 justify-center text-[16px]">
                    <span className="flex justify-center m-3">
                        <button className="border border-solid border-white rounded-3xl px-3 bg-white" id="login" onClick={() => {navigate("/Login",{replace:true})}}>Login</button>
                    </span>
                </div>
            </header>
            <div className="flex-col h-2/6 text-center mt-14 mb-10 text-white">
                <h1 className="font-bold text-6xl mb-12">IMAGINE A PLACE...</h1>
                <div className="text-[18px]">
                    <p>...where you can belong to a school club, a gaming group, or a worldwide art community.</p>
                    <p>Where just you and a handful of friends can spend time together.A place that makes it</p>
                    <p>easy to talk every day and hang out more often.</p>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button className="w-2/6 border border-solid border-white rounded-3xl py-2 bg-white">Download for mac</button>
                <div className="px-3"></div>
                <button className="w-2/6 border border-solid border-white rounded-3xl py-2 bg-black text-white" onClick={()=>{navigate("/dashboard")}}>Open Discord in your browser</button>
            </div>
        </div>
        <div className="flex h-screen justify-center">
            <img className="w-3/6" src={Start_bg1} alt="image-2" />
            <div className="flex w-3/6 justify-center items-center">
                <div className="w-3/6">
                    <h1 className="text-6xl font-bold pb-4">Create an invite-only place where you belong</h1>
                    <p className="text-xl mt-2">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat</p>
                </div>
            </div>
        </div>
        <div className="bg-slate-50 flex h-screen justify-center">
            <div className="flex w-3/6 justify-center items-center">
                <div className="w-3/5">
                    <h1 className="text-6xl font-bold pd-6">Where hanging out is easy</h1>
                    <p className="text-xl mt-4 pr-9">Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</p>
                </div>
            </div>
            <img className="w-3/6 text-center" src={Start_bg2} alt="Image-2" />
        </div>
        <div className="flex h-screen">
            <img className="flex w-3/6" src={Start_bg3} alt="Image-3" />
            <div className="flex w-3/6 justify-center items-center">
                <div className="w-3/5">
                    <h1 className="text-6xl font-bold mb-4">From few to a fandom</h1>
                    <p className="text-xl mt-4 pr-9">Get any community running with moderation tools and custom member access. Give memebers special powers, set up private channels, and more.</p>
                </div>
            </div>
        </div>
        <div className="bg-slate-50 min-h-screen">
            <div className="text-center pt-36">
                <h1 className="text-6xl font-bold pb-10">RELIABLE TECH FOR STAYING CLOSE</h1>
                <p className="text-xl text-center px-36">Low-latency voice and video feel like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            </div>
            <img src={Start_bg4} alt="Image-4" />
            <div className="flex justify-center ">
                <img className="h-10" src={Start_bg5} alt="Image-5" />
            </div>
            <div className="text-center pb-10">
                <h1 className="text-4xl font-bold pb-4">Ready to start your journey?</h1>
                <button className="border border-solid rounded-3xl px-14 py-3 bg-[#5865f2] text-white">Download for Mac</button>
            </div>
        </div>
        <div className="bg-[#36393f]">
            <div className="pl-14">
                <div className="flex pt-16 pb-10">
                    <div className="text-white w-1/5">
                        <h1 className="text-4xl font-bold text-[#5865f2]">IMAGINE A PLACE</h1>
                        <div className="flex items-end pb-4">
                            <img className="w-8 h-[20px]" src={Map} alt="USA logo" />
                            <p className="text-lg pl-2 pt-4">English,USA</p>
                        </div>
                        <div className="flex">
                            <a href=""><img src={Twitter} alt="twitter" /></a>
                            <a href=""><img src={Instagram} alt="instagram" /></a>
                            <a href=""><img src={Facebook} alt="facebook" /></a>
                            <a href=""><img src={Youtube} alt="youtube" /></a>
                        </div>
                    </div>
                    <div className="w-1/5 text-white text-start pl-4">
                        <a href="" className="text-[#404eed] block p-2">Product</a>
                        <a href="" className="block p-1">Download</a>
                        <a href="" className="block p-1">Nitro</a>
                        <a href="" className="block p-1">Status</a>
                    </div>
                    <div className="w-1/5 text-white text-start">
                        <a href="" className="text-[#404eed] block p-2">Company</a>
                        <a href="" className="block p-1">About</a>
                        <a href="" className="block p-1">Jobs</a>
                        <a href="" className="block p-1">Branding</a>
                        <a href="" className="block p-1">Newsroom</a>
                    </div>
                    <div className="w-1/5 text-white text-start">
                        <a className="text-[#404eed] block p-2">Resources</a>
                        <a className="block p-1">Collage</a>
                        <a className="block p-1">Support</a>
                        <a className="block p-1">Safety</a>
                        <a className="block p-1">Blog</a>
                        <a className="block p-1">Feedback</a>
                        <a className="block p-1">Developers</a>
                        <a className="block p-1">StreamKit</a>
                    </div>
                    <div className="w-1/5 text-white text-start">
                        <a className="text-[#404eed] block p-1">Policies</a>
                        <a className="block p-1">Terms</a>
                        <a className="block p-1">Privacy</a>
                        <a className="block p-1">Guidelines</a>
                        <a className="block p-1">Ackowledgements</a>
                        <a className="block p-1">Licenses</a>
                        <a className="block p-1">Moderation</a>
                    </div>
                </div>
                <hr className="w-11/12"></hr>
                <footer className="flex">
                    <img className="px-3 py-12" src={Logo} alt="Logo" />
                    <div className="flex w-full justify-end items-center pr-20 text-white">
                        <button className="bg-[#404eed] border border-solid border-[#404eed] rounded-3xl p-2.5" onClick={()=>{navigate("/Signup")}}>Signup</button>
                    </div>
                </footer>
            </div>
        </div>
    </>)
}

export default Start

