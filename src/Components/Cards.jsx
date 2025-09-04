import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from "./Theme";

const Cards = (props) => {

    const { theme, toggleTheme } = useTheme();
    
    return (
        <>
            <div className={`${theme === "light" ? "bg-gradient-to-r from-slate-300 via-gray-300 to-zinc-300" : "bg-gray-900"} 
              flex-col justify-center gap-1 h-80 w-72 hover:shadow-lg rounded-lg p-1.5`}>
                <p className='font-bold text-xl'>{props.prjName}</p>

                

                <div className='border-t-2 pt-0.5  h-40 w-66 '>
                    <img src={props.imgLink} alt="img" className='h-full w-full object-cover' />
                    
                </div>

                {/* <div className='flex w-full bg-amber-200  justify-around border-t-2 border-b-2 '>
                    <p className=' text-xl' >{props.lang1} | {props.lang2} | {props.lang3}</p>

                </div> */}

                    <span>
                        <p className=' text-xl p-1' >{props.lang1} | {props.lang2} | {props.lang3}</p>
                    </span>

                <div className='flex w-full gap-1.5 p-1  items-start '>
                    <button type="button" className="btn btn-success h-[1.8rem] w-auto p-1 bg-amber-300">
                        <a 
                        className='text-black !no-underline text-center'
                        href="https://deepakchauhan33.github.io/TODO-Liist/" target="_blank" >Live Demo</a>
                    </button>

            
                        <button type="button" className="btn btn-danger h-[1.8rem] w-auto">Code</button>
                    
                </div>
            </div>
        </>
    )
}

export default Cards



