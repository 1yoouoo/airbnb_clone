import Card from "../Card/Card";
import "./Cards.scss";
const dummy = [
  {
    id: 0,
    title: "card0",
  },
  {
    id: 1,
    title: "card1",
  },
  {
    id: 2,
    title: "card2",
  },
  {
    id: 3,
    title: "card3",
  },
  {
    id: 4,
    title: "card4",
  },
  {
    id: 5,
    title: "card5",
  },
  {
    id: 6,
    title: "card6",
  },
  {
    id: 7,
    title: "card7",
  },
  {
    id: 8,
    title: "card8",
  },
];

const Cards = () => {
  const degree = 140 / dummy.length;
  console.log(degree);

  return (
    <div className="Cards">
      {dummy.map((card) => {
        return (
          <Card
            title={card.title}
            id={card.id}
            x={`${Math.sin((110 + degree * card.id) * (Math.PI / 180))}`}
            y={`${Math.cos((110 + degree * card.id) * (Math.PI / 180))}`}
            rotate={`${180 - (110 + degree * card.id)}deg`}
          />
        );
      })}
    </div>
  );
};

export default Cards;
