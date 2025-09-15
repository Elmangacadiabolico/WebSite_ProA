import "../CSS/Error404.css"
function Error404() {
  return (
    <> 
    <div className="error-page">
    <h1>404</h1>
  
    <div className="eyes">
      <div className="eye"><div className="pupil"></div></div>
      <div className="eye"><div className="pupil"></div></div>
    </div>
  
    <p>Página no encontrada</p>
    <a href="/">Volver al inicio</a>
  
    <span className="falling-text">why?</span>
    <span className="falling-text">por qué?</span>
    <span className="falling-text">cómo?</span>
  </div>
 </>
  );
}

export default Error404;
