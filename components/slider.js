import React from 'react';
import './styles.scss';

class Slider extends React.Component {
    render() {
        return(
            <div className="slider">
                <ul>
                    <li><img src="/assets/img/1.jpg" alt="1" /></li>
                    <li><img src="/assets/img/2.jpg" alt="2" /></li>
                    <li><img src="/assets/img/3.jpg" alt="3" /></li>
                    <li><img src="/assets/img/4.jpg" alt="4" /></li>
                </ul>
            </div>
        )
    }
}

export default Slider;