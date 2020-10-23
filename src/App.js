import React from "react";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    squares:Array(9).fill(null),
    count: 0
    }
    this.winnerLine = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
  }

  isWinner = () => {
  let s = (this.state.count % 2 ===0) ? 'x' : 'o';
  for (let i =0; i<this.winnerLine.length;i++) {
  let line = this.winnerLine[i];
  if (this.state.squares[line[0]] === s 
  && this.state.squares[line[1]] === s
  && this.state.squares[line[2]] === s) {
    document.querySelector('.status').innerHTML = 'Winner: '+s;
    setTimeout(()=> {
      this.setState({squares: Array(9).fill(null)});
      this.setState({count: 0});
      }, 3000) 
  }
  }
  }
  clickHandler = event => {
    // data-number square
let data = event.target.getAttribute('data');
let actSquare = this.state.squares;
if (actSquare[data] === null) {
actSquare[data]=(this.state.count % 2 ===0) ? 'x' : 'o';
this.setState({count: this.state.count + 1});
this.setState({squares: actSquare});
}
else {
  document.querySelector('.status').innerHTML = "!!!";
}
this.isWinner();
  }
  refresh = () => {
    window.location.reload();
    console.log('go');
  }

  render() {
     return (
      <div>
      <h1>Tic-Tac-toe</h1>
      <div className="tic-tac-toe">
      <div className="ttt-grid" onClick= {this.clickHandler} data ="0"><div className="xo">{this.state.squares[0]}</div></div>
      <div className="ttt-grid" onClick= {this.clickHandler} data ="1"><div className="xo">{this.state.squares[1]}</div></div>
      <div className="ttt-grid" onClick= {this.clickHandler} data ="2"><div className="xo">{this.state.squares[2]}</div></div>
      <div className="ttt-grid" onClick= {this.clickHandler} data ="3"><div className="xo">{this.state.squares[3]}</div></div>
      <div className="ttt-grid" onClick= {this.clickHandler} data ="4"><div className="xo">{this.state.squares[4]}</div></div>
      <div className="ttt-grid" onClick= {this.clickHandler} data ="5"><div className="xo">{this.state.squares[5]}</div></div>
      <div className="ttt-grid" onClick= {this.clickHandler} data ="6"><div className="xo">{this.state.squares[6]}</div></div>
      <div className="ttt-grid" onClick= {this.clickHandler} data ="7"><div className="xo">{this.state.squares[7]}</div></div>
      <div className="ttt-grid" onClick= {this.clickHandler} data ="8"><div className="xo">{this.state.squares[8]}</div></div>
      </div>
      <div className="ttt-status"><p className="status"></p></div>
      <div className ="ttt-refr">
     <button className="refr" onClick={this.refresh}>Сбросить</button>
      
      </div>
      </div>
      
      
    );
  }
}

export default App;