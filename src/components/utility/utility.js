import toast from "react-hot-toast";

const getWishProduct = () => {
const allWishProduct = localStorage.getItem('wishProduct');

if(allWishProduct){
    const wishItem = JSON.parse(allWishProduct)
    return wishItem;
}
else{
    return [];
}

}

const wishlistProduct = (product) => {
    const wishProduct = getWishProduct();
    const isExist = wishProduct.find(item=> item.product_id == product.product_id)
    if(isExist) return toast.error('Product is already added into wishlist!')
    wishProduct.push(product)
    localStorage.setItem('wishProduct', JSON.stringify(wishProduct))
    toast.success('Product is added into wishlist!!')
}

const removeProduct = id => {
    const addProduct = getWishProduct();
    const remaining = addProduct.filter(gadget => gadget.product_id != id)
    localStorage.setItem('gadget', JSON.stringify(remaining))
    toast.success("Succesfully removed!")
}

export { wishlistProduct , getWishProduct, removeProduct}