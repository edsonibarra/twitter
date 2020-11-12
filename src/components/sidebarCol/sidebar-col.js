import React from 'react';
import Searchbar from '../Searchbar/Searchbar'
import Trends from '../Trends/Trends'
const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <button onClick={props.cambiarImagen}>Cambiar la imagen de perfil</button>
            <Searchbar />
            <Trends />
        </div>
    )
}

export default SidebarCol;