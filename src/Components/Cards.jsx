import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from "./Theme";

const Cards = (props) => {

    const { theme, toggleTheme } = useTheme();
    
    return (
        <>
            <div className={`${theme === "light" ? "bg-gradient-to-r from-slate-300 via-gray-300 to-zinc-300" : "bg-gray-800"} 
              flex-col justify-center gap-1 h-80 w-72 hover:scale-105 transition-transform duration-300  shadow-lg rounded-lg p-1.5`}>
                <p className='font-bold text-xl'>{props.prjName}</p>

                

                <div className='border-t-2 pt-0.5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHX--gYUm97ilEI6HIhSkCi_0XiCOsbUtHQg&s" alt="img" />
                </div>

                {/* <div className='flex w-full bg-amber-200  justify-around border-t-2 border-b-2 '>
                    <p className=' text-xl' >{props.lang1} | {props.lang2} | {props.lang3}</p>

                </div> */}

                    <span>
                        <p className=' text-xl' >{props.lang1} | {props.lang2} | {props.lang3}</p>
                    </span>

                <div className='flex w-full gap-1.5 p-1  items-start '>
                    <button type="button" className="btn btn-secondary h-[1.8rem] w-auto p-1">
                        <a 
                        className='text-black !no-underline text-center'
                        href="https://deepakchauhan33.github.io/TODO-Liist/" target="_blank" >Live Demo</a>
                    </button>

            
                        <button type="button" className="btn btn-secondary h-[1.8rem] w-auto">Code</button>
                    
                </div>
            </div>
        </>
    )
}

export default Cards



