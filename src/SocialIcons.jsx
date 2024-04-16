import React from "react";

function SocialIcons({Icons}){
    return(
        <div className="text-teal-500">
            {Icons.map(icon=>(
                <span key={icon.name} className="p-2 cursor-pointer">
                    <icon-icon name={icon.name}/>
                </span>
            ))}
        </div>
    )
}

export default SocialIcons;