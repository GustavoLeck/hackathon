import { ConsultCepApi } from "../api/consult-cep-api.js";

export class ConsultaCep {
    async execute(value) {
        const response = await new ConsultCepApi().execute(value);
        if (!response.error) {
            return response.data;
        } else {
            return response;
        }
    }
}