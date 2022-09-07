import { Sneaker } from '../../interfaces/sneakers';
import axiosClient from '../axiosClient';

const sneakerAPI = {
    getSneakerList: () => {
        return axiosClient.get<unknown, Sneaker[]>("products");
    },
}

export default sneakerAPI;