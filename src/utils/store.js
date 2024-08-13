'use client';
import { createContext, useReducer, useContext } from 'react';

export const AppContext = createContext();

const initialState = {
    carrito: {
        items: [],
    }
};

function reducer(state, action) {
    switch (action.type) {
        case 'AGREGAR_PRODUCTO':
            // Recibe el producto por medio de la acción
            const newItem = action.payload;
            // Buscar el índice del producto
            const existingItemIndex = state.carrito.items.findIndex(item => item.producto === newItem.producto);

            let updatedItems;
            if (existingItemIndex !== -1) {
                updatedItems = [...state.carrito.items];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    cantidad: updatedItems[existingItemIndex].cantidad + newItem.cantidad
                };
            } else {
                updatedItems = [...state.carrito.items, newItem];
            }

            return {
                ...state,
                carrito: {
                    ...state.carrito,
                    items: updatedItems
                }
            };

        case 'ELIMINAR_PRODUCTO':

            const itemToRemove = action.payload;
            const updatedItemsDelete = state.carrito.items.filter(item => item.producto !== itemToRemove.producto);
            return {
                ...state,
                carrito: {
                    ...state.carrito,
                    items: updatedItemsDelete
                }
            };

        case 'VACIAR_CARRITO':

            return {
                ...state,
                carrito: {
                    ...state.carrito,
                    items: []
                }
            };

        default:
            return state;
    }

}
export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);
