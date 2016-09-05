const CSE_ID = "012798040632834574731:2hd8pzxsryw";
const CSE_API_KEY = "AIzaSyBBFapRavYCuW7-b4dl1V7nDwi-IKvkNXA";

export const imageSearch = (query) => {
  let url = `https://www.googleapis.com/customsearch/v1?safe=high&num=1&imgType=photo&imgColorType=color&imgSize=medium&q=${query}&cx=${CSE_ID}&searchType=image&key=${CSE_API_KEY}`;
  return $.get(url);
}