import logo from "./logo.svg";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "A001",
      title: "Grocieries",
      amount: 55.3,
      date: new Date(2021, 11, 14),
    },
    {
      id: "A002",
      title: "Car Insurance",
      amount: 255.3,
      date: new Date(2021, 9, 7),
    },
    {
      id: "A003",
      title: "Energy fee",
      amount: 155.3,
      date: new Date(2021, 10, 5),
    },
  ];

  return (
    <div>
      <NewExpense/>
      <Expense items={expenses} />
    </div>
  );
};

export default App;
