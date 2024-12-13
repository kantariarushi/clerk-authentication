import { SignUp } from "@clerk/nextjs";
import "./styles.css";

export default function Page() {
  return (
    // <div className="flex justify-center">
    //   <SignUp />
    // </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}>
      <div
        style={{
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          backgroundColor: "white",
        }}>
        <SignUp
          appearance={{
            elements: {
              card: "custom-card-class", // Target the main card
              rootBox: "clerk-modal-root", // Custom class for modal root
            },
          }}
        />
      </div>
    </div>
  );
}
