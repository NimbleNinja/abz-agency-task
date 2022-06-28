import Header from './features/header/components/Header';
import TestAssigment from './features/test-assigment/components/TestAssigment';
import GetRequest from './features/working-with-requsts/components/GetRequest';
import PostRequest from './features/working-with-requsts/components/PostRequest';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <TestAssigment />
        <GetRequest />
        <PostRequest />
      </main>
    </div>
  );
}

export default App;
