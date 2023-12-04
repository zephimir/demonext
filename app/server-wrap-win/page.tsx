import { ClientWrapper } from "../components/ClientWrapper";
import { ServerWrapper } from "../components/ServerWrapper";

export default function Page() {
  console.log("win");
  return (
    <ServerWrapper>
      <ClientWrapper />
    </ServerWrapper>
  );
}
