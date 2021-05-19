export const selectAllProducts = (state:any) => state

export const selectSelectedProducts = (state:any) => 
    state.filter( (product : any) => product.checked == true)

export const selectTags = (state:any) => {
    const selectedProducts = selectSelectedProducts(state)
    const tags: string[] = []

    selectedProducts.map( (product: any) => {
        product.tags.map( (tag: any) => {
            tags.push(tag)
        })
    })
   
    return tags
}
