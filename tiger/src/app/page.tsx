import Image from "next/image";
import UserRequestForm from "./_components/UserRequestForm";
import TextDisplay from "./_components/TextDisplay";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center max-w-7xl m-auto mt-14">
      <TextDisplay text="Welcome to Tiger Mouth, a place to request and share information.">
      </TextDisplay>
      
      <UserRequestForm />
    </main>
  );
}
