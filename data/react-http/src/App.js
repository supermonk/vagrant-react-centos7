import React from 'react';
import './App.css';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
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
      <ParentComp></ParentComp>
    </div>
  );
}

export default App;
