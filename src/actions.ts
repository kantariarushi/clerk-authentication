"use server";

import { revalidatePath } from "next/cache";
import { addWord } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function createWordAction(prevState: any, formData: any) {
  const wordText = formData.get("wordText");

  if (wordText === "") {
    return { message: "Word cannot be empty." };
  }

  const { userId } = await auth();
  addWord(userId!, wordText);

  // TODO add word

  revalidatePath("/words");
  return { message: "" };
}
