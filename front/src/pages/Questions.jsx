import React, { useEffect, useState} from "react";
import { VerbalResponse, OpinionScale5, CardInstructions} from '../components/Questions/CardQuestions'
import Video from "../components/Recorder/Video";
// import {useSelector, useDispatch} from "react-redux"
// import {getAllQuestions} from "../redux/questions"
import { fetchApi } from "../config/axiosInstance";
import { Flex } from "@chakra-ui/react";

const Questions = () => {

  // const dispatch = useDispatch()
  // const questions = useSelector((state) => state.questions);
  // console.log(questions)

  // useEffect(()=>{
  //   dispatch(getAllQuestions())
  //  },[])
  const [questions, setQuestions] = useState([])

   useEffect(() => {
    const getAllQuestions = async () => {
      const res = await fetchApi({
        method: "get",
        url: "/api/questions/",
      });
      setQuestions(res.data.data.rows);
    };
    getAllQuestions();
  }, [questions]);



return(
  <>
  
  <Flex
  flexDirection="column"
  // border="red solid"
  width="100%"
  >
    <Video/>
  {questions?.map((pregunta, i)=>{
    return pregunta?.tipoTarea === "verbalResponse" ? (
      <VerbalResponse key={i} item={pregunta} flexDirection="column"/>
    ) : (
      <OpinionScale5 item={pregunta} flexDirection="column"/>
    )
  })}  
  {/* <CardInstructions/> */}
  </Flex> 
  </> 
)}

export default Questions