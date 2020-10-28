import React from 'react';
import './styles/styles.scss';
import './styles/style.css';
import Animation from './components/animation.jsx'
import Cardcourse from './components/cardcourse';

const cursos = [
{
  key :1,
  title :"Curso de OpenGL",
  img :  "https://i.ytimg.com/vi/v7d3ic_lmGw/maxresdefault.jpg",
  price : "65"
},{
  key :2,
  title :"Java Spring",
  img :  "https://edteam-media.s3.amazonaws.com/courses/medium/6cbc514c-1e04-4bf4-8beb-fa595f363d9d.png",
  price : "48"
},{
  key :3,
  title :"Curso de Go",
  img :  "https://edteam-media.s3.amazonaws.com/courses/big/e737f2e3-92b3-400e-8d82-1b19e0277012.png",
  price : "52"
},{
   key :4,
  title :"App PWA",
  img :  "https://edteam-media.s3.amazonaws.com/courses/big/084a20f8-e327-47ce-a073-1df1f90e4a74.jpg",
  price : "28"
},{
   key :5,
  title :"Ayas y JS",
  img :  "https://edteam-media.s3.amazonaws.com/courses/big/358b2db1-a529-4892-92a6-23bf97092c32.jpg",
  price : "63"
}
]

function App() {
  return (
    <>
        <section className="main-banner background grey-800 l-section">
          <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
            <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
                  <h1 className="bigger-title">
                      <span className="color white-color">Hola, bienvenid@ <br/> 
                      <span className="color blue-400">Este es mi portafolio</span>
                    </span>
                  </h1>
                  <p className="white-color s-opacity-8">¡Exposicion de tecnologias informaticas con vision empresarial!</p>
                  <div className="s-main-center">
                      <p className="button blue-500 s-mr-2 s-mb-2 m-mb-0">Botón 1</p>
                      <p  className="button ghost blue-400 s-mb-2 m-mb-0">Botón 2</p>
                  </div>
            </div>
                  <div>
                      <div className="img-container s-ratio-16-9">
                        <Animation/>
                      </div>
                  </div>
            </div>
        </section>

        <div className="ed-grid m-grid-3 center">
        {
          cursos.map(({key,img,title,price})=>(
            <Cardcourse
            key={key}
            img={img}
            title={title}
            price={price}
            />
          ) )

//          cursos.map(c => <Cardcourse key= {c.key} title = {c.title} img={c.img} price={c.price} />)
        }

        </div>
    
  </>
  );
}

export default App;
