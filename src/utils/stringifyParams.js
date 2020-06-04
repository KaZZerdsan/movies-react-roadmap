export default (query) => {
    const keys = Object.keys(query)
    const queries = keys.map(key => `${key}=${query[key]}`)
    return `?${queries.join('&')}`
}