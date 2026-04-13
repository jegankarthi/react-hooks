// import react from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
 const [person, setPerson] = useState({firstName: '', lastName: ''});


    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
                        <button onClick={() => setCount(count + 5)}>Increase 5</button>
        <div>
                  <input type="text" onChange={(e) => setPerson({...person, firstName: e.target.value})} placeholder="Enter your first name"/>
      <input type="text" onChange={(e) => setPerson({...person, lastName: e.target.value})} placeholder="Enter your last name"/>
         {JSON.stringify(person)}
      <p>firstName value is: {person.firstName}</p>
      <p>lastName value is: {person.lastName}</p>

        </div>

        </div>
    );
}

export default Counter;