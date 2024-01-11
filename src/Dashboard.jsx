import React from "react";
import Discord from "./resource/Dash-img/discord_icon.svg"
import N_icon from "./resource/Dash-img/n_icon.svg"
import Plus from "./resource/Dash-img/plus.svg"
import Navi from "./resource/Dash-img/nav_icon.svg"
import Download from "./resource/Dash-img/download.svg"

function Dashboard() {
    return (
        <>
            <div className="w-screen flex">
                <div className="w-12 min-h-screen bg-[#36393f]">
                    <img className="" src={Discord} alt="Discord"/>
                    <img src={N_icon} alt="N_icon"/>
                    <img src={Plus} alt="Plus"/>
                    <img src={Navi} alt="Navi"/>
                    <img src={Download} alt="Download"/>
                </div>
                <div className="block">
                    <input type="text" placeholder="Find or start a conversation"></input>
                    <button>Friends</button>
                    <button>Stage Discovery</button>
                    <button>Nitro</button>
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default Dashboard