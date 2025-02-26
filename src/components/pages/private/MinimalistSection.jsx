import React from "react";
import '../../../styles/MinimalistSection.css';
import MinimalistSpaceIdea from '../../../assets/images/MinimalistSpaceIdea.jpg'
import ContemporaryMinimalistLiving from '../../../assets/images/CozySofa.jpg'
import blackwhite from '../../../assets/images/blackwhite.jpg'
import MinimalistFurniture from '../../../assets/images/MinimalistFurniture.jpg'
import MinimalistApartment from '../../../assets/images/MinimalistApartment.jpg'
import MinimalistKitchen from '../../../assets/images/MinimalistKitchen.jpg'
import MinimalistCanvas from '../../../assets/images/MinimalistCanvas.jpg'

function MinimalistSection() {
    return (
        <div className="minimalist-wrapper">
            <div className="minimalist-heading">
                <h1>Contemporary Minimalist Space Ideas</h1>
            </div>

            <div className="minimalist-frontimage">
                <img src={MinimalistSpaceIdea} alt="Contemporary Minimalist Space Ideas" />
            </div>
            
            <div className="minimalist-description">     
                <p>
                    "Contemporary minimalist decor focuses on clean lines, open spaces, and a neutral palette. <br/>
                    It embraces simplicity, functionality, and a clutter-free aesthetic, <br/>
                    creating a sleek and sophisticated ambiance with subtle textures and statement pieces."
                </p>
            </div>

            <div className="minimalist-section">
                {[ 
                    { title: "Minimalist Living", image: ContemporaryMinimalistLiving, description: "Cozy and simple comfort." },
                    { title: "Black & White", image: blackwhite, description: "Classic, warm, and textured." },
                    { title: "Minimalist Furniture", image: MinimalistFurniture , description: "Functional, outdoor-inspired design." },
                    { title: "Minimalist Apartment", image: MinimalistApartment , description: "Handmade, rustic charm." },
                    { title: "Minimalist Kitchen", image: MinimalistKitchen, description: "Rugged and elegant." },
                    { title: "Minimalist Canvas", image: MinimalistCanvas, description: "Vintage-inspired artwork." }
                ].map((item, index) => (
                    <div className="minimalist-box" key={index}>
                        <div className="minimalist-content">
                            <h2>{item.title}</h2>
                            <div className="minimalist-image">
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

export default MinimalistSection;
