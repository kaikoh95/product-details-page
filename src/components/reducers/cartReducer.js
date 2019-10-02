import Item1 from '../../images/classic-tee.jpg';

const initState = {
    items: [
        {
            title: "Classic Tee",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
                  "tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim\n" +
                  "ut tellus elementum sagittis vitae. Mauris sit amet massa vitae tortor condimentum lacinia.",
            price: 75,
            img: Item1
        }
    ],
    sizes: [
        {size: "S"},
        {size: "M"},
        {size: "L"}
    ],
    addedItems: [],
    subTotal: 0

};

const cartReducer= (state = initState, action)=>{
    if(action.type === 'ADD_TO_CART'){
        if (action.size !== ""){
            let addedItem = state.sizes.find(item=> item.size === action.size);
            //check if the action size exists in the addedItems
            let existed_item= state.addedItems.find(item=> action.size === item.size);
            if (existed_item) {
                addedItem.quantity += 1;
                return{
                    ...state,
                    addedItems: [...state.addedItems],
                    subTotal: state.subTotal + 1
                }
            } else{
                addedItem.quantity = 1;
                addedItem.title = action.title;
                addedItem.price = action.price;
                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    subTotal: state.subTotal + 1
                }
            }
        }
    }
    return state
};

export default cartReducer;