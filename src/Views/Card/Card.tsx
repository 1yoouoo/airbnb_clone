import "./Card.scss";

const Card = ({ x, y, rotate }: any) => {
  return (
    <div
      className="Card"
      style={{
        transform: `translate(${x * 35}vh, -${y * 35}vh) rotate(${rotate})`,
      }}
    >
      Card
    </div>
  );
};

export default Card;
