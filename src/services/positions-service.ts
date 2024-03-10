import { IPositionResponse } from "../types/position.types";

const BASE_URL =
  "https://frontend-test-assignment-api.abz.agency/api/v1/positions";

export const PositionService = {
  async getPositions(): Promise<IPositionResponse> {
    const res = await fetch(BASE_URL, { method: "GET" });
    const data = await res.json();
    if (data.success) {
      return data;
    }
    return { success: false, positions: null };
  },
};
