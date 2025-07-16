// Importing schema for short url
import shortUrl from "../Models/url.models.js"

// To generate short url
import { nanoid } from "nanoid";


// Controller to generate short url.
export const generateUrl = async (req,res)=>{
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ error: "URL is required" });
        }
        const shortCode = nanoid(7)
        const newUrl = new shortUrl({
            full_url:url,
            short_url:shortCode
        })
        // Saving data to mongodb
        await newUrl.save()
        const fullShortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`;
        res.status(201).json({ message: "Short URL created successfully", short_url: fullShortUrl });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Controller to redirct user on url
export const redirectUser = async(req,res)=>{
    try {
        const { id } = req.params
        const url = await shortUrl.findOne({short_url:id})
        console.log(url);
        if(url){
            url.clicks++;
            await url.save();
            res.redirect(url.full_url)
        }else{
            res.status(404).send("Not Found")
        }
    } catch (error) {
        console.log(error);
    }
} 