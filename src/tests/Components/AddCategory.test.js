import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../AddCategory";

describe("Pruebas en AddCategory", () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test("debe mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de cambiar el input value ", () => {
        const input = wrapper.find("input");

        const value = "Hola mundo";

        input.simulate("change", {
            target: {
                value: value,
            },
        });

        expect(wrapper.find("p").text().trim()).toBe(value);
    });

    test("No debe de postear la informacion con submit", () => {
        wrapper.find("form").simulate("submit", {
            preventDefault() {},
        });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        //1 - simular el inputChange
        const input = wrapper.find('input');
        const value = "Hola mundo";
        input.simulate('change', {
            target : {
                value : value
            }
        })

        //2 - simular el submit
        const form = wrapper.find('form')
        form.simulate('submit', {
            preventDefault(){}
        })

        //3 - setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();

        //4 - el valor del input debe estar ''
        expect(input.text().trim()).toBe('');




    })
    
});
