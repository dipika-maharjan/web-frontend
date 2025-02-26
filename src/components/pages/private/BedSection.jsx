import React from "react";
import '../../../styles/BedSection.css';
import BedSpaceIdeas from '../../../assets/images/bedroomspaces.jpeg'
import MasterRoom from '../../../assets/images/masterbedroom.jpg'
import GuestRoom from '../../../assets/images/guestroom.jpg'
import KidsRoom from '../../../assets/images/kidsroom.jpg'
import StudioRoom from '../../../assets/images/studioroom.jpg'
import LoftRoom from '../../../assets/images/loftroom.jpg'
import TeenRoom from '../../../assets/images/teenroom.webp'
import EclecticRoom from '../../../assets/images/eclecticroom.jpeg'
import FrenchRoom from '../../../assets/images/frenchroom.jpg'
import ColorfulRoom from '../../../assets/images/colorfulroom.jpg'

function BedSection() {
    return (
        <div className="bed-wrapper">
            <div className="bed-heading">
                <h1>Bedroom Spaces Ideas</h1>
            </div>

            <div className="bed-frontimage">
                <img src={BedSpaceIdeas} alt="Bed Space Ideas" />
            </div>
            
            <div className="bed-description">     
                <p>
                "Your bedroom is your personal sanctuary, a place to unwind and recharge. <br/>
                Whether it's a peaceful retreat after a long day or a cozy spot to start your morning, this space should reflect your style and provide comfort. <br/>
                From plush bedding to calming decor, create a restful environment where you can escape, relax, and feel at home."
                </p>
            </div>

            <div className="bed-section">
                {[
                    { title: "Master Bedroom", image: MasterRoom, description: "Elegant and spacious." },
                    { title: "Guest Bedroom", image: GuestRoom, description: "Cozy and inviting." },
                    { title: "Kids Bedroom", image: KidsRoom, description: "Fun and playful." },
                    { title: "Studio Bedroom", image: StudioRoom, description: "Compact and multifunctional." },
                    { title: "Loft Bedroom", image: LoftRoom, description: "Airy and open." },
                    { title: "Teen Bedroom", image: TeenRoom, description: "Trendy and personal." },
                    { title: "Eclectic Bedroom", image: EclecticRoom, description: "Unique and creative." },
                    { title: "French Chic Master Bedroom", image: FrenchRoom, description: "Sophisticated and serene." },
                    { title: "Colorful Modern Bedroom", image: ColorfulRoom, description: "Bold and retro.." },
                ].map((item, index) => (
                    <div className="Bed-box" key={index}>
                        <div className="Bed-content">
                            <h2>{item.title}</h2>
                            <div className="Bed-image">
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

export default BedSection;