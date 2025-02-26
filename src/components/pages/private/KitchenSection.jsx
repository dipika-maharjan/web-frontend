import React from "react";
import '../../../styles/KitchenSection.css';
import KitchenSpaceIdea from '../../../assets/images/kitchenspaceidea.jpg'
import ModernKitchen from '../../../assets/images/modernkitchen.jpg'
import SustainableMaterials from '../../../assets/images/sustainablekitchen.jpeg'
import Ecofriendly from '../../../assets/images/ecofriendlykitchen.jpg'
import SmartKitchen from '../../../assets/images/smartkitchen.jpg'
import LargeFormatTiles from '../../../assets/images/LargeFormatTiles.jpg'
import ConcealedKitchens from '../../../assets/images/ConcealedKitchens.jpg'
import EarthyNeutrals from '../../../assets/images/EarthyNeutrals.jpg'
import NaturalLightViews from '../../../assets/images/NaturalLightViews.jpg'
import BlackAccents from '../../../assets/images/BlackAccents.jpeg'

function KitchenSection() {
    return (
        <div className="kitchen-wrapper">
            <div className="kitchen-heading">
                <h1>Kitchen Spaces Ideas</h1>
            </div>

            <div className="kitchen-frontimage">
                <img src={KitchenSpaceIdea} alt="Kitchen Space Ideas" />
            </div>
            
            <div className="kitchen-description">     
                <p>
                    "Kitchen spaces are where culinary creativity comes to life. <br />
                    From meal prep to family gatherings, these rooms should be functional, efficient, and inspiring. <br /> 
                    With smart storage solutions, modern appliances, and stylish designs, create a space that makes cooking and dining enjoyable."
                </p>
            </div>

            <div className="kitchen-section">
                {[ 
                    { title: "Mid-Century Modern Style", image: ModernKitchen, description: "Sleek and functional." },
                    { title: "Sustainable Materials", image: SustainableMaterials, description: "Eco-luxury design." },
                    { title: "Eco-Friendly Kitchen", image: Ecofriendly, description: "Vibrant and green." },
                    { title: "Smart Kitchen", image: SmartKitchen, description: "Tech-savvy and efficient." },
                    { title: "Large Format Tiles", image: LargeFormatTiles, description: "Minimal and spacious." },
                    { title: "Concealed Kitchens", image: ConcealedKitchens, description: "Hidden storage elegance." },
                    { title: "Earthy Neutrals", image: EarthyNeutrals, description: "Warm and natural tones." },
                    { title: "Natural Light & Views", image: NaturalLightViews, description: "Bright with scenic views." },
                    { title: "Black Accents", image: BlackAccents, description: "Bold and modern contrast." }
                ].map((item, index) => (
                    <div className="kitchen-box" key={index}>
                        <div className="kitchen-content">
                            <h2>{item.title}</h2>
                            <div className="kitchen-image">
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

export default KitchenSection;
