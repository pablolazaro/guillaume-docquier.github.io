import { armors } from "./armors";
import { weapons } from "./weapons";

export { armors, weapons };
export const items = {
    ...armors,
    ...weapons
};
