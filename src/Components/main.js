import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import React from "react";
import { useSelector } from "react-redux";
import { check, deleteAnswer, setAnswer } from "../Redux/action";

const Main = () => {
  const words = useSelector((state) => state.words);
  const level = useSelector((state) => state.level);
  const answer = useSelector((state) => state.answer);
  const translations = useSelector((state) => state.translations);
  const progress = useSelector((state) => state.progress);
  let data = words[level];

  return (
    <div className="container">
      <h3 className="text-center py-3">
        Berilgan so'zning o'zbekcha tarjimasini toping
      </h3>

      <div className="container">
        <div className="customProgress">
          <div
            className="customProgressLoad"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="place">
              <img className="img-responsive" src="img/penguin.gif" alt="" />
              <p className="text1">
                <VolumeDownIcon /> {translations[level]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="answers">
        {answer.map((v, i) => (
          <button
            className="btn btn-default btn-primary mx-2"
            key={i}
            onClick={() => {
              deleteAnswer(i);
            }}
          >
            {v.text}
          </button>
        ))}
      </div>
      <hr />
      <div className="variants">
        {data.map((v, i) => (
          <button
            className="btn btn-default btn-primary mx-2"
            key={i}
            onClick={() => {
              setAnswer(i);
            }}
          >
            {v.text}
          </button>
        ))}
        <hr />
        <div className="d-flex justify-content-between">
          <button className="btn btn-success py-2 px-5" onClick={check}>
            check
          </button>
          <h2>
            Hozirgi bosqich <span className="text-danger">{level + 1}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
