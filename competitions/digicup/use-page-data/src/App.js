import React from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
import usePageData from "./hooks/usePageData";

function App() {
  // Here are some examples that you can test your hook
  const { request, ...props } = usePageData({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    fireOnLoad: true,
    successCallback: (data) => {
      console.log(data);
    },
    failedCallback: () => {
      console.log("Error Occurred");
    },
  });
  // Check console to see if your hook, works correctly
  console.log(props);
  // const { request, ...props } = usePageData({
  //   url: 'https://jsonplaceholder.typicode.com/todos/1',
  //   fireOnLoad: false,
  //   successCallback: (data) => {
  //     console.log(data);
  //   }
  // });
  // const { request, ...props } = usePageData({ url: 'https://jsonplaceholder.typicode.com/todos/1', fireOnLoad: false });
  return (
    <div className="container">
      <JSONPretty className="json-pretty" id="json-pretty" data={props} />
      {!props.pending && <button onClick={request}>Request</button>}
    </div>
  );
}

export default App;
