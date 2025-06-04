import Url from "../models/url.js";
import { nanoid } from "nanoid";

export const createShortUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const shortCode = nanoid(10);
  const shortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`;
    try {
        const newUrl = await Url.create({ originalUrl, shortCode });
        res.status(201).json({ message: "URL shortened successfully", data: newUrl });
    } catch (error) {
        console.error("Error creating short URL:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const getOriginalUrl = async (req, res) => {
    const { shortCode } = req.params;

    try {
        const url = await Url.findOne({ shortCode });
        if (!url) {
            return res.status(404).json({ message: "URL not found" });
        }
        res.status(200).json({ message: "URL found", data: url });
    } catch (error) {
        console.error("Error retrieving original URL:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};