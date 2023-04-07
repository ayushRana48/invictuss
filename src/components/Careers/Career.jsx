import React from "react";
import ReactDOM from 'react-dom';
import Box from './textBoxes';
import CareerBoxes from "./CareerBoxes";
import dictionary from '../../dictionary.json'



export default function Career() {

    const dict=dictionary.Careers
    return (
        
        <div class="flex-above">
            <div class="relative h-[30rem] flex items-center">
                <div class=" absolute right-1/3 bottom-1/2 h-1/3 w-3/5">
                    <h1 class="text-orange text-xl font-bold mb-16">
                        {dict.header}
                    </h1>
                   
                    <h3 class="text-white text-m leading-9 " >
                        {dict.message1}
                    </h3>
                </div>
                <img className="object-scale-down w-[0rem] md:w-[18rem] lg:w-[18rem]  ml-auto mr-24 mt-14" src = "/CareersPage.svg" alt="Invictuss logo"/>
            </div>

            <div className='flex justify-center mx-20'>
                <CareerBoxes />
            </div>
            <div class= "p-64"> </div>git

        </div>

    )
}

          