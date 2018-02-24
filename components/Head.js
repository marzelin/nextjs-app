import DefaultHead from "next/head";

function Head() {
  return (
    <DefaultHead>
      <style>{`
        body {
          background-color: seagreen;
        }
      `}</style>
      <title>Next.js App</title>
    </DefaultHead>
  );
}

export default Head;
