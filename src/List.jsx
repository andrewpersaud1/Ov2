function List(props) {
  const category = props.category;

  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>;
    </>
  );
  // fruits.sort((a,b) =>a.name.localeCompare(b.name)); alphabetical
  // fruits.sort((a,b) => a.calories - b.calories); //Numeric
  // fruits.sort((a,b) => b.calories - a.calories);

  //  const lowCalFruits = fruits.filter(fruit => fruit.calories <100);
  //  const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
}

export default List;
