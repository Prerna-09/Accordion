import React, { useState } from 'react'
import data from "./data.js"

const Content = () => {

    const[selected, setSelected] = useState(null)
    const[enableMulti, setEnableMulti] = useState(false)
    const[multiple, setMultiple] = useState([])
    



    const handleClick = (id)=>{
        setSelected(id === selected ? null : id )
    }
    console.log(selected)

    console.log(enableMulti)

    const handleMultiClick = (id)=>{
        let cpyarray = [...multiple]
        const findIndex= cpyarray.indexOf(id)
        console.log(findIndex)


        if(findIndex===-1) cpyarray.push(id)
        else cpyarray.splice(findIndex, 1)
        console.log(cpyarray)

        setMultiple(cpyarray)



    }
   
 console.log(selected, multiple)



  return (
    <div className='content'>

        <button onClick={()=>setEnableMulti(!enableMulti)} className='multiSelection'>EnableMultiSelection</button>
        {data.map((item)=>(
            <div key={item.id}


            onClick={

                enableMulti ? 
                ()=>handleMultiClick(item.id)
                :
                ()=>handleClick(item.id)}>

          <h2 className='contentID'>{item.id}</h2> 
           <p className='question'
           >{item.question}</p>


          {/* showing answers */}
      
       {

        enableMulti ? 
        multiple.indexOf(item.id) !== -1 &&
        (
            <div>{item.answer}</div>
        )
        :

       selected === item.id ? 
       <div>{item.answer}</div>
       :
       null
       }
        </div>
        
))}
      
    </div>
  )
}

export default Content
