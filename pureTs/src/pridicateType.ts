type Fish = { swim: () => void }
type Bird = { Fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}
function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food "
    }
    else {
        pet
        return "bird food"
    }
}