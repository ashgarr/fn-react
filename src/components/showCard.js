import React, { Component } from 'react'
import '../App.css'
import QuizCard1 from './QuizCard1'
import QuizCard2 from './QuizCard2'

function showCard(props){
    if(props.number == "1"){
        console.log("1")
        return <QuizCard1 />;
    }
    if (props.number == "2"){
        console.log("2")
        return <QuizCard2 />;
    }
}