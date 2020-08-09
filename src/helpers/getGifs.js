export const getGifs = async ( category ) => {
    const url =
        `https://api.giphy.com/v1/gifs/search?limit=8&q=${encodeURI(category)}&api_key=03xvqd9HJbUPmfYaJqOJp59lUBlOzbZc`;

    const resp = await fetch(url);
    const { data } = await resp.json();

  

    const gifs = await data.map(item => {
        return {
            id: item.id,
            url: item.images?.downsized_medium.url,
            title: item.title,
        };
    });
    
    return gifs;
};