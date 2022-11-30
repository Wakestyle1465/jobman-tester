import {useState} from "react";

//Used to toggle state via boolean

const useToggle = (INITIALSTATE = true) => {
    const [state, setState] = useState(INITIALSTATE)
    const toggle = () => {
        setState (state => !state)
    }
    return [state,toggle]
}

export default useToggle