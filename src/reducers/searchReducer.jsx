import * as TypeActions from '../constant/TypeActions';

const initState = {
    dataProduct: []
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case TypeActions.PUSH_DATA_SEARCH:
            const dataSearch = action.data.filter(product =>
                product.name.toLowerCase().indexOf(`${action.valueInput}`) > -1
            )

            return {
                ...state,
                dataProduct: action.data,
            };

        case TypeActions.VALUE_SEARCH:
            console.log(action.value);
            const dataFilter = [...state.dataProduct].filter(product => {
                // ASUS
                if (action.value.category === 'laptop' &&
                    action.value.brand === 'asus' &&
                    action.value.price === '') {
                    return product.brand === 'asus'
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'asus' &&
                    action.value.price === 'less1m') {
                    return product.price < 1000000 &&
                        product.brand === 'asus'
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
                }

                // LG
                if (action.value.category === 'laptop' &&
                    action.value.brand === 'lg' &&
                    action.value.price === '') {
                    return product.brand === 'lg'
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'lg' &&
                    action.value.price === 'less1m' ||
                    action.value.price === 'less10m') {
                    return product.brand === 'lg' &&
                        product.price < 1000000
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'lg' &&
                    action.value.price === 'more10m') {
                    return product.brand === 'lg'
                }

                // ACER
                if (action.value.category === 'laptop' &&
                    action.value.brand === 'acer' &&
                    action.value.price === '') {
                    return product.brand === 'acer'
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'acer' &&
                    action.value.price === 'less1m' ||
                    action.value.price === 'less10m') {
                    return product.brand === 'acer' &&
                        product.price < 1000000
                } else if (action.value.category === 'laptop' &&
                    action.value.brand === 'acer' &&
                    action.value.price === 'more10m') {
                    return product.brand === 'acer'
                }

                // IPHONE
                if (action.value.category === 'phone' &&
                    action.value.brand === 'iphone' &&
                    action.value.price === '') {
                    return product.brand === 'iphone'
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'iphone' &&
                    action.value.price === 'less1m' ||
                    action.value.price === 'less10m') {
                    return product.brand === 'iphone' &&
                        product.price < 1000000
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'iphone' &&
                    action.value.price === 'more10m') {
                    return product.brand === 'iphone' &&
                        product.price > 10000000
                }

                // SAMSUNG
                if (action.value.category === 'phone' &&
                    action.value.brand === 'samsung' &&
                    action.value.price === '') {
                    return product.brand === 'samsung'
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'samsung' &&
                    action.value.price === 'less1m') {
                    return product.brand === 'samsung' &&
                        product.price < 1000000
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'samsung' &&
                    action.value.price === 'less10m') {
                    return product.brand === 'samsung' &&
                        product.price < 10000000 && product.price > 1000000
                } else if (action.value.category === 'phone' &&
                    action.value.brand === 'samsung' &&
                    action.value.price === 'more10m') {
                    return product.brand === 'samsung' &&
                        product.price > 10000000
                }

                // APPLE
                if (action.value.brand === 'apple' &&
                    action.value.price === '') {
                    return product.brand === 'apple'
                } else if (action.value.brand === 'apple' &&
                    action.value.price === 'less1m') {
                    return product.brand === 'apple' &&
                        product.price < 1000000
                } else if (action.value.price === 'less10m' &&
                    action.value.brand === 'apple') {
                    return product.brand === 'apple' &&
                        product.price < 10000000 &&
                        product.price > 1000000
                } else if (action.value.brand === 'apple' &&
                    action.value.price === 'more10m') {
                    return product.brand === 'apple' &&
                        product.price > 10000000
                }

                // ACC
                if (action.value.category === 'acc' &&
                    action.value.brand === 'kingston' &&
                    action.value.price === '') {
                    return product.brand === 'kingston'
                } else if (action.value.category === 'acc' &&
                    action.value.brand === 'kingston' &&
                    action.value.price === 'less1m') {
                    return product.brand === 'kingston' &&
                        product.price < 1000000
                } else if (action.value.category === 'acc' &&
                    action.value.price === 'less10m' &&
                    action.value.brand === 'kingston') {
                    return product.brand === 'kingston' &&
                        product.price > 1000000
                } else if (action.value.category === 'acc' &&
                    action.value.price === 'more10m' &&
                    action.value.brand === 'kingston') {
                    return product.brand === 'kingston' &&
                        product.price > 10000000
                }

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