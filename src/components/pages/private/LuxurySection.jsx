import React from "react";
// import '../../styles/LuxurySection.css';
// import LuxurySpaceIdeas from '../../assets/images/LuxurySpaceIdeas.jpg';
// import LuxuryWallDecor from '../../assets/images/LuxuryWallDecor.jpg';
// import RichTextures from '../../assets/images/RichTextures.jpg';
// import EmbraceFloralArrangements from '../../assets/images/EmbraceFloralArrangements.jpg';
// import MirrorsLuxuryWallDecor from '../../assets/images/MirrorsLuxuryWallDecor.jpeg';
// import AccentLightingArtwork from '../../assets/images/AccentLightingArtwork.jpg';
// import MetallicLuxury from '../../assets/images/MetallicLuxury.jpg';

function LuxurySection() {
    return (
        <div className="luxury-wrapper">
            {/* <div className="luxury-heading">
                <h1>Luxury Spaces Ideas</h1>
            </div>

            <div className="luxury-frontimage">
                <img src={LuxurySpaceIdeas} alt="Luxury Space Ideas" />
            </div>
            
            <div className="luxury-description">     
                <p>
                "Opulent and sophisticated designs featuring high-end materials, intricate details,<br/>
                 and a blend of comfort and elegance to create truly stunning spaces."
                </p>
            </div>

            <div className="luxury-section">
                {[ 
                    { title: "Luxury Wall Decor", image: LuxuryWallDecor, description: "Chic wall accents." },
                    { title: "Rich & Diverse Textures", image: RichTextures, description: "Warm, textured elegance." },
                    { title: "Floral Arrangements", image: EmbraceFloralArrangements, description: "Creative floral touches." },
                    { title: "Mirrors Wall Decor", image: MirrorsLuxuryWallDecor, description: "Bold, handcrafted mirrors." },
                    { title: "Accent Lighting & Artwork", image: AccentLightingArtwork, description: "Sophisticated lighting and art." },
                    { title: "Metallic Luxury Decor Items", image: MetallicLuxury, description: "Timeless metallic charm." }
                ].map((item, index) => (
                    <div className="luxury-box" key={index}>
                        <div className="luxury-content">
                            <h2>{item.title}</h2>
                            <div className="luxury-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default LuxurySection;
