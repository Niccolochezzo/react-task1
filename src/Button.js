export default function Button(params) {
    return (
        <button className={params.cusClass}>{params.text} <img height="15px" width="15px" src={params.imageUrl} alt='logo'/> </button>
    )
}