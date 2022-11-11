import * as fs from "fs/promises";

interface Transaction {
  type: number;
  date: Date;
  product: string;
  value: number;
  seller: string;
}

async function readFile() {
  const filePath = `./src/uploads/sales.txt`
  const fileObj: Transaction[] = [];
  const file = await fs.readFile(filePath);
  const fileDataArray = file.toString().trim().split(/\r?\n/);
  for (let i = 0; i < fileDataArray.length; i++) {
    const data = fileDataArray[i];
    let dataObj: Transaction;
    for (let j = 0; j < data.length; j++) {
      if (j === 0) {
        const type = parseInt(data[j]);
        dataObj = { ...dataObj, type };
      }

      if (j === 1) {
        const date = new Date(data.substring(1, 26));
        dataObj = { ...dataObj, date };
      }

      if (j === 26) {
        const product = data.substring(26, 56).trim();
        dataObj = { ...dataObj, product };
      }

      if (j === 56) {
        const value = parseInt(data.substring(56, 66))
        dataObj = { ...dataObj, value };
      }

      if (j === 66) {
        const seller = data.substring(66, 86)
        dataObj = { ...dataObj, seller };
      }

      if (j === data.length - 1) fileObj.push(dataObj);
    }
  }

  await fs.unlink(filePath)
  return fileObj;
}

export default readFile;
