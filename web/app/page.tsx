import TeamHeader from "../components/organisms/TeamHeader";
import TeamPokemons from "../components/organisms/TeamPokemons";

export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-pk-turquoise p-10">
      <TeamHeader />

      <TeamPokemons />
    </main>
  );
}
