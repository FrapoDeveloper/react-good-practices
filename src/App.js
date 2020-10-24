import React from 'react';
import './styles/styles.scss';
import Cardcourse from './components/cardcourse'
function App() {
  return (
    <>
        <section className="main-banner background grey-800 l-section">
          <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
            <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
                  <h1 className="bigger-title">
                      <span className="color white-color">Banner principal 
                      <span className="color blue-400">de dos columnas</span>
                      con EDgrid</span>
                  </h1>
                  <p className="white-color s-opacity-8">Creado utilizando los componentes de columnas. Totalmente responsive.</p>
                  <div className="s-main-center">
                      <a className="button blue-500 s-mr-2 s-mb-2 m-mb-0">Botón 1</a>
                      <a className="button ghost blue-400 s-mb-2 m-mb-0">Botón 2</a>
                  </div>
            </div>
                  <div>
                      <div className="img-container s-ratio-16-9">
                          <img src="https://ed-grid.com/assets/img/og-image.jpg" className="s-radius-1" />
                      </div>
                  </div>
            </div>
        </section>

        <div className="ed-grid m-grid-3">
        <Cardcourse />
        <Cardcourse />
        <Cardcourse />
        <Cardcourse />

        </div>
        

  </>
  );
}

export default App;
