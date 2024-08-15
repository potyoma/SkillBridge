import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import MainLayout from "~/components/layouts/main-layout";

export default function Home() {
  return (
    <>
      <Title>Hello World</Title>
      <MainLayout>
        <h1>Hello world!</h1>
        <Counter />
        <p>
          Visit{" "}
          <a href="https://start.solidjs.com" target="_blank">
            start.solidjs.com
          </a>{" "}
          to learn how to build SolidStart apps.
        </p>
      </MainLayout>
    </>
  );
}
