import React, { Component } from 'react';
//import quizQuestions from './api/quizQuestions';
import logo from './svg/logo.svg';
import './App.css';
import Question from './component/question'
import Progress from './component/progress'
import AnswerList from './component/answerlist'
import Score from './component/score'

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
     quizQuestions:[{
      question: "What is the nickname of Aravind?",
      answers: [
          "Dehi","Cheni","Kol"
      ],
      correct:"Dehi"
  },
  {
    question: "Who is the captain of Indian Cricket Team?",
    answers: [
        "Roht","Koli","Doni"
    ],
    correct:"Koli"
}],
     progress:0,
     score:0 
    };
  }
    checkAnswer=(answer)=>{
      console.log(this);
      var correct = this.state.quizQuestions[this.state.progress].correct
      var newscore=0 , newprogress=0
      if(answer===correct){
        newscore=this.state.score+1;
        newprogress=this.state.progress+1;
        this.setState({score:newscore,progress:newprogress});
      }
      else{
        newprogress=this.state.progress+1;
        this.setState({progress:newprogress});
      }
    }
    resetQuiz=()=>{
      this.setState({score:0, progress:0})
    }
  componentDidMount(){
    //this.setState({questionData:quizQuestions})
    //console.log(quizQuestions,this.state);
  }

  render() {
    var questionData=this.state.quizQuestions[this.state.progress]
    //console.log(questionData.question)
    if(this.state.quizQuestions.length>this.state.progress)
    {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz</h2>
        </div>
      <Question question={questionData.question} />
       <AnswerList answers={questionData.answers} answerCallback={this.checkAnswer} correct={questionData.correct} />
       <Score score={this.state.score} />
       <Progress progress={this.state.progress} />
      </div>
    )
  }else{
    return(
      <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Quiz</h2>
      </div> 
      <h2>Finished</h2>
      <button type="button" onClick={this.resetQuiz}>Reset Quiz</button>
      <h4>Score:{this.state.score}</h4>
      </div>
    )
  }
}
}
export default About;
