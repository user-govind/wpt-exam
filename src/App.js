import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <MessageApp></MessageApp>
    </div>
  );
}

function MessageApp() {
  let Student_name = "Govind Kulkarni";
  let Student_id = "(210940320044)";

  const [message, setmessage] = useState("");

  let [messlist, setmesslist] = useState([]);

  const [validError, setvalidError] = useState(false);

  const processMessg = (e) => {
    setmessage(e.target.value);
  };

  const sendMessg = () => {
    if (message == "") {
      setvalidError(true);
      return;
    }

    const url = "http://localhost:4050/postmess";

    const body = {
      message: message,
    };

    axios.post(url, body);

    // let newlist = [body, ...messlist];

    // setmesslist(newlist);

    setmessage("");

    setvalidError(false);
  };

  const getMessg = async () => {
    const url = "http://localhost:4050/getmess";

    let result = await axios.get(url);

    messlist = result.data;

    setmesslist(messlist);
  };

  useEffect(() => getMessg(), []);

  return (
    <div>
      <div className="container-fluid">
        {/* header */}

        <div className="row justify-content-center my-3">
          <div className="col-12 col-md-8 bg-info d-flex align-items-end">
            <h1>MyChatApp</h1>
            <h6>
              By {Student_name} {Student_id}
            </h6>
          </div>
        </div>

        {/* input box and button */}

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 my-3 d-flex">
            <input
              type="text"
              className={
                message == "" && validError
                  ? "form-control form-control-lg border border-danger fs-3"
                  : "form-control form-control-lg border border-info fs-3"
              }
              name=""
              id=""
              value={message}
              onChange={processMessg}
              placeholder="Lets chat here..."
            />
            <input
              type="button"
              className="form-control form-control-lg w-25 bg-primary"
              value="SEND"
              onClick={sendMessg}
            />
          </div>
          <div className="col-12 col-md-8 my-3 d-flex">
            <span
              className={
                message == "" && validError
                  ? "alert alert-danger d-block"
                  : "d-none"
              }
            >
              Type something
            </span>
          </div>
        </div>

        {/* message list display */}
        {messlist.map((item, index) => (
          <div className="row justify-content-center" key={index}>
            <div
              className={
                item.mid % 2 == 1
                  ? "col-12 col-md-8 my-3 d-flex alert alert-info fs-3"
                  : "col-12 col-md-8 my-3 d-flex alert alert-info justify-content-end fs-3"
              }
            >
              {item.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
