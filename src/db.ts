import { JSONFilePreset } from "lowdb/node";

type Word = {
  text: string;
  userId: string;
};

type Data = {
  words: Word[];
};

const defaultData: Data = {
  words: [],
};

export async function addWord(userId: string, word: string) {
  const db = await JSONFilePreset<Data>("db.json", defaultData);

  db.data.words.push({
    userId: userId,
    text: word,
  });
  await db.write();
}

export async function listWordsBy(userId: string): Promise<string[]> {
  const db = await JSONFilePreset<Data>("db.json", defaultData);

  return db.data.words
    .filter((word) => word.userId === userId)
    .map((word) => word.text);
}

export async function listWords(): Promise<string[]> {
  const db = await JSONFilePreset<Data>("db.json", defaultData);

  return db.data.words.map((word) => word.text);
}
