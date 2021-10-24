
/*
@Autor : Yuri Domingos
Data   : 24 - 10 - 2021
Objectivo : Construir a primeira versao da nossa aplication 
*/
import './App.scss';
import arrow from './imagens/love.jpg'

function App() {
  return (
    <div className="Hero">
       <div className="container">
         <div className="hero-inner">
           <div className="hero-content">
             <div className="hero-content-inner">
               <h1>
                 <div className="hero-content-line"> 
                   <div className="hero-content-line-inner"> Yuri Domingos  </div>
                 </div>
                 <div className="hero-content-line"> 
                   <div className="hero-content-line-inner"> Exemple lover    </div>
                 </div>
                 <div className="hero-content-line"> 
                   <div className="hero-content-line-inner"> Isaura Antóniy </div>
                 </div>
               </h1>
               <p>
                  Better treats serious cxardiometabolic diseasses to transform lives and reduce 
                  healthcare utilization through the use of digital therapeutics 
               </p>

               <div className="btn-row">
                 <button className="explore-button">
                   explore

                   <div className="arrow-icon">
                     <img src={arrow} alt="Error could not find "> </img>
                   </div>
                 </button>

               </div>

             </div>
           </div>
         </div>
 
       </div>
    </div>
  );
}

export default App;
