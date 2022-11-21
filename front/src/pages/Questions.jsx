import React, { useEffect, useState } from "react";
import { VerbalResponse, OpinionScale5} from '../components/Questions/CardQuestions'
import {useSelector, useDispatch} from "react-redux"
import {getAllQuestions} from "../redux/questions"

const tipoTarea = "verbalResponse"

const Questions = () => {

  const dispatch = useDispatch()
  const questions = useSelector((state) => state.questions);

  useEffect(()=>{
    dispatch(getAllQuestions())
  },[])

//hacer un map

return questions === "verbalResponse"  ? (
    <VerbalResponse/>
  ) : (
    <OpinionScale5/>
  )
}

export default Questions