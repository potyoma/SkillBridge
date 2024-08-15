import { children, ParentProps } from "solid-js";
import Header from "../organisms/header";
import Footer from "../organisms/footer";
import { Title } from "@solidjs/meta";

type MainLayoutProps = ParentProps;

export default function MainLayout(props: MainLayoutProps) {
  const safeChildren = children(() => props.children);

  return (
    <>
      <Title>SkillBridge</Title>

      <div class="bg-white-97">
        <Header />
        <main class="p-3">{safeChildren()}</main>
        <Footer />
      </div>
    </>
  );
}
