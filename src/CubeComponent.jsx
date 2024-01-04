import './CubeComponent.css';
function CubeComponent(props) {
  const {tile, onClick, match, id} = props;
  return (
    <button
      id={id}
      className={match ? 'dice active' : 'dice'}
      value={tile}
      onClick={e => onClick(e)}
      key={Math.floor(Math.random() * 1000)}>
      {tile}
    </button>
  );
}

export default CubeComponent;
