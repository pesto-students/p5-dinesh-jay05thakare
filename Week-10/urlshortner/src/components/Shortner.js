import axios from "axios";
import { useEffect, useState } from "react";

function Shortner({ setShortenedUrl, setLoading }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchShortenLink();
    setValue("");
  };

  const fetchShortenLink = async () => {
    try {
      setLoading(true);
      const response = await axios(`https://api.shrtco.de/v2/shorten?url=${value}`);
      setShortenedUrl(response.data.result.full_short_link)
    } catch(err){
      setError(err);
    } finally{
      setLoading(false)
    }
  }

  return (
    <form className="shortner" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Paste link to be shortened"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        Shorten URL
      </button>
    </form>
  );
}

export default Shortner;
