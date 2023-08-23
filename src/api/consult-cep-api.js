import axios from "axios";
export class ConsultCepApi {
    async execute(value) {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${value}/json`)
            return {
                error: false,
                data: response.data
            }
        } catch (error) {
            return {
                error: true,
                data: "Error Consult Google API"
            }
        }
    }
}