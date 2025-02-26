import React from "react";
import '../../../styles/RusticSection.css';
import RusticSpaceIdea from '../../../assets/images/rusticspaceidea.jpg'
import CozySofa from '../../../assets/images/CozySofa.jpg'
import WoodFeatureWalls from '../../../assets/images/WoodFeatureWalls.jpg'
import ConnectiontoNature from '../../../assets/images/ConnectiontoNature.jpg'
import ArtsDécor from '../../../assets/images/ArtsDécor.jpg'
import SlateWood from '../../../assets/images/SlateWood.jpg'
import WornLeather from '../../../assets/images/WornLeather.jpg'
import StoneFireplace from '../../../assets/images/StoneFireplace.jpg'
import QuietSpaces from '../../../assets/images/QuietSpaces.jpg'
import RusticFurniture from '../../../assets/images/RusticFurniture.jpg'

function RusticSection() {
    return (
        <div className="rustic-wrapper">
            <div className="rustic-heading">
                <h1>Rustic Spaces Ideas</h1>
            </div>

            <div className="rustic-frontimage">
                <img src={RusticSpaceIdea} alt="Rustic Space Ideas" />
            </div>
            
            <div className="rustic-description">     
                <p>
                "Rustic design embraces warmth, natural textures, and timeless charm.<br/>
                From reclaimed wood to cozy earth tones, this style creates a welcoming and relaxed atmosphere.<br/>
                Whether it’s a farmhouse-inspired space or a modern rustic blend, bring nature indoors with organic materials and vintage accents."
                </p>
            </div>

            <div className="rustic-section">
                {[ 
                    { title: "Cozy Sofa", image: CozySofa, description: "Rustic comfort." },
                    { title: "Wood Feature Walls", image: WoodFeatureWalls, description: "Warm & textured." },
                    { title: "Connection to Nature", image: ConnectiontoNature , description: "Outdoor vibes." },
                    { title: "Arts & Crafts Décor", image: ArtsDécor , description: "Handmade charm." },
                    { title: "Slate & Wood", image: SlateWood, description: "Rugged elegance." },
                    { title: "Worn Leather", image: WornLeather, description: "Vintage feel." },
                    { title: "Stone Fireplace", image: StoneFireplace, description: "Classic warmth." },
                    { title: "Quiet Spaces", image: QuietSpaces, description: "Cozy retreat." },
                    { title: "Rustic Furniture", image: RusticFurniture, description: "Timeless wood." }
                ].map((item, index) => (
                    <div className="rustic-box" key={index}>
                        <div className="rustic-content">
                            <h2>{item.title}</h2>
                            <div className="rustic-image">
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

export default RusticSection;
