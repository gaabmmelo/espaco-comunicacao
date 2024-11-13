import "./index.css";
import therapy from "../../assets/image.png";

const Content = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col d-flex flex-column">
          <h1 className="title">Espaço da Comunicação</h1>
          <h2 className="subtitle">Terapias Integradas</h2>
          <p className="description">
            Fonoaudiologia, Psicologia e Psicopedagogia.
          </p>
        </div>
        <div className="col">
          <div className="img">
            <img
              className="image-content"
              src={therapy}
              alt="Terapia background"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
