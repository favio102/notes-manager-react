import { TextCard } from "components/TextCard/TextCard";

export function NoteBrowse(props) {
  return (
    <>
      <TextCard
        title="Super note"
        subtitle="01/02/01"
        content="testtesttesttesttesttesttesttestesttesttesttesttesttesttesttestesttesttesttesttesttesttesttestesttesttesttesttesttesttesttestesttesttesttesttesttesttesttestesttesttesttesttesttesttesttestesttesttesttesttesttesttesttestesttesttesttesttesttesttesttestesttesttesttesttesttesttesttestesttesttesttesttesttesttesttestesttesttesttesttesttesttesttestesttesttesttesttesttesttesttestesttesttesttesttesttesttesttest"
        onClick={() => alert("onclick")}
        onClickTrash={() => alert("onclick trahs")}
      />
    </>
  );
}
