import path from "path";
import { queryCnftio } from "./shared/queryCnftio";
import pricesDB from "../public/spacebudz.json";

const DB_NAME = "../public/spacebudz.json";
const filePath = path.resolve(__dirname, DB_NAME);
const policyId = "d5e6bf0500378d4f0da4e8dde6becec7621cd8cbf5cbb9b87013d4cc";

const main = async () => {
  await queryCnftio({
    policyId,
    searchTerm: "SpaceBud",
    filePath,
    pricesDB,
  });
};

main();
