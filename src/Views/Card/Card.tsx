import "./Card.scss";

const Card = ({ x, y, rotate, title }: any) => {
  return (
    <div
      className="Card"
      style={{
        transform: `translate(${x * 35}vw, ${y * 35}vw) rotate(${rotate})`,
        cursor: "pointer",
        transition: "all 0.5s ease",
      }}
    >
      {title}
    </div>
  );
};

export default Card;
