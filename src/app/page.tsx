import styles from "./page.module.css";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  try {
    const user = await currentUser();

    if (!user) {
      return (
        <div className={styles.page}>
          <h1>Welcome 👋</h1>
          <p>Please log in to access your personalized experience.</p>
        </div>
      );
    }

    const username = user.username || "Guest";
    const welcomeSuffix = `, ${username}`;

    return (
      <div className={styles.page}>
        <h1>Welcome{welcomeSuffix} 👋</h1>
        <p>
          Word Warehouse Your personal vocabulary expansion tool. It's a unique
          platform where you can store, remember, and learn new words every day.
          Enhance your language skills and build a rich word vault right here.
          Dive in, discover more, and make your language journey more exciting
          with us!
        </p>
        <p>Some recent words from all users for you to peruse</p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching current user:", error);

    return (
      <div className={styles.page}>
        <h1>Welcome 👋</h1>
        <p>An error occurred. Please try again later.</p>
      </div>
    );
  }
}
