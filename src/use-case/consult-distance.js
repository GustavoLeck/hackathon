import { ConsultDistanceApi } from "../api/consult-distance-api.js";

export class ConsultaDistance {
    async execute(value) {
        const response = await new ConsultDistanceApi().execute(value);
        if (!response.error) {
            return response.data;
        } else {
            return response;
        }
    }
}