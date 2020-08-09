import React from "react";
import { shallow } from "enzyme";
import GifGrid from "../../GifGrid";
import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');


describe("Pruebas en el componente GifGrid", () => {

    test("Debería mostrarse correctamente", () => {
        const wrapper = shallow(<GifGrid category="Cartman" />);

        // useFetchGifs.mockReturnValue({
        //     data: [],
        //     loading: true,
        // });

        expect(wrapper).toMatchSnapshot();
    });

    // test("Debe mostrar items cuando se muestras las imagenes useFetchGifs", () => {
        
    //     const gif = [
    //         {
    //             id: "ABC",
    //             url: "https://localhost/cualquier/cosa.jpg",
    //             title: "Cualquier Cosa",
    //         },
    //     ];
        
    //     useFetchGifs.mockReturnValue({
    //         data: gif,
    //         loading: false,
    //     });

    //     const wrapper = shallow(<GifGrid category="Cartman" />);
        
    //     expect(wrapper).toMatchSnapshot();
    // });
});
