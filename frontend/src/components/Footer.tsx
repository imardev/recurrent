import { Link } from "react-router";
export default function Footer() {
  return (
    <footer>
      <section className="principal grid grid-cols-3">
        <div className="brand-info">
          <article className="brand">
            <div className="brand-app flex flex-row">
              <img src="" alt="" />
              <span>Recurrent</span>
            </div>
          </article>
          <div className="social-links"></div>
        </div>
        <div className="politicas">
          <h3>Politicas</h3>
          <ul>
            <li>
              <Link to="/">Politica de privacidad</Link>
            </li>
            <li>
              <Link to="/">Aviso legal</Link>
            </li>
            <li>
              <Link to="/">Terminos y Condiciones</Link>
            </li>
            <li>
              <Link to="/">Politica de privacidad</Link>
            </li>
          </ul>
        </div>
        <div className="enlaces">
          <h3>Enlaces</h3>
          <ul>
            <li>
              <Link to="/">Enlace 1</Link>
            </li>
            <li>
              <Link to="/">Enlace 2</Link>
            </li>
            <li>
              <Link to="/">Enlace 3</Link>
            </li>
            <li>
              <Link to="/">Enlace 4</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
