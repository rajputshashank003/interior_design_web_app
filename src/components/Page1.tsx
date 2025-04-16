import { motion } from "motion/react"
import BlurAnimateText from "./BlurAnimateText"

const Page1 = () => {
    const data = {
        details : "Invest in good interior design to create a space that feels as good as it looks. Thoughtful design brings comfort, style, and function together—turning your house into a home you love.",
        "button-name" : "Click to explore",
        price : "20",
        "small-details" : "Invest in good interior design to create a good space.",
        image : "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  return (
    <div className="h-screen w-full overflow-hidden relative grid grid-cols-2 max-md:flex flex-col">
        <div className="text col-span-1 text-white/80 h-full flex flex-col justify-center items-center w-full relative">
            <div className="space max-md:top-6 text-[3rem] md:text-[5rem] flex flex-col font-serif relative left-[20vw]">
                <div className="max-md:hidden">
                    <div className=" flex flex-row">
                        <div className={`text-white/80 relative rounded-xl`}
                        >
                            <div className="absolute top-0 z-[9] bg-gradient-to-b from-[#B96539]/40 to-[#9E4A1D] backdrop-blur-[2px] h-full w-1/2 right-0 shadow-[0px_0px_15px] shadow-black/40">
                            </div>
                            <div className="relative z-[99] pr-4">
                                <BlurAnimateText text={"Create your"} />
                            </div>
                        </div>
                    </div>
                    <div className="relative leading-20">
                        <BlurAnimateText text={"space"} />
                    </div>
                </div>
                <div className="md:hidden max-md:w-[80%] -4 leading-15">
                    <BlurAnimateText text={"Create your space"} />
                </div>
                <div className="relative max-md:text-[2.5vw] text-[1.3vw] text-white/60 w-[70%] font-sans md:mt-10">
                    {
                        data.details
                    }
                </div>
                <button className="relative mb-4 lg:text-[2vw] font-semibold hover:scale-[1.05] duration-300 cursor-pointer max-md:text-[4vw] w-60 bg-gradient-to-b from-white/40 top-10 text-[2.5vw] rounded-xl shadow-[0px_0px_10px] shadow-black/50 to-[#9E4A1D]/10 backdrop-blur-[2px]">
                    {
                        data["button-name"]
                    }
                </button>
            </div>
        </div>
        <div className="relative col-span-1">
            <motion.div 
                
                className="absolute overflow-hidden grid grid-cols-3 top-1/2 left-1/2 z-[99] md:h-30 md:w-80 w-[80%] h-20 bg-gray-600/30 shadow-[0px_0px_10px] shadow-black/40 rounded-2xl backdrop-blur-xl -translate-x-1/2 -translate-y-1/2"
            >
                <img 
                    src={data.image}
                    className="relative h-full col-span-1 object-cover" alt="" 
                />
                <div className="col-span-2 text-black/60 font-semibold max-md:text-[3vw] text-[1.1vw] p-2 md:py-4">
                    <div className="title text-[1.1vw] max-md:text-[3vw]">
                        {data["small-details"]}
                    </div>
                    <div className="details relative flex flex-row pt-2">
                        <div className="price md:text-[2vw] lg:text-[1.5vw] max-md:text-[5vw]">
                            Price : ${data.price}
                        </div>
                        <motion.button 
                            initial={{ y : 0,}}
                            animate={{y : [-5,0,-5]}}
                            transition={{duration : 2, ease : "easeInOut", repeat : Infinity , delay : 1}}
                            className="relative hover:scale-[1.2] duration-300 justify-center items-center cursor-pointer flex flex-row h-fit w-fit max-md:px-2 px-4 mx-2 bg-gradient-to-b from-white/40 rounded-xl max-md:rounded-sm shadow-[0px_0px_10px] shadow-black/50 to-[#9E4A1D]/10 backdrop-blur-[2px]"
                        >
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler h-5 md:h-8 icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                        </motion.button>
                    </div>
                </div>
            </motion.div>
            <img 
                src={data.image} 
                className="relative h-full object-cover" alt="" 
            />
        </div>
    </div>
  )
}

export default Page1