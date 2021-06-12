import EAnimated from "./animated";

import './animate.css';

function install (Vue)
{
    Vue.component(EAnimated.name , EAnimated)
}

export default {
    install,
    EAnimated
}