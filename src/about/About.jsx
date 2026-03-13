import { HelloWorld } from "./helloworld";
import { Top10 } from "./Top10";

export function About() {
  return (
    <main>
      <h1>About</h1>
      <HelloWorld title="About Me" />
      <Top10 />
    </main>
  );
}
