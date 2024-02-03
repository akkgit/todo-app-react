import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import TodoItem from './TodoItem';
import productsData from '../products-data';
import Product from './Product';
import todos from '../todos-data';
import Counter from './Counter';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      todos: todos,
    };
  }

  handleChange(id) {
    this.setState((prevState) => {
      var updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    var todoComponents = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        todo={item}
        handleChange={this.handleChange}
      ></TodoItem>
    ));
    return <div>{todoComponents}</div>;
  }
  // return (
  //   <div>
  //     <Counter></Counter>
  //   </div>
  // );
  // return <div>{todoComponents}</div>;

  // return (
  //   <div>
  //     {/* <Header></Header>
  //     <Main></Main>
  //     <Footer></Footer> */}
  //     <TodoItem></TodoItem>
  //     <TodoItem></TodoItem>
  //     <TodoItem></TodoItem>
  //     <TodoItem></TodoItem>
  //   </div>
  // );

  // const productComponents = productsData.map((product) => (
  //   <Product key={product.id} product={product}></Product>
  // ));
  // return <div>{productComponents}</div>;
}

export default App;
