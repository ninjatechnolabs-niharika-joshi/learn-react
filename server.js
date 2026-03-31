// Requires Node 18+ (built-in fetch) and express
// Install: npm install express
// Run:     node server.js
// Parcel runs on :1234, this proxy runs on :3001

import express from "express";

const app = express();
const PORT = 3001;

// Allow requests from Parcel dev server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:1234");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/api/menu", async (req, res) => {
  const { restaurantId = "55558", lat = "23.02760", lng = "72.58710" } = req.query;

  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;

  try {
    const response = await fetch(url, {
      headers: {
        "__fetch_req__": "true",
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "platform": "dweb",
        "user-id": "0",
        // These headers are forbidden in browser fetch but work fine server-side
        "referer": "https://www.swiggy.com/city/ahmedabad/shreeji-krupa-ashram-road-rest55558",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
        // Cookie from .env — update when session expires
        "cookie": process.env.SWIGGY_COOKIE || "",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `Swiggy returned ${response.status}` });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy running at http://localhost:${PORT}`);
  console.log(`Cookie loaded: ${process.env.SWIGGY_COOKIE ? "YES" : "NO — set SWIGGY_COOKIE in .env"}`);
});
