import { Suspense } from "react";
import ClientForm from "./ClientForm";
import PostList from "./PostList";

export default async function Home() {

  return (
    <main className="grid grid-cols-3">
      <aside className="w-full h-full p-3">
        <ClientForm/>
      </aside>
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostList/>
      </Suspense>
    </main>
  );
}
