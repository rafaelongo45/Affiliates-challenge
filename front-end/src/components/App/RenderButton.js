import styled from "styled-components";

function RenderButton({
  setSelectedTransaction,
  name,
  i,
  selectedTransaction,
}) {
  const nameArr = name.split(" ");
  let nameParsed = "";
  for (let i = 0; i < nameArr.length; i++) {
    const currentStr = nameArr[i];
    if (currentStr.length > 2) {
      nameParsed += currentStr[0] + currentStr.slice(1).toLowerCase() + " ";
    } else {
      nameParsed += currentStr.toLowerCase() + " ";
    }
  }
  return (
    <Button
      role={"button"}
      onClick={() => {
        setSelectedTransaction({ nameParsed: nameParsed.trim(), i });
      }}
    >
      {nameParsed}
    </Button>
  );
}

export default RenderButton;

const Button = styled.button`
  cursor: pointer;
  margin: 5px auto;
  border: none;
  border-radius: 6px;
  width: 110px;
  height: 40px;
  background-color: #bebebe;
  font-size: 14px;
  color: white;
  font-weight: bold;
`;
