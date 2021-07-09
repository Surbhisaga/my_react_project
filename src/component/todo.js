import React, { useState } from "react";
// import ReactDOM from 'react-dom';
import todo from "../images/todo.png";
import "../App.css";

// const getLocalItems = () => {
//     let list = localStorage.getItems('lists');
//     console.log(list);

//     if(list){
//         return JSON.parse(localStorage.getItems('lists'));
//     }else{
//         return[];
//     }
// }

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
        alert("please fill data");
    }else if (inputData && !toggleSubmit) {
        setItems(
            items.map((elem) => {
                if(elem.id === isEditItem){
                    return{ ...elem, name:inputData}
                }
                return elem;
            })
        )
        setToggleSubmit(true);
        setInputData('');
        setIsEditItem(null);
    } else {
      const allInputData = {id: new Date().getTime().toString(), name: inputData};
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  //delete items
  const deleteItems = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updateditems);
  };

  //remove all data
  const removeAll = () => {
    setItems([]);
  };


  //edit items
  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  };

  return (
    <>
      {/* background div color mate */}
<div className="main-div">
        {/* inner child  */}
        <div className="child-div">
            <figure>
                <img src={todo} alt="todologo" />
                <figcaption> Add your List Here...</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder="Add items" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                {
                    toggleSubmit ? 
                        <i className="fa fa-plus add-btn" title="Add items" onClick={addItem}></i> : 
                        <i className="far fa-edit add-btn" title="Update items" onClick={addItem}></i>
                }
          </div>

          <div className="showItems">
            {
                items.map((elem) => {
                    return (
                        <div className="eachItem" key={elem.id}>
                            <h3>{elem.name}</h3>
                            <div className="todo-btn">
                                <i className="far fa-edit add-btn" title="Edit-items" onClick={() => editItem(elem.id)}></i>
                                <i className="far fa-trash-alt add-btn" title="Delete-items" onClick={() => deleteItems(elem.id)}></i>
                            </div>
                        </div>
                    )
                })
            }
            </div>
          
          {/* clear all buttons */}
        <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll} ><span> CHECK LIST </span></button>
        </div>
    </div>
</div>
    </>
  )
}

export default Todo;
 