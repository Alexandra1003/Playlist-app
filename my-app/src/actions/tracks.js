var mockApiData = [
    {
        id: 1,
        name: 'Amazing'
    },
    {
        id: 2,
        name: 'Pink'
    },
    {
        id: 3,
        name: 'Crazy'
    },
    {
        id: 4,
        name: 'Crying'
    }
]

export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('I got tracks');
        dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
    }, 2000)
}