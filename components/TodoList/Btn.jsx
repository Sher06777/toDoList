import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const Btn = ({ item, setKey, status, data, setData }) => {
  const deleteCart = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  return (
    <div className="todo-list-item-btns">
      {status === "cart" ? (
        <>
          <button
            onClick={() => {
              setKey("deleted", item.id);
            }}
          >
            restore
          </button>
          <button
            onClick={() => {
              deleteCart(item.id);
            }}
          >
            delete
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setKey("correct", item.id);
            }}
          >
            <FontAwesomeIcon className="icon"
              icon={faPenToSquare}
              style={{ color: "#050b15" }}
            />
            correct
          </button>
          <button
            onClick={() => {
              setKey("completed", item.id);
            }}
          >
            <FontAwesomeIcon className="icon" icon={faCheck} style={{ color: "#050b15" }} />
            complete{item.completed ? "+" : ""}
          </button>
          <button
            onClick={() => {
              setKey("deleted", item.id);
            }}
          >
            <FontAwesomeIcon className="icon" icon={faTrashCan} style={{ color: "#050b15" }} />
            delete
          </button>
        </>
      )}
    </div>
  );
};

export default Btn;
