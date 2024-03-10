import { useEffect, useState } from "react";
import { PositionService } from "../../../services/positions-service";
import { IPosition } from "../../../types/position.types";

const usePositions = () => {
  const [positions, setPositions] = useState<IPosition[] | null>(null);

  useEffect(() => {
    PositionService.getPositions()
    .then(({ positions }) => setPositions(positions));
  }, []);
  return { positions };
};

export default usePositions;
