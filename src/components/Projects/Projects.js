import {FaReact,FaNode} from "react-icons/fa"
import {SiCss3,SiHtml5,SiMongodb} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
//import assets
import Rpreview1 from '../assets/Resort-p1.jpg'
import Rpreview2 from '../assets/Resort-p2.jpg'
import Rpreview3 from '../assets/Resort-p3.jpg'

import Tpreview1 from '../assets/todo-p1.jpeg'
import Tpreview2 from '../assets/todo-p2.jpeg'
import Tpreview3 from '../assets/todo-p3.jpeg'

import Epreview1 from '../assets/exercise-p1.jpg'
import Epreview2 from '../assets/exercise-p2.jpg'
import Epreview3 from '../assets/exercise-p3.jpg'



import '../ProjectContainer/ProjectContainer.css'
import './Projects.css'


function Projects()
{
  


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title about_project' >Projects</h2>

{/* <-------------------------------------------------1 start-------------------------------------------> */}

    <div className='project' id='project'>

      <div>
         <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={Rpreview1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={Rpreview2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={Rpreview3} alt="Image 2"/>
           </SplideSlide>

        </Splide>
      </div>
   
     <div>

        <h3 className="about_project">Hotel Reservation App</h3>

        <p className='project__description'>
        The Beach Resort App is a Web application focused on providing a seamless booking experience for beachside accommodations. It allows users to easily reserve rooms, check availability, and access essential information about the resort, ensuring a convenient stay.        </p>

   
        <ul className='project__stack' >
       
          <li className='project__stack-item' id='stacks'>
            <SiHtml5 size={40} />
             <IoLogoJavascript size={40} />
            <SiCss3 size={40}/>
            <FaReact size={50}/>
          </li>
      
        </ul>


   
   


      <div id='b'>
       <a href="https://hotel-reserving-app.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/Ameer-Hamza289/Beach_Resort" target="_blank" >
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>

  
  </div> 


  </div>

{/* <-------------------------------------------------1 end-------------------------------------------> */}




{/* <-------------------------------------------------2 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={Tpreview1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={Tpreview2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={Tpreview3} alt="Image 2"/>
           </SplideSlide>


        </Splide>
</div>

<div>

  <h3 className="about_project">Todo List</h3>

  <p className='project__description'>
  MERN Todo List offers a convenient and flexible solution for managing tasks effectively. It combines the power of the MERN stack with a sleek and intuitive interface, making it the ideal tool for boosting productivity and keeping track of your to-do list.  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://mern-todo-list-app.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/Ameer-Hamza289/MERN_TODO"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------2 end-------------------------------------------> */}



{/* <-------------------------------------------------3 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={Epreview1} alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={Epreview2} alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={Epreview3} alt="Image 2"/>
           </SplideSlide>

        </Splide>
</div>

<div>

  <h3 className="about_project">Exercise Tracker</h3>

  <p className='project__description'>
  The Exercise Tracker is a web application that allows users to track their fitness activities and monitor their progress. With its intuitive interface and comprehensive features, it assists individuals in maintaining an organized exercise routine.  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      <FaReact size={40}/>
      <FaNode size={40}/>
      <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://exercise-tracker-app-mern-01.netlify.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/Ameer-Hamza289/mern_exercise-tracker"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------3 end-------------------------------------------> */}



    </section>
  )
}

export default Projects
