import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props) {
  return(
    <li className="Produit">
      <img src={'images-produits/' + props.id + '.webp'} alt=""/>
      <div className="info">
        <p className="cours">{props.titre}</p>
        <p className="modification">{props.modification}</p>
      </div>
    </li>
  );
}