import axios from "axios";
export class ConsultDistanceApi {
    async execute(value) {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${value.origem.cidade}%${value.origem.estado}&destinations=${value.destino.cidade}%${value.destino.estado}&units=SI&key=`)
            return {
                error: false,
                data: response.data.rows[0].elements[0].distance.text
            }
        } catch (error) {
            return {
                error: true,
                data: "Error Consult Google API"
            }
        }
    }
}