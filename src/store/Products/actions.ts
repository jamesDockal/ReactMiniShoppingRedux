export function getChecked (id: string) {
    return {
        type: 'GET_CHECKED',
        payload: id
    }
} 