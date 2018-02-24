import DefaultHead from "next/head";

function Head() {
  return (
    <DefaultHead>
      <style>{`
        body {
          background-color: seagreen;
        }
      `}</style>
    </DefaultHead>
  );
}

export default Head;
