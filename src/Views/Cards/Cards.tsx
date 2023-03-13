import Card from "../Card/Card";
import "./Cards.scss";
const Cards = () => {
  return (
    <div className="Cards">
      <Card
        x={`${Math.sin(-80 * (Math.PI / 180))}`}
        y={`${Math.cos(-80 * (Math.PI / 180))}`}
        rotate="-80deg"
      />
      <Card
        x={`${Math.sin(-64 * (Math.PI / 180))}`}
        y={`${Math.cos(-64 * (Math.PI / 180))}`}
        rotate="-64deg"
      />
      <Card
        x={`${Math.sin(-48 * (Math.PI / 180))}`}
        y={`${Math.cos(-48 * (Math.PI / 180))}`}
        rotate="-48deg"
      />
      <Card
        x={`${Math.sin(-32 * (Math.PI / 180))}`}
        y={`${Math.cos(-32 * (Math.PI / 180))}`}
        rotate="-32deg"
      />
      <Card
        x={`${Math.sin(-16 * (Math.PI / 180))}`}
        y={`${Math.cos(-16 * (Math.PI / 180))}`}
        rotate="-16deg"
      />
      <Card
        x={`${Math.sin(0 * (Math.PI / 180))}`}
        y={`${Math.cos(0 * (Math.PI / 180))}`}
        rotate="0deg"
      />
      <Card
        x={`${Math.sin(16 * (Math.PI / 180))}`}
        y={`${Math.cos(16 * (Math.PI / 180))}`}
        rotate="16deg"
      />
      <Card
        x={`${Math.sin(32 * (Math.PI / 180))}`}
        y={`${Math.cos(32 * (Math.PI / 180))}`}
        rotate="32deg"
      />
      <Card
        x={`${Math.sin(48 * (Math.PI / 180))}`}
        y={`${Math.cos(48 * (Math.PI / 180))}`}
        rotate="48deg"
      />
      <Card
        x={`${Math.sin(64 * (Math.PI / 180))}`}
        y={`${Math.cos(64 * (Math.PI / 180))}`}
        rotate="64deg"
      />
      <Card
        x={`${Math.sin(80 * (Math.PI / 180))}`}
        y={`${Math.cos(80 * (Math.PI / 180))}`}
        rotate="80deg"
      />
    </div>
  );
};

export default Cards;
