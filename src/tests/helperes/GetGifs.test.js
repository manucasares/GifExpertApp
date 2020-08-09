const { getGifs } = require("../../helpers/getGifs");


describe('Pruebas con getGifs Fetch', ()=>{

    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(8);

    })

    test('Debe devolver array vacop', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    })
    
});