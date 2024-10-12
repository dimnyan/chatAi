import ChatComponent from "./components/chat/Chat";
import NavigationComponent from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <NavigationComponent />
        <ChatComponent />
      </div>
    </>
  );
}

export default App;
