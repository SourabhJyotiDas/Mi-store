import React, { useState, useEffect } from 'react'
import NavCard from "./NavCard.js"




const NavOptios = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {

    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [laptopToggle, setLaptopToggle] = useState(false);
    const [fitnessToggle, setFitnessToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);


    useEffect(() => {

        if (window.location.pathname === "/miphones") {
            return setMiPhoneToggle(true)
        }
        else if (window.location.pathname === "/redmiphones") {
            return setRedmiPhoneToggle(true)
        }
        else if (window.location.pathname === "/tv") {
            return setTvToggle(true)
        }
        else if (window.location.pathname === "/laptops") {
            return setLaptopToggle(true)
        }
        else if (window.location.pathname === "/lifestyle") {
            return setFitnessToggle(true)
        }
        else if (window.location.pathname === "/home") {
            return setHomeToggle(true)
        }
        else if (window.location.pathname === "/audio") {
            return setAudioToggle(true)
        }

        else if (window.location.pathname === "/accessories") {
            return setAccessoriesToggle(true)
        }


    }, [])

    return (
        <div className=" flex flex-wrap m-auto text-center md:w-[80vw]">

            {miPhoneToggle ? miPhones.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}


            {redmiPhoneToggle ? redmiPhones.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}


            {tvToggle ? tv.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

            {laptopToggle ? laptop.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}



            {fitnessToggle ? fitnessAndLifeStyle.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}


            {homeToggle ? home.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}



            {audioToggle ? audio.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}


            {accessoriesToggle ? accessories.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

        </div>
    )
}

export default NavOptios
