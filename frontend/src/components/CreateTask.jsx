import React from 'react';
import axios from 'axios';

export default function CreateTask(){
    const [head, setHead] = React.useState("");
    const [body, setBody] = React.useState("");
    function postData(e){
        e.preventDefault();
        axios('http://localhost:4000/create',{
            method: 'POST',
            data:{
                head,
                body 
            }
        }).catch(err=> console.log(err));
        console.log('it works');
        setHead("");
        setBody("");
    }
    return (
        <section>
        <header>
            <span></span>
            <span></span>
        </header>
        <div className="makelist">
            <h2>WHAT TO DO? <img src="./media/smiling.png" alt="" /></h2>
            <form 
                method="post" 
                action="/create" 
                acceptCharset="utf-8" 
                encType="text/plain">
                <input 
                    type="text" 
                    value={head} 
                    onChange={(e)=> setHead(e.target.value)}
                    placeholder="What could the title be? Hmm.. :P" 
                    required
                />
                <textarea 
                    value={body} 
                    onChange={(e)=> setBody(e.target.value)}
                    placeholder="Tell me MORE !!" 
                    required
                ></textarea>
                <button type='submit' onClick={postData}>Let's Do This !</button>
            </form>
        </div>
    </section>
    );
}