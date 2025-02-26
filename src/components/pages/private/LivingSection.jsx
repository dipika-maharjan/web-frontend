import React from "react";
import '../../../styles/LivingSection.css';
import FamilyLiving from '../../../assets/images/FamilyLiving.jpg';
import EntertainmentLiving from '../../../assets/images/EntertainmentLiving.webp';
import ReadingNook from '../../../assets/images/ReadingNook.jpg';
import OpenConcept from '../../../assets/images/OpenConcept.jpg';
import SmallSpace from '../../../assets/images/SmallSpace.jpg';
import NatureInspired from '../../../assets/images/NatureInspired.jpg';
import Vintage from '../../../assets/images/Vintage.jpg';
import Eclectic from '../../../assets/images/Eclectic.jpg';
import CoastalCottage from '../../../assets/images/CoastalCottage.jpg';
import LivingSpaceIdeas from '../../../assets/images/LivingSpaces.jpg';


function LivingSection() {
    return (
        <div className="living-wrapper">
            <div className="living-heading">
                <h1>Living Spaces Ideas</h1>
            </div>

            <div className="living-frontimage">
                <img src={LivingSpaceIdeas} alt="Living Space Ideas" />
            </div>
            
            <div className="living-description">     
                <p>
                    "Living spaces are the heart of the home, where memories are made. <br />
                    Whether it’s family movie nights, entertaining guests, or relaxing with a book, these rooms should be cozy, functional, and inspiring. <br />
                    From practical furniture to a warm fireplace, create a space you'll love spending time in."
                </p>
            </div>

            <div className="living-section">
                {[
                    { title: "Family Living Room", image: FamilyLiving, description: "Fun and functional for family time." },
                    { title: "Entertainment Living Room", image: EntertainmentLiving, description: "Media-focused with cozy seating." },
                    { title: "Reading Nook Living Room", image: ReadingNook, description: "Quiet corner for reading and relaxation." },
                    { title: "Open-Concept Living Room", image: OpenConcept, description: "Spacious and seamless." },
                    { title: "Eclectic Living Room", image: Eclectic, description: "Diverse styles and vibrant colors." },
                    { title: "Coastal Living Room", image: CoastalCottage, description: "Light, airy, and natural." },
                    { title: "Small Space Living Room", image: SmallSpace, description: "Efficient and stylish in small spaces." },
                    { title: "Nature-Inspired Living Room", image: NatureInspired, description: "Calming with natural elements." },
                    { title: "Vintage Chic Living Room", image: Vintage, description: "Retro vibes with antique charm." },
                ].map((item, index) => (
                    <div className="living-box" key={index}>
                        <div className="living-content">
                            <h2>{item.title}</h2>
                            <div className="living-image">
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

export default LivingSection;