import * as fs from "fs/promises";
import { Transactions } from "@prisma/client";

async function fileReader(fileName: string) {
  const filePath = `./src/uploads/${fileName}`;
  const fileObj: Transactions[] = [];
  const file = await fs.readFile(filePath);
  await fs.unlink(filePath);

  const fileDataArray = file.toString().trim().split(/\r?\n/);
  for (let i = 0; i < fileDataArray.length; i++) {
    const data = fileDataArray[i];
    let dataObj: Transactions;
    for (let j = 0; j < data.length; j++) {
      if (j === 0) {
        const type = parseInt(data[j]);
        checkType(type);
        dataObj = { ...dataObj, type };
      }

      if (j === 1) {
        const date = new Date(data.substring(1, 26));
        checkDate(date);
        dataObj = { ...dataObj, date };
      }

      if (j === 26) {
        const product = data.substring(26, 56).trim();
        dataObj = { ...dataObj, product };
      }

      if (j === 56) {
        const valueString = data.substring(56, 66);
        checkValue(valueString);
        const value = parseInt(valueString);
        dataObj = { ...dataObj, value };
      }

      if (j === 66) {
        const seller = data.substring(66, 86);
        dataObj = { ...dataObj, seller };
      }

      if (j === data.length - 1) fileObj.push(dataObj);
    }
  }

  return fileObj;
}

const readFile = {
  fileReader,
};

export default readFile;

//TODO: Rewrite this function!

function checkType(type: number) {
  const isValid = type === 1 || type === 2 || type === 3 || type === 4;
  if (!isValid) {
    throw {
      type: "structureError",
      message: "Type must be 1, 2, 3 or 4",
      code: 400,
    };
  }
}

function checkDate(date: Date) {
  const today = new Date();
  const isValid = date < today;
  if (!isValid) {
    throw {
      type: "dateError",
      message: "Can't insert a transaction that happened in the future",
      code: 400,
    };
  }
}

function checkValue(value: string) {
  const isInvalid = value.includes(",") || value.includes(".");
  if (isInvalid) {
    throw {
      type: "valueError",
      message: "Must send value in 'centavos'",
      code: 400,
    };
  }
}
