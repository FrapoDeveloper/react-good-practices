import React from 'react'
import Titancontainer from '../Organisms/titancontainer'

const titanes = [
    {
        key : 1,
        img : "https://i.pinimg.com/564x/24/09/d9/2409d98f7e0eb40e46b7dca7d574ceb7.jpg",
        name : "Titan de Ataque",  
        altura:"15m", 
        description:"Tiene una condicion fisica superior al de los titanes ordinarios, posee el poder de endurecimiento, pero cuando es lastimado se regenera lento."

    },

    {
        
        key : 2,
        img : "https://i.pinimg.com/564x/cc/60/be/cc60be7a6a38eec8ee3a2e061ed1cf54.jpg",
        name : "Titan hembra",
        altura: "14m",
        description: "Especialista en batallas cuerpo a cuerpo, es capaz de endurecer cualquier parte de su cuerpo, su regenacion es acelerada y atrea a titanes ordinarios."
      
    },
    {
        key : 3,
        img : "https://i.pinimg.com/564x/ea/5c/e1/ea5ce1d6d348160ce11bb5bf47c3f2df.jpg",
        name : "Titan colosal",
        altura: "60m",
        description: "Es el titan mas alto que exite, ademas es el titan con mas fuerza fisica, sin embargo carece de rapidez, y requiere mucha energia para su ataque de vapor."

    },
    {
        key : 4,
        img : "https://i.pinimg.com/564x/44/64/84/4464845a95422c4c24024c197097cccf.jpg",
        name: "Titan acorazado",
        altura:"15m",
       description:"Es un titan con una piel muy potente, ademas posee una armadura y tiene las articulaciones sin coraza lo que a veces lo deja un poco vulnerable. "

    },

    {
        key : 5,
        img: "https://i.pinimg.com/564x/71/a3/1d/71a31dc503dbae1f71fb9a2625818c97.jpg",
        name:"Titan bestia",
        altura: "30m",
        description:"Se considera el titan con mas fuerza fisica a los titanes cambiantes, esconde una habilidad espantosa que aun no ha sido revelada."

    },
    {
        key: 6,
        img:"https://i.pinimg.com/564x/7b/95/d1/7b95d1d62286b48eac32eec1fc5313c3.jpg",
        name:"Titan Mandibula",
        altura:"5m",
        description:"Considerado el titan mas pequeño, sin embargo tiene una gran velocidad, unas garras muy afiladas y una mandibula extremadamente poderosa."

    },
    {
        key:7,
        img:"https://i.pinimg.com/originals/0b/f4/e8/0bf4e8815ea965c61a5eba599298a00b.png",
        name:"Titan carguero",
        altura:"4m",
       description:"Este titan es uno de los mas misteriosos, posee una resistencia y rapidez formidable de echo puede transportar cargas pesadas sin descansar."
    },
    {
        key :8,
        img:"https://i.pinimg.com/564x/1d/d2/2e/1dd22eddf940b8b7f28cce97c7e48dea.jpg",
        name:"Titan martillo de guerra",
        altura:"desconocida",
        description:"Aparentemente posee la capacidad de usar el endurecimiento para crear armas resistentes, aun existen mas dones que se desconocen."

    },
    {
        key : 9,
        img : "https://pbs.twimg.com/media/DljkIFhUUAAoFas.jpg",
        name: "Titan fundador ",
        altura:"17m",
        description:"Es el titan mas importante y poderoso ya que controla la coordenada, solo pueden tener el poder maximo los la familia real Friz, borrar recuerdos, etc."

    }

]
const Sectiontitan = () => (

    <Titancontainer titanes={titanes}  />
    
)

export default Sectiontitan