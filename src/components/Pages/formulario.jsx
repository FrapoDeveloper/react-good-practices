
import React,{Component} from 'react'

class Formulario extends Component{
    constructor(props){
        super() //construye una instancia
        this.state ={
            name : "",
            correo : "",
        }
       this.printRealTime1 = this.printRealTime1.bind(this)
       this.printRealTime2 = this.printRealTime2.bind(this)

    }

    printRealTime1(e){
        this.setState({
             name : e.target.value
        })
    }

    printRealTime2(e){
        this.setState({
            correo : e.target.value
        })
    }

    render(){
        return(
        
             <>
              <div className="ed-grid s-main-left  s-left s-grid-2 " >
         
                <form>
                <h1>Formulario </h1>
                <div className="form__item">
                    <label >Nombre completo</label>
                    <input type="text" onChange={this.printRealTime1}/>
                </div>
                <div className="form__item">
                    <label >Numero</label>
                    <input type="email" onChange={this.printRealTime2} />
                </div>
                   <div className="form__item">
                    <input type="submit" className="button full" value="Enviar" />
                </div>

                </form>
            <div>
            <h3>{`Hola bienvenido: ${this.state.name}.`}</h3>
            <span>{`Enviamos un correo a:  ${this.state.correo}, muchas gracias.` }</span>
            </div>
      
            </div>  
          
           </>
     
           
        )
    }
}
export default Formulario