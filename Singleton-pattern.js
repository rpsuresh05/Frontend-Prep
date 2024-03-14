let map;

const obj =  {
    getInstance: () => {
        if(typeof map  === 'undefined'){
            map = new Map();
        }
        return map;
    }
}
export default obj;
