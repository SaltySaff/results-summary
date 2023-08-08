import Result from './Result';
import Summary from './Summary';
import Button from './Button';

function App() {
  return (
    <main className="sm:text-lg m-auto box-border flex min-w-full flex-col font-hanken-grotesk sm:min-w-0 sm:max-w-2xl sm:flex-row sm:items-stretch sm:rounded-3xl sm:shadow-xl">
      <Result />
      <div className="flex w-full flex-col items-center gap-6 px-7 py-4 sm:mx-1 sm:my-5 sm:w-1/2">
        <Summary />
        <Button>Continue</Button>
      </div>
    </main>
  );
}

export default App;
