import React from 'react';
import ReactDOM from 'react-dom/client';

const obj = {
    df: 'alien!',
    ef: 'folks!',
    greet(){
        if(true){
            return this.ef;
        }
    }    
}

const myFirstElement = (
    <><h1>Hello React!</h1>
    <p>Hi there {obj.greet()}</p>
    </>


)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
