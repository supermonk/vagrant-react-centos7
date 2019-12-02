import React from 'react';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverComponentTwo from './components/HoverComponentTwo';
// import User from './components/User';
import Counter from './components/Counter';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import Table from './components/Table';
// import PostList from './components/PostList';
// import PostForm from './components/PostForm';
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';



function App() {
  return (
    <div className="App">
      {/* <PostList></PostList> */}
      {/* <PostForm></PostForm> */}
      {/* <LifecycleA></LifecycleA> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <ParentComp></ParentComp> */}
      {/* <ClickCounter name = 'narendra'></ClickCounter> */}
      {/* <HoverCounter></HoverCounter> */}
      {/* <ClickCounterTwo></ClickCounterTwo>
      <HoverComponentTwo></HoverComponentTwo> */}
      {/* <User name = "narendra"></User> */}

      {/* reference to function */}
      {/* <User name={(isLoggedIn) => isLoggedIn ? 'narendra' : 'Guest'}></User> */}
      <Counter render={(count, incrementCount) =>
        (<ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>
        )}></Counter>

      <Counter render={(count, incrementCount) =>
        (<HoverComponentTwo count={count} incrementCount={incrementCount}></HoverComponentTwo>
        )}></Counter>


    </div>
  );
}

export default App;
