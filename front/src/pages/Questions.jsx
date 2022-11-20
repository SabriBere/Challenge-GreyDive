import React from 'react'
import { VerbalResponse, OpinionScale5} from '../components/Questions/CardQuestions'
//consultar al back

const tipoTarea = "verbalResponse"

 // tipoTarea === "verbalResponse" ? VerbalResponse : OptionScale5 
 //

const Questions = () => {
  return tipoTarea === "verbalResponse"  ? (
    <VerbalResponse/>
    
  ) : (
    <OpinionScale5/>
  )
}

export default Questions