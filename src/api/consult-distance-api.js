import axios from "axios";
export class ConsultDistanceApi {
    async execute(value) {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${value.origem.cidade}%${value.origem.estado}&destinations=${value.destino.cidade}%${value.destino.estado}&units=SI&key=//colar token que esta no meu contato//`)
            return {
                error: false,
            }
        } catch (error) {
            return {
                error: true,
                data: "Error Consult Google API"
            }
        }
    }
}