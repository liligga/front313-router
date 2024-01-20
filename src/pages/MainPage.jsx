import { useEffect, useState } from "react";
// zod

import axios from "axios";

const ChildTwoComponent = ({ parentValue, changeValue }) => {
  return (
    <div>
      Child two div {parentValue}
      <input type="number" onChange={(e) => changeValue(e.target.value)} />
    </div>
  );
};

const ChildOneComponent = ({ parentValue, changeValue }) => {
  return (
    <div>
      Child one div
      <ChildTwoComponent parentValue={parentValue} changeValue={changeValue} />
    </div>
  );
};

const ParentComponent = () => {
  const [value, setValue] = useState(100);

  return (
    <div>
      <h4>Parent div {value} </h4>
      <ChildOneComponent parentValue={value} changeValue={setValue} />
    </div>
  );
};

const MainPage = () => {
  useEffect(() => {
    const makeRequest = async () => {
      // CRUD
      // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      // const response = await axios.post(
      //   'https://jsonplaceholder.typicode.com/posts',
      //   {
      //     title: 'foo',
      //     body: 'bar',
      //     userId: 1
      //   }
      // )
      // const response = await axios.delete("https://dummyjson.com/posts/15");
      // const response = await axios.put(
      //   "https://dummyjson.com/posts/10",
      //   {
      //     title: "hello world",
      //     userId: 3
      //   }
      // )
      // console.log(response.data)
    };
    makeRequest();
  }, []);

  return (
    <div>
      <h1>Главная</h1>
      <ParentComponent />
    </div>
  );
};
export default MainPage;
