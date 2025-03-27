"use client"

import { TextInput } from "@repo/ui/input";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextInput onChange={()=>{alert("hi");}} 
        size="big" placeholder="Room Name"></TextInput>
        <button onClick={()=>{
          router.push("/chat/123");
        }}>Join Room</button>
      </div>
    </div>
  );
}
