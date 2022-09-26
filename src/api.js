

export const transformTileData = (post) => {
    const itemUrl = post.data.url;
    return ({
        key: post.data.id,
        title: post.data.title,
        author: post.data.author,
        num_comments: post.data.num_comments,
        image: itemUrl.includes('.jpg' || '.png' || '.gif') ? itemUrl : undefined,
        link: itemUrl,
        votes: post.data.score,
        comments: post.data.permalink
    })
}

export const setTiles = async (query) => {
        console.log('Setting Tiles')
        const response = await fetch(`https://www.reddit.com/r/${query}/top.json`);
        // const jsonStringified = JSON.stringify(response);
        const json = response.json();
        // console.log(json);
        const data = json.children;
        // console.log(data);
        return data;
        // .then((data) => { return data/*data.children.map(post => transformTileData(post))*/ })
        // .then(console.log(data))
}
