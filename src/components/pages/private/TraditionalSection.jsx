import React from "react";
import '../../../styles/TraditionalSection.css';
import TraditionalSpaceIdea from '../../../assets/images/TraditionalSpaceIdea.jpeg'
import TimelessTraditional from '../../../assets/images/TimelessTraditional.jpg'
import ArchitecturalDetails from '../../../assets/images/ArchitecturalDetails.jpg'
import TraditionalArches from '../../../assets/images/TraditionalArches.jpg'
import DecorativePatterns from '../../../assets/images/DecorativePatterns.jpeg'
import MaximalistCelebration from '../../../assets/images/MaximalistCelebration.jpeg'
import ClassicColorPalettes from '../../../assets/images/ClassicColorPalettes.jpeg'
import CozyDen from '../../../assets/images/CozyDen.jpeg'
import SlightlyFormal from '../../../assets/images/SlightlyFormal.jpg'
import QuirkyAntiques from '../../../assets/images/QuirkyAntiques.jpg'

function TraditionalSection() {
    return (
        <div className="traditional-wrapper">
            <div className="traditional-heading">
                <h1>Traditional Spaces Ideas</h1>
            </div>

            <div className="traditional-frontimage">
                <img src={TraditionalSpaceIdea} alt="Traditional Space Ideas" />
            </div>
            
            <div className="traditional-description">     
                <p>
                    "Classic elegance with rich textures, warm tones, and timeless designs that evoke a sense of comfort and nostalgia."
                </p>
            </div>

            <div className="traditional-section">
                {[ 
                    { title: "Timeless Traditional", image: TimelessTraditional, description: "Classic, cozy comfort." },
                    { title: "Architectural Details", image: ArchitecturalDetails, description: "Rich warmth and texture." },
                    { title: "Traditional Arches", image: TraditionalArches , description: "Elegant outdoor vibes." },
                    { title: "Decorative Patterns", image: DecorativePatterns , description: "Handcrafted charm." },
                    { title: "A Maximalist Celebration", image: MaximalistCelebration , description: "Bold and rugged elegance." },
                    { title: "Classic Color Palettes", image: ClassicColorPalettes, description: "Vintage, timeless hues." },
                    { title: "Cozy Den", image: CozyDen, description: "Classic warmth and coziness." },
                    { title: "Slightly Formal", image: SlightlyFormal, description: "Elegant, cozy retreat." },
                    { title: "Quirky Antiques", image: QuirkyAntiques, description: "Timeless wooden accents." }
                ].map((item, index) => (
                    <div className="traditional-box" key={index}>
                        <div className="traditional-content">
                            <h2>{item.title}</h2>
                            <div className="traditional-image">
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

export default TraditionalSection;
