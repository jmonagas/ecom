import data from "../../../public/data/products.json"

export default function handler(req, res) { res.status(200).json({ data }) }