import styles from "./ListView.module.css";
const ListView = ({ destinations }) => {
  return (
    <>
      <ul className="list-group">
        {destinations.map((destination, index) => (
          <li className="list-group-item" key={index}>
            {destination}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListView;
