import { query } from "../../utils/db";

export const getClients = async() => {
    const {rows} = await query('SELECT * FROM trucks');
    return rows;
}