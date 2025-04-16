import { motion } from "motion/react";

const BlurAnimateText = ({text} : { text : string}) => {
    const arr = text.split(" ");
    return (
        <div
            className="relative flex flex-wrap overflow-hidden"
        >
            {
                arr.map((val) => (
                    <div className=" w-fit">
                        {
                            val.split("").map((c , ind) => (
                                <AnimateCharacter key={ ind } ind={ind} val={c} />
                            ))
                        }
                        &nbsp;
                    </div>
                ))
            }
        </div>
    )
}

const AnimateCharacter = ({val, ind} : {val : string , ind : number}) => {
    return (
        <motion.span 
            initial={{opacity : 0, y : 60, filter : "blur(2px)"}}
            animate={{opacity : 1, y : [0, -10, 0], filter : "blur(0px)"}}
            transition={{ duration : 1, ease : "easeInOut", delay : ind / 10 }}
            className="relative inline-block"
        >
            {val}
        </motion.span>
    )
}

export default BlurAnimateText