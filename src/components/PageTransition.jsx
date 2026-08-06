import { motion } from "framer-motion";


function PageTransition({children}){


return(

<motion.div


initial={{
rotateY:-90,
opacity:0
}}


animate={{
rotateY:0,
opacity:1
}}


exit={{
rotateY:90,
opacity:0
}}


transition={{
duration:0.8
}}


style={{

perspective:1000,
transformStyle:"preserve-3d"

}}


>


{children}


</motion.div>

)

}


export default PageTransition;