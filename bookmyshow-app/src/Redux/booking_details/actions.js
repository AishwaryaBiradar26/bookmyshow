import {
    ADD_DATE_DAY,
    ADD_MOVIE_NAME,
    ADD_NAME_TIME
} from "./actionTypes"


export const handleAddMovieName = (movie_name) => {
    return {
        type: ADD_MOVIE_NAME,
        payload: movie_name
    }
}

export const handleSelectDate = (date, day) => {
    return {
        type: ADD_DATE_DAY,
        payload: {
            date,
            day
        }
    }
}

export const handleSelectNameTime = (cinemas_name, time) => {
    return {
        type: ADD_NAME_TIME,
        payload: {
            cinemas_name,
            time
        }
    }
}