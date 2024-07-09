import SearchBar from "./components/SearchBar";

function App() {

	return (
	 <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 -mt-20">Autocomplete</h1>
      <SearchBar />
    </div>
	);
}

export default App;
