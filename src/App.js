import logo from "./logo.svg";
import Expense from "./components/Expenses/Expense"

function App() {
  const expenses = [
    {
      id: 'A001',
      title: 'Grocieries',
      amount: 55.30,
      date: new Date(2021,11,14)
    },
    {
      id: 'A002',
      title: 'Car Insurance',
      amount: 255.30,
      date: new Date(2021,9,7)
    },
    {
      id: 'A003',
      title: 'Energy fee',
      amount: 155.30,
      date: new Date(2021,10,5)
    }
  ]


  return (
         <div>
      <h2>Let's get started!</h2>
      <Expense items={expenses} />
    </div>
  );
}

export default App;
