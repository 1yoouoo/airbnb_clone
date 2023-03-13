import Card from "../Card/Card";
import "./Cards.scss";

const dummy = [
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
];

const Cards = () => {
  const degree = 360 / dummy.length;
  const test = 150;
  console.log(180 - test);
  console.log(test);
  return (
    <div className="Cards">
      {dummy.map((card) => {
        return (
          <Card
            x={`${Math.sin((180 - degree * (card.id - 1)) * (Math.PI / 180))}`}
            y={`${Math.cos((180 - degree * (card.id - 1)) * (Math.PI / 180))}`}
            rotate={`${180 - (180 - degree * (card.id - 1))}deg`}
            title="hi"
          />
        );
      })}
    </div>
  );
};

export default Cards;
