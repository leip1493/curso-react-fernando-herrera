export const getGifs = async category => {
  const key = "EsvslGEDLoMKwGHm6UFH1qMeoTmXYAhr";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(
    category
  )}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(image => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url
  }));
  return gifs;
};
