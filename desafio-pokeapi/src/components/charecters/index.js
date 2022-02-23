import Style from "./styles.module.scss";
import Background from "../../assets/img/poke-background.png";

export const Charecters = () => {
  return (
    <>
      <div className={Style.charecter}>
        <div className={Style.content}>
          <div className={Style.texts}>
            <span>Name</span>
            <p>category</p>
          </div>
          <div className={Style.imgs}>
            <img src={Background} alt="name charecter" />
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="name charecter"
            />
          </div>
        </div>
      </div>
    </>
  );
};
