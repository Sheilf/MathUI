
import React, { Component } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import KeyboardButton from '../KeyboardButton/KeyboardButton';
import './Keyboard.css';
import '../../styles/flexborder.css';

class Keyboard extends Component {
    //to do
    //set props -> Keyboard
    //
  constructor(props){
    super(props);
    this.state={
        lastButton: null,
        currentSpell: 0
    }

    this.printSymbol = this.printSymbol.bind(this);
    this.printFromKeyboard=this.printFromKeyboard.bind(this);
  }
  

  componentDidMount(){
      document.getElementById("Keyboard_parent").addEventListener('keydown', event=>{
        this.printFromKeyboard(event)
      })
  }

  printSymbol(event){
    let symbolinput =  document.getElementById('math-symbol-text-container');

   symbolinput.innerHTML =  symbolinput.innerHTML + " " + event.currentTarget.innerHTML;

  }

  printFromKeyboard(event){
        // alert(event.keyCode);

      let spellbook = document.getElementById("spellbook");
      let spellbookCount = spellbook.childElementCount;
      let currentSpell = this.state.currentSpell;
      

      if(event.keyCode==68){
        if(currentSpell == spellbookCount-1){
          // alert("RESETTING")
          this.setState({currentSpell: 0});
        }else{
          this.setState({currentSpell: currentSpell+1})
        }

        spellbook.childNodes[currentSpell].focus();
      } 

   
        // alert("key is q")
      // alert(document.getElementById("spellbook").childNodes.length);

  }
  render() {
    // var BlockMath = ReactKaTeX.BlockMath;
    // alert("ON block: "+this.state.currentSpell);
    let spellbook = document.getElementById("spellbook");

    return (
      <button id="Keyboard_parent" className="Keyboard flex-border-column-centered" autoFocus>
          Smart Keys in development.
          <br/>
          Press 'd' to switch keys.

          
          <div id="math-symbol-text-container">
          </div>

          <div id="spellbook" className="flex-border-row-centered"  >
            {/* <BlockMath math={"\\int_0^\\infty x^2 dx"}/> */}

            <KeyboardButton 
              id="\\int_0^\\infty"
              symbol="integral_0_to_infinity" combination={"\\int_0^\\infty"} 
              clickEvent={
                this.printSymbol
              }
            />

           <KeyboardButton 
              id="\\int"
              symbol="integral" combination={"\\int"} 
              clickEvent={
                this.printSymbol
              }
            />      

            <KeyboardButton 
              id="\\nabla"
              symbol="integral_0_to_infinity" combination={"\\nabla"} 
              clickEvent={
                this.printSymbol
              }
            />     
          </div>
      </button>
    );
  }
}

export default Keyboard;


