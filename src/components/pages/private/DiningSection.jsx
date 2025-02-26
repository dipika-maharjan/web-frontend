import React from "react";
import '../../../styles/DiningSection.css';
import DiningSpaceIdeas from '../../../assets/images/diningspaceidea.jpeg'
import Multifunctional from '../../../assets/images/thinkmultifunctional.jpeg'
import SomeGlam from '../../../assets/images/someglam.jpeg'
import Bold from '../../../assets/images/bold.jpeg'
import Texture from '../../../assets/images/texture.jpg'
import HideATable from '../../../assets/images/hideatable.jpeg'
import Pendant from '../../../assets/images/pendants.jpg'

function DiningSection() {
    return (
        <div className="dining-wrapper">
            <div className="dining-heading">
                <h1>Dining Spaces Ideas</h1>
            </div>

            <div className="dining-frontimage">
                <img src={DiningSpaceIdeas} alt="Dining Space Ideas" />
            </div>
            
            <div className="dining-description">     
                <p>
                "Dining spaces are where conversations flow and meals are shared. <br /> 
                Whether it’s a festive dinner, a quiet breakfast, or a family gathering, these rooms should be welcoming, functional, and full of character. <br /> 
                From a stylish table to comfortable seating, create a space that brings people together and makes every meal memorable."
                </p>
            </div>

            <div className="dining-section">
                {[
                    { title: "Think Multifunctional", image: Multifunctional, description: "Flexible for various uses." },
                    { title: "Add Some Glam", image: SomeGlam, description: "Stylish and luxurious." },
                    { title: "Go For Bold", image: Bold, description: "Vibrant and striking." },
                    { title: "Add Some Texture", image: Texture, description: "Cozy and inviting." },
                    { title: "Hide-A-Table", image: HideATable, description: "Space-saving design." },
                    { title: "Alternating Pendants ", image: Pendant, description: "Elegant lighting accents." },
                ].map((item, index) => (
                    <div className="dining-box" key={index}>
                        <div className="dining-content">
                            <h2>{item.title}</h2>
                            <div className="dining-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiningSection;