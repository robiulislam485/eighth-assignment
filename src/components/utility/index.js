import toast from "react-hot-toast";

const getPreviousData = () => {
    const getData = localStorage.getItem('gadget');
    if (getData) {
        const data = JSON.parse(getData);
        return data;
    }
    else {
        return [];
    }
}
const addGadget = gadget => {

    const addGadget = getPreviousData();
    const isExist = addGadget.find(item => item.product_id == gadget.product_id)
    if (isExist) return toast.error("This product is alreday added!!")
    addGadget.push(gadget);
    localStorage.setItem('gadget', JSON.stringify(addGadget))
    toast.success("Succesfully added!")
}
const removeGadget = id => {
    const addGadget = getPreviousData();
    const remaining = addGadget.filter(gadget => gadget.product_id != id)
    localStorage.setItem('gadget', JSON.stringify(remaining))
    toast.success("Succesfully removed!")
}



export { addGadget, getPreviousData, removeGadget }