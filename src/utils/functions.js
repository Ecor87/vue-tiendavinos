//Funcion que le da formato a números de precios

const formatNumber = (price) => {
    return price.toLocaleString("de-DE");
};

export default {formatNumber};