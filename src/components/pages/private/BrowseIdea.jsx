import React from "react";
import '../../../styles/BrowseIdea.css';
import livingRoomImage from "../../../assets/images/living.jpg";
import bedroomImage from "../../../assets/images/bedroom.jpg";
import diningImage from "../../../assets/images/dining.jpg";
import kitchenImage from "../../../assets/images/kitchen.jpg";
import officeImage from "../../../assets/images/office.jpg";
import rusticImage from "../../../assets/images/rustic.jpg";
import bohemianImage from "../../../assets/images/bohemian.jpg";
import minimalistImage from "../../../assets/images/minimalist.jpg";
import traditionalImage from "../../../assets/images/traditional.jpg";
// import budgetFriendlyImage from "../../assets/images/budget.jpg";
// import luxuryImage from "../../assets/images/luxury.jpg";
import { useNavigate } from "react-router-dom";

function BrowseIdea() {
    const navigate = useNavigate();

    const sections = [
        {
            title: "By Room",
            items: [
                { name: "Living Room", path: "/LivingSection" },
                { name: "Bed Room", path: "/BedSection" },
                { name: "Dining", path: "/DiningSection" },
                { name: "Kitchen", path: "/KitchenSection" },
                { name: "Office", path: "/OfficeSection" },
            ],
            images: [
                livingRoomImage, 
                bedroomImage, 
                diningImage, 
                kitchenImage, 
                officeImage, 
                
            ]
        },
        {
            title: "By Design",
            items: [
                { name: "Rustic", path: "/RusticSection" },
                { name: "Bohemian", path: "/BohemianSection" },
                { name: "Contemporary-Minimalist", path: "/MinimalistSection" },
                { name: "Traditional", path: "/TraditionalSection" }
            ],
            images: [
                rusticImage,
                bohemianImage,
                minimalistImage,
                traditionalImage,
            ]
        },
        // {
        //     title: "By Themes",
        //     items: [
        //         { name: "Budget-friendly", path: "/BudgetFriendlySection" },
        //         { name: "Luxury", path: "/LuxurySection" }
        //     ],
        //     images: [budgetFriendlyImage, luxuryImage]
        // }
    ];

    return (
        <div className="main">
            <div className="content">
                <h2>Explore Real Spaces</h2>
            </div>
            {sections.map((section, index) => (
                <div key={index} className="box">
                    <h2>Browse Ideas {section.title}</h2>
                    <div className="box-content">
                        {section.items.map((item, i) => (
                            <div 
                                key={i} 
                                className="box-item" 
                                onClick={() => navigate(item.path)} 
                            >
                                <div 
                                    className="box-image" 
                                    style={{ backgroundImage: `url(${section.images[i]})` }}
                                ></div>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <section className="choose-description">
            <h2>Why Choose Us?</h2>
            <div className="row">
                <div className="saveTime">
                    <div className="svg-cont">
                        <i></i>
                    </div>
                </div>
            </div>
            </section>
            
        </div>
    );
}

export default BrowseIdea;
