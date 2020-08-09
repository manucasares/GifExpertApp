import React from 'react';
import '@testing-library/jest-dom'
import GifExpertApp from '../../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en el componente GifExpertApp', () => {
    
    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorías', () => {
        const categories = ['One punch', 'Pokemon'];
        console.log(categories);
         const wrapper = shallow(<GifExpertApp defaultCategory = {categories} />)


         expect(wrapper.find('GifGrid').length).toBe(categories.length);

        

    })
    

})
