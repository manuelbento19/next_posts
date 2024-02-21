import { Suspense } from "react";
import {ClientForm} from "./_components/ClientForm";
import {PostList} from "./_components/Post/List";

export default async function Home() {

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3">
      <aside className="w-full h-full p-3">
        <ClientForm/>
      </aside>
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostList/>
      </Suspense>
    </section>
  );
}
