import React from 'react'

import AnimatedLottieView from "lottie-react-native"

export default Loading=()=>{
    return(
        <AnimatedLottieView source={require("../../assets/loading.json")}autoPlay/>
    )
}