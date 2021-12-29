import { useRouter } from "next/router";
import Layout from "@Layout/components/Layout";

export default function EventPage() {
  const router = useRouter();

  return (
    <Layout>
      <h1>Event Page 1</h1>
    </Layout>
  );
}
