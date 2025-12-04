import { Button } from "@components";
// test
function App() {
  return (
    <>
      <Button
        variant="moba6an"
        size="small"
        disabled={false}
        onCLick={() => console.log("Clicked")}
        onHover={() => console.log("Hovered")}
        className="custom-class"
      >
        Sign up
      </Button>
    </>
  );
}

export default App;
