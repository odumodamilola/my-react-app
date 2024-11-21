

function List(){
    const fruits = [
      { id: 1, name: "Apple", calories: 95 },
      { id: 2, name: "Banana", calories: 45 },
      { id: 3, name: "Coconut", calories: 105 },
      { id: 4, name: "Pineapple", calories: 90 },
    ];

    // fruits.sort();

    const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}</li>);

    return(<ol>{listItems}</ol>);
}

export default List