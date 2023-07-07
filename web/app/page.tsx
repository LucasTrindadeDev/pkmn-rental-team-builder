import TeamHeader from "../components/organisms/team-header";
import TeamPokemons from "../components/organisms/team-pokemons";

export default function Home() {
  return (
    <main className="h-screen flex flex-col bg-pk-turquoise p-10">
      <TeamHeader />

      <TeamPokemons />
    </main>
  );
}
