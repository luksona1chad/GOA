export default function Button(params) {
    console.log(params)
    return (
        <button>{params.children}</button>
    )
}
