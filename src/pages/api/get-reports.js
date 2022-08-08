import path from "path";
import fs from "fs";

export default async function allReports(req, res) {
    if (req.method !== "GET") {
      return res.status(405);
    }

    let reportsAr = [];

    const jsonsInDir = fs.readdirSync('./public/db').filter(file => path.extname(file) === '.json');

    jsonsInDir.forEach(file => {
        const fileData = fs.readFileSync(path.join('./public/db', file));
        const json = JSON.parse(fileData.toString());

        reportsAr.push(json);
    });

    res.status(201).json(reportsAr);
}