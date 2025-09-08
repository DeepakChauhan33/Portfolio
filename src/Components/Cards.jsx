import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from "./Theme";

const Cards = (props) => {

    const { theme, toggleTheme } = useTheme();
    
    return (
        <>
            <div className={`${theme === "light" ? "bg-gradient-to-r from-slate-300 via-gray-300 to-zinc-300" : "bg-gray-900"} 
              flex-col justify-center gap-1 w-72 hover:shadow-lg rounded-lg p-1.5`}>
                <p className='font-bold text-xl'>{props.prjName}</p>

                

                <div className='border-t-2 pt-0.5  h-40 w-66 '>
                    <img src={props.imgLink} alt="img" className='h-full w-full object-cover' />
                    
                </div>

                    <div className='flex flex-wrap min-h-20 justify-center gap-1.5 mt-1 border-b-2'> 
                        <p className=' text-xl p-1' >{props.lang1} | {props.lang2} | {props.lang3} |</p>
                    </div>

                <div className='flex w-full gap-1.5 p-1  items-start '>

                    <button type="button" className="btn btn-success h-[1.8rem] w-auto p-1 bg-amber-300">
                        <a 
                        className='text-black !no-underline text-center'
                        href={props.prjLink} target="_blank" >Live</a>
                    </button>

            
                        <button type="button" className="btn btn-danger h-[1.8rem] w-auto p-1 ">
                            <a
                            className='text-black !no-underline text-center'
                            href={props.prjCode} target="_blank" >Code</a>
                        </button>
                    
                </div>
            </div>
        </>
    )
}

export default Cards



