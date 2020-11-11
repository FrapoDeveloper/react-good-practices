
import React,{Component} from 'react'
import Loader from '../Atoms/loader'
const withloader =(propValue) => (WrappedComponet) => {
    return class WithLoader extends Component{
        
        constructor(props){
        super(props)
        }

       render(){
          
            return this.props[propValue] === 0
            ? <h1>Cargando-.......</h1>
            : <WrappedComponet {...this.props} />
        }  
    }
   
}
export default withloader