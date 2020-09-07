import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader';
import logo from '../images/platzi.png';
import video from '../video/que-es-core.mp4';

import '../css/sass/sass.scss';
import '../css/less/less.less';
import '../css/stylus/stylus.styl';

console.log(data);  

function App(){
    const [loaderList, setLoaderList] = useState([]);
    async function handleClick(){
        const {alerta} = await import('./alert');
        console.log('alerta');
        alerta('OMG este modulo ha cargado dinamicamente');
        setLoaderList(data.loaders);
    }
    return (
        <div>
            <p>Que linda app hecha en React.js</p>
            <p className="sass">Esto es sass</p>
            <p className="less">Esto es Less</p>
            <p className="stylus">Esto es Stylus</p>
            <p className="post-css">Esto es Postcss</p>
            <p>
                <video src = {video} width = {360} controls poster={logo}></video>
                <img id="logo-platzi" src={logo}>
                </img>
            </p>
            <p id="pWithFont">Hola Mundo</p>
            <ul>
                {
                    loaderList.map(item => <Loader {...item} key={item.id} />)
                    
                }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
        </div>
    )
}

export default App;