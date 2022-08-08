import path from "path";
import fs from "fs";

export default async function getLastReport(req, res) {
    if (req.method !== "GET") {
      return res.status(405);
    }

    let reportsAr = [];

    const { file } = req.query;

    const fileData = fs.readFileSync(path.join('./public/db', `${file}.json`));
    const json = JSON.parse(fileData.toString());

    reportsAr.push(json);

    res.status(201).json(json);
}