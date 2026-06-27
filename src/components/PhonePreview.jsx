import Brand from "./Brand";
import Icon from "./Icon";

export default function PhonePreview() {
  return (
    <div className="phone-scene" aria-label="Prévia do aplicativo the news">
      <div className="sun-disc" />
      <div className="phone phone-back" aria-hidden="true">
        <div className="phone-island" />
        <div className="phone-screen">
          <div className="mini-top"><Brand /><span>Edição</span></div>
          <b>terça-feira, 10 de março</b>
          <div className="mini-pills"><i>Para Você</i><i>Mundo</i><i>Brasil</i></div>
          <small>BREAKING</small>
          <div className="mini-photo bank" />
          <strong>Governo sanciona projeto de lei de socorro</strong>
        </div>
      </div>
      <div className="phone phone-front">
        <div className="phone-island" />
        <div className="phone-screen">
          <div className="mini-top"><Brand /><span>◯ ♡</span></div>
          <div className="mini-tabs"><i>the news</i><i>money</i><i>sports</i></div>
          <small>NEGÓCIOS</small>
          <strong>Os postos Ipiranga serão vendidos?</strong>
          <div className="mini-photo station">
            <span>Ipiranga</span>
          </div>
          <p>Cresceu o rumor de que a Ultrapar está com conversas avançadas para a venda.</p>
          <div className="mini-bottom"><Icon name="mail" size={12}/><Icon name="home" size={12}/><Icon name="menu" size={12}/></div>
        </div>
      </div>
    </div>
  );
}
