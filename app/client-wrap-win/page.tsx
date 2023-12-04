import { ClientWrapper } from "../components/ClientWrapper";
import { ServerWrapper } from "../components/ServerWrapper";

export default function Page() {
  return (
    <ClientWrapper>
      <ServerWrapper />
    </ClientWrapper>
  );
}
