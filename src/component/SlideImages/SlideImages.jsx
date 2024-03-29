import React, { useEffect, useState } from "react";

export default function SlideImages({ url, pages = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [slider, setSlider] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(images);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${pages}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Please Wait sometime's for Loading Data</div>;
  }

  if (errorMsg !== null) {
    return <div>Something went wrong, Error occurred!{errorMsg}</div>;
  }
  return <div>SlideImages</div>;
}
