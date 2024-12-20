"use client";
const { useState, useEffect, useCallback } = require("react");

const useBrentPrice = () => {
  const [price, setPrice] = useState(null);
  const [prevPrice, setPrevPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [priceChange, setPriceChange] = useState(null);

  const BIN_ID = "67611731e41b4d34e466b583"; // Replace with your JSONBin Bin ID
  const API_KEY =
    "$2a$10$OGWsx0lai/B0nM.JzkEBPObCNjN.08HJL9XowKK9yJcaIOPX5cfSq"; // Replace with your JSONBin API Key
  const BRENT_API_URL =
    "https://www.alphavantage.co/query?function=BRENT&interval=daily&apikey=V7E243ZW2PA0D94R"; // Replace with actual API URL

  // Memoized function
  const fetchBrentPrice = useCallback(async () => {
    try {
      const jsonBinResponse = await fetch(
        `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
        { headers: { "X-Master-Key": API_KEY } }
      );

      const jsonBinData = await jsonBinResponse.json();
      console.log("JSONBin Response:", jsonBinData);

      const records = jsonBinData?.record;

      if (!records || !Array.isArray(records) || records.length === 0) {
        console.log(
          "No valid records found in JSONBin. Fetching fresh data..."
        );
        await fetchAndUpdateNewData();
        return;
      }

      const { price: storedPrice, updatedAt } = records[0];
      const { price: prevStoredPrice, updatedAt: previousUpdate } =
        records[1] || {};

      console.log("Stored Price:", storedPrice);
      console.log("Previous Price:", prevStoredPrice);
      console.log("Updated At:", updatedAt);
      console.log("Last Updated At:", previousUpdate);

      if (!storedPrice || !updatedAt) {
        console.log("Incomplete data in JSONBin. Fetching fresh data...");
        await fetchAndUpdateNewData();
        return;
      }

      const oneDay = 24 * 60 * 60 * 1000;
      const lastUpdated = new Date(updatedAt).getTime();
      const previousLastUpdated = new Date(previousUpdate).getTime();
      const currentTime = new Date().getTime();

      if (previousLastUpdated - lastUpdated < oneDay) {
        console.log("Using cached price data");
        setPrice(storedPrice);
        setPrevPrice(prevStoredPrice);
        comparePrices(storedPrice, prevStoredPrice);
      } else {
        console.log("Cached data expired. Fetching fresh price data...");
        await fetchAndUpdateNewData();
      }
    } catch (error) {
      console.error("Error fetching Brent price:", error);
      await fetchAndUpdateNewData();
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchAndUpdateNewData = async () => {
    try {
      const apiResponse = await fetch(BRENT_API_URL);
      const apiData = await apiResponse.json();
      console.log(apiData);

      if (!apiData || !apiData.price) {
        throw new Error("Invalid API response: Missing price data");
      }

      const newPrice = apiData.price;

      await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": API_KEY,
        },
        body: JSON.stringify({
          record: [
            { price: newPrice, updatedAt: new Date().toISOString() },
            { price: price, updatedAt: new Date().toISOString() },
          ],
        }),
      });

      console.log("Updated JSONBin with fresh data");
      setPrice(newPrice);
      setPrevPrice(price);
      comparePrices(newPrice, price);
    } catch (error) {
      console.error("Failed to fetch or update price:", error);
      setPrice("N/A");
    }
  };

  const comparePrices = (current, previous) => {
    if (previous !== undefined) {
      if (current > previous) {
        setPriceChange("Increase");
      } else if (current < previous) {
        setPriceChange("Decrease");
      } else {
        setPriceChange("No Change");
      }
    }
  };

  useEffect(() => {
    fetchBrentPrice();
  }, [fetchBrentPrice]);
  return { price, priceChange, isLoading };
};

export default useBrentPrice;
