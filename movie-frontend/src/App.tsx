import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./App.css";

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Who I Was</CardTitle>
        <CardDescription>Stuck</CardDescription>
        <CardAction>In Traffic</CardAction>
      </CardHeader>
      <CardContent>
        <p>Tryna</p>
      </CardContent>
      <CardFooter>
        <p>Find</p>
      </CardFooter>
    </Card>
  );
}

export default App;
