import PropTypes from 'prop-types';

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
List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number, 
                                            name: PropTypes.string,
                                            calories: PropTypes.number  })),
}

List.defaultProps ={
  category: "Category",
  items: [],
}


export default List;



//Need this code in the app.jsx to render list
// const fruits = [
//   { id: 1, name: "apple", calories: 95 },
//   { id: 2, name: "orange", calories: 45 },
//   { id: 3, name: "banana", calories: 105 },
//   { id: 4, name: "coconut", calories: 159 },
//   { id: 5, name: "pineapple", calories: 37 },
// ];

// const vegetables = [
//   { id: 6, name: "potatoes", calories: 110 },
//   { id: 7, name: "celery", calories: 15 },
//   { id: 8, name: "carrots", calories: 25 },
//   { id: 9, name: "corn", calories: 63 },
//   { id: 10, name: "broccoli", calories: 50 },
// ];
// return (
//   <>
//     {fruits.length > 0 && <List items={fruits} category="Fruits" />}
//     {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
//   </>
// );