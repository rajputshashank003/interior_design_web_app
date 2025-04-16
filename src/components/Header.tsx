    const Header = () => {
        const selected = 0;
        const svg = <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>

        const options = ["HOME" , "EXPLORE" , "SHOP" , "ABOUT", "US", svg ];
        const details = {
            logo : "logo",
            options ,
            
        }
        return (
            <div 
                className={`
                    z-[99]
                    fixed top-0 left-10 right-10 top-10
                    p-2 px-4 text-[1.2rem] text-white/80
                    flex flex-row 
                    bg-gray-200/40 backdrop-blur-[2px] shadow-[0px_0px_4px] shadow-gray-400  rounded-xl
                `}
            >
                <div className="title cursor-pointer hover:scale-[1.1] duration-300 text-gray-800 font-bold font-mono relative flex justify-center items-center">
                    {details.logo}
                </div>
                <div className="options max-md:hidden font-sans absolute flex flex-row justfy-center items-center mr-4 gap-4 right-0">
                    {
                        details.options.map((val , ind) => (
                            <span className={`relative cursor-pointer hover:scale-[1.05] duration-300 flex justify-center items-center w-full ${selected == ind ? "text-gray-800/90 font-semibold" : "text-gray-600/60"}`} >
                                {val}
                                {
                                    selected == ind && 
                                    <div className="absolute -bottom-[1px] h-[2px] rounded-full w-[95%] bg-gray-800/90"></div>
                                }
                            </span>
                        ))
                    }
                </div>
                <div className="md:hidden cursor-pointer hover:scale-[1.2] duration-300 font-sans absolute flex flex-row justfy-center items-center mr-4 gap-4 right-0">
                    <span className={`relative flex justify-center items-center w-full text-gray-800/90 font-semibold"`} >
                        {options[5]}
                    </span>
                </div>
            </div>
        )
    }

    export default Header