import React from 'react';
import './App.css';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
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
      <ClickCounter name = 'narendra'></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}

export default App;
