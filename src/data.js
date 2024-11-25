import "./App.css";
import Card from './Card';
import people from './data';

function App() {
  return (
    <div>
      <header>LOGO</header>
      <main>
        {people.map(person => (
          <Card
            key={person.id}
            firstName={person.firstName}
            title={person.title}
            age={person.age}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
