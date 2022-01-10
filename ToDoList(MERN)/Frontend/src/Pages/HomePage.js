import '../App.css';
import Header from '../components/Header';
import AddTask from '../components/AddTask';
import Tasks from '../components/Tasks';
import HeaderMain from '../components/HeaderMain';


function App( param ) {
  return (
      <div>
        <HeaderMain UserName = {param.User.username}/>
        <div className='appContainer'>
        <Header/>
        <AddTask UserId = {param.User._id}/>
        <Tasks/>
        </div>
      </div>
  );
}

export default App;
