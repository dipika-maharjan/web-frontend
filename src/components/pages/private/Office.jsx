import React from "react";
import '../../../styles/OfficeSection.css';
import OfficeSpaceIdeas from '../../../assets/images/officespaceideas.jpg';
import SpaceShifters from '../../../assets/images/SpaceShifters.jpg';
import NatureTouch from '../../../assets/images/NatureTouch.jpg';
import TechInfused from '../../../assets/images/TechInfused.jpg';
import QuietZones from '../../../assets/images/QuietZones.jpg';
import HybridHarmony from '../../../assets/images/HybridHarmony.jpeg';
import CozyMeetsCorporate from '../../../assets/images/CozyMeetsCorporate.jpg';

function OfficeSection() {
    return (
        <div className="office-wrapper">
            <div className="office-heading">
                <h1>Office Spaces Ideas</h1>
            </div>

            <div className="office-frontimage">
                <img src={OfficeSpaceIdeas} alt="Office Space Ideas" />
            </div>
            
            <div className="office-description">     
                <p>
                "Office spaces are where productivity meets creativity. <br/>
                Whether it’s a quiet workspace for focused tasks or a collaborative environment for team discussions, these spaces should inspire work and foster comfort. <br/>
                With the right furniture, lighting, and organization, create a space that helps you stay efficient and motivated."
                </p>
            </div>

            <div className="office-section">
                {[
                    { title: "Space Shifters", image: SpaceShifters, description: "Versatile designs for all needs." },
                    { title: "Nature’s Touch", image: NatureTouch, description: "Natural elements for refreshment." },
                    { title: "Tech-Infused", image: TechInfused, description: "Modern tech setups." },
                    { title: "Quiet Zones", image: QuietZones, description: "Peaceful workspaces." },
                    { title: "Hybrid Harmony", image: HybridHarmony, description: "Blending home and office." },
                    { title: "Cozy Meets Corporate", image: CozyMeetsCorporate, description: "Comfort with a professional touch." },
                ].map((item, index) => (
                    <div className="office-box" key={index}>
                        <div className="office-content">
                            <h2>{item.title}</h2>
                            <div className="office-image">
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

export default OfficeSection;
