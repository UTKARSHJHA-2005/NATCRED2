import DataURIParser from "datauri/parser.js";
import path from "path";

const parser = new DataURIParser();
const getDatauri = (file) => {
    const extName = path.extreme(file.originalname).toString();
    return parser.format(extName, file.buffer).content;
};
export default getDatauri;