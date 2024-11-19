import React, { useState } from "react";

const OnChangeComponent = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState('')
  const [username, setUsername] = useState('')

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  // const handleChangeQuantity = (event) => {
  //   setQuantity(event.target.value)
  // }

  return (
    <div>
      <br />
      <br />
      <div>
        <p>{name}</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <p>{quantity}</p>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
      </div>
      <div>
      <p>{comment}</p>
      <textarea name="" value={comment} onChange={(e) => setComment(e.target.value)} id="" placeholder="Leave a comment"></textarea>
      </div>
      <div>
        <p>{username}</p>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
     
    </div>
  );
};

export default OnChangeComponent;
