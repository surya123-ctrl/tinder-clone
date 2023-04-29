import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
        },
        {
            name: "Jeff Bezos",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg/640px-Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg",
        },
    ]);
    const swiped = (direction, nameToDelete) => {
        console.log("Removing: ", +nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    };
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
};

export default TinderCards;
// useState accepts initial state and return 2 values ->
// 1 - The current state
// 2 - a function that update the state
// people -> current state
// setPeople -> function that update the current state

//map is used to traverse the list


//react tinder card is used to make swipeable element like in tinder