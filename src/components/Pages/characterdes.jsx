import React from 'react'
import {Link} from 'react-router-dom'

const cursos = [
  {
    key :1,
    nombre : "Eren Jaeger",
    years :"19 (año 854)",
    birthdate : "30 de marzo",
    gender: "Masculino",
    img :  "https://i.pinimg.com/564x/85/0c/e7/850ce705819930ca65634ec3000ba4b3.jpg",
    gif :"https://pa1.narvii.com/6450/552bf87591767a8467bdede43fef9b3dcb599531_hq.gif",
    description : "Protagonista principal de la serie. Es el único hijo de Grisha y Carla Jaeger. A su vez, es el medio hermano menor de Zeke Jaeger. Es portador del Titán de Ataque, el Titán Fundador y el Titán Martillo de Guerra. Eren es oriundo del Distrito Shiganshina.",
    definition : "Carece de talentos, mejoró a través de una diligencia sobresaliente y posee un gran sentido de propósito."
  },
  
  {
    key :2,
    nombre : "Mikasa Ackerman",
    years :"19 (año 854)",
    birthdate : "10 de febrero",
    gender: "Femenino",
    img :  "https://i.pinimg.com/564x/34/16/f1/3416f1dd73dff3eca16ed693ec721047.jpg",
    gif :"https://data.whicdn.com/images/71191009/original.gif",
    description : "Es la hermana adoptiva de Eren Jaeger. Cambió su personalidad tras el asesinato de sus padres, ya que cuando se revela su pasado se ve que Mikasa, antes de la tragedia, solía ser una niña alegre. Sin embargo, lo da todo por las personas que le importan.",
    definition : "Su ejecución es ejemplar em todas las áreas, realmente es una genio con importancia histórica sin precedentes."
  },
  
  {
    key :3,
    nombre : "Armin Arlert",
    years :"19 (año 854)",
    birthdate : "03 de noviembre",
    gender: "Masculino",
    img :  "https://i.pinimg.com/564x/7e/b0/54/7eb0549c345268f86fb187c51f371100.jpg",
    gif :"https://pa1.narvii.com/6455/6afb85cfcbc23c3b79b4e6ac7481208ee7df4a8e_hq.gif",
    description : "Es el actual comandante del Cuerpo de Exploración y un amigo de la infancia de Eren Jaeger y Mikasa Ackerman. Aunque físicamente es más débil que el resto de sus compañeros, demuestra una gran inteligencia a través de su capacidad para la formación de estrategias. ",
    definition : "Le falta fuerza fisica pero lo compensa con su aptitud académica. Es uno de los mejores estrategas de la historia,"
  },
  
  {
  
    key :4,
    nombre : "Reiner Braun",
    years :"21 (año 854)",
    birthdate : "01 de agosto",
    gender: "Masculino",
    img :  "https://i.pinimg.com/564x/63/a6/5b/63a65b6561e42e662015dcad9898818e.jpg",
    gif :"https://i.pinimg.com/originals/6b/d6/c3/6bd6c3ab97b0d9d20052893a4df380af.gif",
    description : "Es un ex-miembro del Cuerpo de Exploración. Posee la habilidad de transformarse en un titán y sirve a una unidad de soldados de Marley conocidos como guerreros. En el año 845, se infiltró en las murallas con la misión de encontrar y tomar el poder del Titán Fundador.",
    definition : "Posee una fortaleza mental y fisica, sus compañeros confian plenamente en él, pero su actitud puede ser confusa."
  },
  
  {
   
    key :5,
    nombre : "Annie Leonhart",
    years :"20 (año 854)",
    birthdate : "22 de marzo",
    gender: "Femenino",
    img :  "https://i.pinimg.com/564x/91/37/06/9137068743f8dc740196af4a32906b85.jpg",
    gif :"https://i.pinimg.com/originals/3a/da/27/3ada273ccff19d6f3147bbcd73ceb405.gif",
    description : "Ella posee la habilidad de transformarse en un titán y sirve a una unidad de soldados de Marley conocidos como guerreros Se le considera una chica solitaria y poco amistosa. Es apática y somnolienta, con poco deseo de esforzarse en cualquiera de las disciplinas.",
    definition : "Aunque sus habilidades de combate son excepcionales, no trabaja bien como parte del equipo, es un lobo solitario."
  },
  
  {
   
    key :6,
    nombre : "Bertolt Hoover",
    years :"16 (año 854)",
    birthdate : "30 de diciembre",
    gender: "Masculino",
    img :  "https://i.pinimg.com/564x/be/79/fd/be79fd92425988eccfb79cac1bb1105b.jpg",
    gif :"https://pa1.narvii.com/6423/9c7a10f4d7208ef87d6f3d9fe0a216394bc759d4_hq.gif",
    description : "Él poseía la habilidad de transformarse en un titán y servía a una unidad de soldados de Marley conocidos como guerreros. Bertolt era portador del Titán Colosal, un gigante de 60 metros de altura, capaz de asomarse por encima de los muros sin esfuerzo.",
    definition : "Es muy talentoso pero le falta iniciativa, es algo reservado, y suele seguir a los demás debido a su débil voluntad."
  },
  
   {
   
    key :7,
    nombre : "Sasha Blouse",
    years :"16 (año 854)",
    birthdate : "26 de julio",
    gender: "Femenino",
    img :  "https://i.pinimg.com/564x/b0/c0/13/b0c01339e3531f7043c9da1f63bf4972.jpg",
    gif :"https://giffiles.alphacoders.com/114/114851.gif",
    description : "Era una acaparadora de comida. Sasha nació y creció en Dauper, una villa con costumbres de caza poco poblada y rodeada de montañas. A pesar de que los titanes le horrorizaban, se unió al Cuerpo de Exploración.",
    definition : "Ella funciona trabajando de una manera poco convencional, esa mentalidad no la hace apta para actividades organizadas."
  },
  
  
  
   {
   
    key :8,
    nombre : "Connie Springer",
    years :"18 (año 854)",
    birthdate : "02 de mayo",
    gender: "Masculino",
    img :  "https://i.pinimg.com/564x/cf/72/cf/cf72cf75a5a95a13cdbd3180ea758f2d.jpg",
    gif :"https://pa1.narvii.com/6552/102bcca1d857f3e156e3467e69c5aefc7555b3d9_00.gif",
    description : "Es miembro del Cuerpo de Exploración, originario de Ragako, Connie se enroló en el ejército con el objetivo de hacer que su familia y su pueblo se enorgullecieran de él. Connie decidió unirse al Cuerpo de Exploración, a pesar del gran miedo que sentía por los titanes. ",
    definition : "Tiene la habilidad para hacer giros cerrados, pero su mente no es en absoluto lo suficientemente fuerte."
  },
  
   {
   
    key :9,
    nombre : "Levi Ackerman",
    years :"35 (año 854)",
    birthdate : "25 de diciembre",
    gender: "Masculino",
    img :  "https://i.pinimg.com/564x/a7/e2/41/a7e2412f58efbcdfd23d01defc1e5528.jpg",
    gif :"https://i.pinimg.com/originals/de/c1/2d/dec12d358675360cc0a5d5de617b9c54.gif",
    description : "Es el capitán de escuadrón, literalmente líder de los soldados) del escuadrón de operaciones especiales del Cuerpo de Exploración. Levi es un genio en el uso de las Maniobra Tridimensionales. Muchos civiles han comentado que el es tan poderoso como 100 soldados juntos. ",
    definition : "Conocido como el soldado más fuerte de la humanidad, tiene una expresión escéptica, la cual parece ser inalterable."
  }

]




const Coursedes = ({ match }) => {
    const cursoActual = cursos.filter(c => c.key === parseInt(match.params.id))[0]
    return (
  
        cursoActual
         ?   <article class="s-shadow-bottom">
         <div class="ed-grid m-grid-5 s-gap-2 m-pxy-2 s-bg-white s-radius-tl s-radius-tr">
           <div class="m-cols-2 img-container s-ratio-16-9 s-radius-tl s-radius-tr m-radius">
               <img src={cursoActual.gif} alt={cursoActual.nombre}/>
           </div>
           <div class="s-pxy-2 m-pxy-0 m-cols-3">
          <h1>{cursoActual.nombre}</h1>
          <h3>{cursoActual.gender}</h3>
    <h3 class="s-mb-0">{cursoActual.description}</h3>
           </div>
         </div>
         <footer class="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
        

            
        
         <div class="s-to-center">{`Nacio el ${cursoActual.birthdate} y tiene ${cursoActual.years} años.`}</div>
      
         </footer>
       </article>
       
        
         :  <div><h1>Curso no encontrado, busca cursos <Link to="/cursos">Aqui</Link>  </h1></div>
        
    )
}

  export default Coursedes