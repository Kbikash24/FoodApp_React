import './Card.css'

const Card=(props)=>{
    return<>
    <div className='items'>{props.children}</div>
    </>
}
export default Card;