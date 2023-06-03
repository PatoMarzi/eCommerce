import './ItemListContainer.css'

export const ItemListContainer = ({ descripcion }) => {
  return (
    <div className="container">
      <h1>{descripcion}</h1>
    </div>
  );
};
