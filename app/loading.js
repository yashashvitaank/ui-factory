import Loader from "@/components/Loader";

function Loading() {
  return (
    <div style={{ height:"100dvh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Loader/>
    </div>
  );
}

export default Loading;
