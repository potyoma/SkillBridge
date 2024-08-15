import { children, ParentProps } from "solid-js";
import Header from "../organisms/header";
import Footer from "../organisms/footer";

type MainLayoutProps = ParentProps;

export default function MainLayout(props: MainLayoutProps) {
  const safeChildren = children(() => props.children);

  return (
    <>
      <Header />
      <main>{safeChildren()}</main>
      <Footer />
    </>
  );
}
