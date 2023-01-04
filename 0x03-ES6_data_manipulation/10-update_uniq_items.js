export default function updateUniqueItems(map) {
    map.forEach((quantity, grocery) => {
        if (quantity === 1) {
            map.set(grocery, 100) 
        }
        
    });
}