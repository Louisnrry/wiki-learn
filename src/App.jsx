import { GameProvider } from "./context/GameContext";
import RewardNotification from "./components/RewardNotification";
import ProfilPage from "./pages/ProfilPage";
import Classement from "./helper/functionRanking";

export default function App() {
  return (
    <GameProvider>
      <RewardNotification />
      <ProfilPage />
      <Classement />
    </GameProvider>
  );
}