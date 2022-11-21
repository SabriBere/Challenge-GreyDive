import React, { useEffect, useState } from "react";
import { VerbalResponse, OpinionScale5} from '../components/Questions/CardQuestions'
import Video from "../components/Recorder/Video";
import {useSelector, useDispatch} from "react-redux"
import {getAllQuestions} from "../redux/questions"

const tipoTarea = "verbalResponse"

const Questions = () => {

  const dispatch = useDispatch()
  const questions = useSelector((state) => state.questions);
  console.log(questions)

  useEffect(()=>{
    dispatch(getAllQuestions())
  },[])

//hacer un map
return(
  <>
  <Video/>
  {/* {questions?.map((pregunta, i)=>{
    return pregunta.tipoTarea === "verbalResponse" ? (
      <VerbalResponse key={i} item={pregunta}/>
    ) : (
      <OpinionScale5 item={pregunta}/>
    )
  })}  */}

  </>
)


}

export default Questions