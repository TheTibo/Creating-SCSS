import "../styles/Card.modules.scss";
import Stars from "./Stars";
function CardMain() {
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/fr/thumb/3/34/One_Piece_%28ja%29_Logo.svg/2560px-One_Piece_%28ja%29_Logo.svg.png"
        alt="LogoOnePiece"
      ></img>
      <h1>One Piece</h1>
      <Stars />
      <h2>Synopsis</h2>
      <p>
        Monkey D. Luffy est un jeune aventurier qui a toujours rêvé d'une vie de
        liberté. Quittant son village, il se lance dans un périlleux voyage à la
        recherche d'un trésor mythique, le One Piece, afin de devenir le roi des
        pirates !
      </p>
      <h2>Saisons</h2>
      <ul>
        <li>
          {" "}
          <button>Saison 1</button>
        </li>
        <li>
          {" "}
          <button>Saison 2</button>
        </li>
        <li>
          {" "}
          <button>Saison 3</button>
        </li>
        <li>
          {" "}
          <button>Saison 4</button>
        </li>
        <li>
          {" "}
          <button>Saison 5</button>
        </li>
      </ul>
    </>
  );
}

export default CardMain;
