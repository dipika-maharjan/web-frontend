import React from "react";
import '../../../styles/BohemianSection.css';
import BohemianSpaceIdea from '../../../assets/images/bohemianspaceidea.jpeg';
import BohemianStyleFurniture from '../../../assets/images/BohemianStyleFurniture.jpg';
import PlantsAbound from '../../../assets/images/PlantsAbound.jpg';
import AlternativeSeating from '../../../assets/images/AlternativeSeating.jpg';
import BohoStyleFringe from '../../../assets/images/BohoStyleFringe.jpg';
import BohemianCanopyFurniture from '../../../assets/images/BohemianCanopyFurniture.jpg';
import AllNaturalFeel from '../../../assets/images/AllNaturalFeel.jpg';
import SoftBohemian from '../../../assets/images/SoftBohemian.jpeg';
import ChairPillows from '../../../assets/images/ChairPillows.jpg';
import ColorfulRunnerRug from '../../../assets/images/ColorfulRunnerRug.jpg';


function BohemianSection() {
    const bohemianItems = [
        { title: "Bohemian-Style Furniture", image: BohemianStyleFurniture, description: "Eclectic and cozy." },
        { title: "Plants Abound", image: PlantsAbound, description: "Lush and refreshing." },
        { title: "Alternative Seating", image: AlternativeSeating , description: "Casual and comfy." },
        { title: "Boho-Style Fringe", image: BohoStyleFringe , description: "Handmade charm." },
        { title: "Bohemian Canopy Furniture", image: BohemianCanopyFurniture, description: "Airy and dreamy." },
        { title: "All-Natural Feel", image: AllNaturalFeel, description: "Organic and earthy." },
        { title: "Soft & Textural Bohemian", image: SoftBohemian, description: "Cozy and soft." },
        { title: "A Statement Chair & Pillows", image: ChairPillows, description: "Relaxed and stylish." },
        { title: "A Colorful Runner Rug", image: ColorfulRunnerRug, description: "Bold and vibrant." }
    ];

    return (
        <div className="bohemian-wrapper">
            <div className="bohemian-heading">
                <h1>Bohemian Spaces Ideas</h1>
            </div>

            <div className="bohemian-frontimage">
                <img src={BohemianSpaceIdea} alt="Bohemian Space Ideas" />
            </div>
            
            <div className="bohemian-description">     
                <p>
                    "Creative, warm, and free-spirited. <br/>
                    Rich textures, vibrant patterns, and natural elements create a relaxed and artistic vibe. <br/>
                    Layered rugs, eclectic decor, and cozy seating make it a perfect retreat."
                </p>
            </div>

            <div className="bohemian-section">
                {bohemianItems.map((item, index) => (
                    <div className="bohemian-box" key={index}>
                        <div className="bohemian-content">
                            <h2>{item.title}</h2>
                            <div className="bohemian-image">
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

export default BohemianSection;
