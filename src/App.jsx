import Button from "@mui/material/Button";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col gap-4">
      <h1 className="text-3xl font-bold text-blue-600">Tailwind + MUI</h1>

      {/* MUI Button with Tailwind classes */}
      <Button className="bg-green-500 text-white hover:bg-green-600" variant="contained">
        MUI Button with Tailwind Style
      </Button>

      {/* Regular Tailwind Button */}
      <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Tailwind Button
      </button>
    </div>
  );
}

export default App;
