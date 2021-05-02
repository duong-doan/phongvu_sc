import * as TypeActions from '../constant/TypeActions';

const initState = {
    dataProduct: [],
    dataFirst: []
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeActions.PUSH_DATA_SEARCH:
            const dataSearch = [...action.data]
            const filterArr = dataSearch.filter(product => {
                if (product.name.toLowerCase().includes(action.valueInput)) {
                    return product
                }
            })
            console.log(filterArr);

            return {
                ...state,
                dataProduct: action.data,
                dataFirst: filterArr
            };

        case TypeActions.VALUE_SEARCH:
            const dataFilter = [...state.dataProduct].filter(product => {
                // ASUS
                if (action.value.category === 'laptop' &&
                    action.value.brand === 'asus' &&
                    action.value.price === '') {
                    return product.brand === 'asus'
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'asus' &&
                    action.value.price === 'less1m') {
                    return product.brand === 'asus' &&
                        product.price < 1000000
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'asus' &&
                    action.value.price === 'less10m') {
                    return product.price > 1000000 &&
                        product.price < 10000000 &&
                        product.brand === 'asus'
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'asus' &&
                    action.value.price === 'more10m') {
                    return product.price > 10000000 &&
                        product.brand === 'asus'
                } else { }

                // LG
                if (action.value.category === 'laptop' &&
                    action.value.brand === 'lg' &&
                    action.value.price === '') {
                    return product.brand === 'lg'
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'lg' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'lg'
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'lg' &&
                    action.value.price === 'less10m') {
                    return product.price > 1000000 &&
                        product.price < 10000000 &&
                        product.brand === 'lg'
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'lg' &&
                    action.value.price === 'more10m') {
                    return product.price > 10000000 &&
                        product.brand === 'lg'
                } else { }

                // ACER
                if (action.value.category === 'laptop' &&
                    action.value.brand === 'acer' &&
                    action.value.price === '') {
                    return product.brand === 'acer'
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'acer' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'acer'
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'acer' &&
                    action.value.price === 'less10m') {
                    return product.price > 1000000 &&
                        product.price < 10000000 &&
                        product.brand === 'acer'
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'acer' &&
                    action.value.price === 'more10m') {
                    return product.price > 10000000 &&
                        product.brand === 'acer'
                } else { }

                // IPHONE
                if (action.value.category === 'phone' &&
                    action.value.brand === 'iphone' &&
                    action.value.price === '') {
                    return product.brand === 'iphone'
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'iphone' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'iphone'
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'iphone' &&
                    action.value.price === 'less10m') {
                    return product.price > 1000000 &&
                        product.price < 10000000 &&
                        product.brand === 'iphone'
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'iphone' &&
                    action.value.price === 'more10m') {
                    return product.price > 10000000 &&
                        product.brand === 'iphone'
                } else { }

                // SAMSUNG
                if (action.value.category === 'phone' &&
                    action.value.brand === 'samsung' &&
                    action.value.price === '') {
                    return product.brand === 'samsung'
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'samsung' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'samsung'
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'samsung' &&
                    action.value.price === 'less10m') {
                    return product.price < 10000000 &&
                        product.price > 1000000 &&
                        product.brand === 'samsung'
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'samsung' &&
                    action.value.price === 'more10m') {
                    return product.price > 10000000 &&
                        product.brand === 'samsung'

                } else { }

                // APPLE
                if (action.value.category === 'phone' &&
                    action.value.brand === 'apple' &&
                    action.value.price === '') {
                    return product.brand === 'apple'
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'apple' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'apple'
                } else if (action.value.category === 'phone' &&
                    action.value.price === 'less10m' &&
                    action.value.brand === 'apple') {
                    return product.price < 10000000 &&
                        product.price > 1000000 &&
                        product.brand === 'apple'
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'apple' &&
                    action.value.price === 'more10m') {
                    return product.price > 10000000 &&
                        product.brand === 'apple'
                } else { }

                // ACC
                if (action.value.category === 'acc' &&
                    action.value.brand === 'kingston' &&
                    action.value.price === '') {
                    return product.brand === 'kingston'
                } else if (action.value.category === 'acc' &&
                    action.value.brand === 'kingston' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'kingston'
                } else if (action.value.category === 'acc' &&
                    action.value.price === 'less10m' &&
                    action.value.brand === 'kingston') {
                    return product.price > 1000000 &&
                        product.price < 10000000 &&
                        product.brand === 'kingston'
                } else if (action.value.category === 'acc' &&
                    action.value.price === 'more10m' &&
                    action.value.brand === 'kingston') {
                    return product.price > 10000000 &&
                        product.brand === 'kingston'
                } else { }

                // HOUSEWEAR
                // panasonic
                if (action.value.category === 'housewear' &&
                    action.value.brand === 'panasonic' &&
                    action.value.price === '') {
                    return product.brand === 'panasonic'
                } else if (action.value.category === 'housewear' &&
                    action.value.brand === 'panasonic' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'panasonic'
                } else if (action.value.category === 'housewear' &&
                    action.value.price === 'less10m' &&
                    action.value.brand === 'panasonic') {
                    return product.price > 1000000 &&
                        product.price < 10000000 &&
                        product.brand === 'panasonic'
                } else if (action.value.category === 'housewear' &&
                    action.value.price === 'more10m' &&
                    action.value.brand === 'panasonic') {
                    return product.price > 10000000 &&
                        product.brand === 'panasonic'
                } else { }

                // hafele
                if (action.value.category === 'housewear' &&
                    action.value.brand === 'hafele' &&
                    action.value.price === '') {
                    return product.brand === 'hafele'
                } else if (action.value.category === 'housewear' &&
                    action.value.brand === 'hafele' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'hafele'
                } else if (action.value.category === 'housewear' &&
                    action.value.price === 'less10m' &&
                    action.value.brand === 'hafele') {
                    return product.price > 1000000 &&
                        product.price < 10000000 &&
                        product.brand === 'hafele'
                } else if (action.value.category === 'housewear' &&
                    action.value.price === 'more10m' &&
                    action.value.brand === 'hafele') {
                    return product.price > 10000000 &&
                        product.brand === 'hafele'
                } else { }

                // philips
                if (action.value.category === 'housewear' &&
                    action.value.brand === 'philips' &&
                    action.value.price === '') {
                    return product.brand === 'philips'
                } else if (action.value.category === 'housewear' &&
                    action.value.brand === 'philips' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'philips'
                } else if (action.value.category === 'housewear' &&
                    action.value.price === 'less10m' &&
                    action.value.brand === 'philips') {
                    return product.price > 1000000 &&
                        product.price < 10000000 &&
                        product.brand === 'philips'
                } else if (action.value.category === 'housewear' &&
                    action.value.price === 'more10m' &&
                    action.value.brand === 'philips') {
                    return product.price > 10000000 &&
                        product.brand === 'philips'
                } else { }

                // toshiba
                if (action.value.category === 'housewear' &&
                    action.value.brand === 'toshiba' &&
                    action.value.price === '') {
                    return product.brand === 'toshiba'
                } else if (action.value.category === 'housewear' &&
                    action.value.brand === 'toshiba' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'toshiba'
                } else if (action.value.category === 'housewear' &&
                    action.value.price === 'less10m' &&
                    action.value.brand === 'toshiba') {
                    return product.price > 1000000 &&
                        product.price < 10000000 &&
                        product.brand === 'toshiba'
                } else if (action.value.category === 'housewear' &&
                    action.value.price === 'more10m' &&
                    action.value.brand === 'toshiba') {
                    return product.price > 10000000 &&
                        product.brand === 'toshiba'
                } else { }

                // sharp
                if (action.value.category === 'housewear' &&
                    action.value.brand === 'sharp' &&
                    action.value.price === '') {
                    return product.brand === 'sharp'
                } else if (action.value.category === 'housewear' &&
                    action.value.brand === 'sharp' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'sharp'
                } else if (action.value.category === 'housewear' &&
                    action.value.price === 'less10m' &&
                    action.value.brand === 'sharp') {
                    return product.price > 1000000 &&
                        product.price < 10000000 &&
                        product.brand === 'sharp'
                } else if (action.value.category === 'housewear' &&
                    action.value.price === 'more10m' &&
                    action.value.brand === 'sharp') {
                    return product.price > 10000000 &&
                        product.brand === 'sharp'
                } else { }

            })
            return {
                ...state,
                dataFilter: dataFilter
            }
        default:
            return state

    }
}

export default searchReducer