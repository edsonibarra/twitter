import React from "react"
import './styles.css'

const Searchbar = () => {
    return(
        <div className="input-container">
            <input placeholder="Buscar en Twitter"></input>
            <div className='trend-container-title'>
                <h4>Trends</h4>
            </div>
        </div>
    )
}

export default Searchbar