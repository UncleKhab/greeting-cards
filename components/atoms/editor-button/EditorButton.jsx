import React from 'react'

const EditorButton = ({iconUrl, action, label}) => {
    return (
        <button className="flex flex-col justify-between items-center gap-2 font-semibold text-white text-sm" onClick={() => action()}>
            <img src={iconUrl}/>
            <p>{label}</p>
        </button>
    )
}

export default EditorButton
