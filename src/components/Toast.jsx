import { useEffect, useState } from "react"


export const Toast = ({ message, show }) => {
    return (
        <div className={`absolute min-h-16 min-w-16 border-2 m-10 rounded-2xl left-0 top-0 flex justify-center items-center p-2 text-slate-500 transition ease-in-out duration-300`}>
            <span className="">{ message }</span>
        </div>
    )
}
