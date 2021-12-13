import React from 'react'

import AnimatedLottieView from "lottie-react-native"

export default Error=()=>
{
    return(
        <AnimatedLottieView source={require("../../assets/error.json")}autoPlay/>
    )
}