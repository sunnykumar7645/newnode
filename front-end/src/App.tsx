import './App.css'
import { Person } from './component/Person'
import { PersonList } from './component/PersonList';
import { Props } from './component/Props'

function App() {
  const PersonProps = {
    first:'sunny',
    last : 'kumar'
  };

  const ListOfPersons = [
    {
    first:'sunny',
    last : 'kumar'
  },
  {
    first:'sankit',
    last : 'kumar'
  },
  {
    first:'ankit',
    last : 'kumar'
  }

  ];

  return (
    <>
    <Props name='Sunny - Kumar' maessageCount={10} isLoggedIn={true} />
    <Person name = {PersonProps} />
    <PersonList name = {ListOfPersons} />
    </>
  )
}

export default App
