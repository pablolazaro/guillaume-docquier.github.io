const Directions = {
    Ascending: 1,
    Descending: -1,
};

export const ascending = propertyAccessor => sort(Directions.Ascending, propertyAccessor)

export const descending = propertyAccessor => sort(Directions.Descending, propertyAccessor)

const sort = (direction, propertyAccessor) => (left, right) => {
    if (propertyAccessor(left) < propertyAccessor(right)) {
        return -1 * direction;
    }

    if (propertyAccessor(left) > propertyAccessor(right)) {
        return 1 * direction;
    }
    
    return 0;
};
