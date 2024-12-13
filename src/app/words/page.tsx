import CreateWordForm from "@/components/create-word-form";
import { listWordsBy } from "@/db";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const words = await listWordsBy(userId!);

  return (
    <div>
      <p>
        Fill your Warehouse - one word at a time. Use this page to submit a new
        word, store it in your personal warehouse, and remember it forever.
      </p>

      <h2>Recent words by you</h2>
      <ul>
        {words.map((word: any, index: number) => (
          <li key={word.id || index}>{word}</li>
        ))}
      </ul>

      <CreateWordForm />
    </div>
  );
}
