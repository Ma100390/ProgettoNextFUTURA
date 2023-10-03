
type MyProps = {
    title:string
}

export default function ComponentWithProps (props:MyProps){
    return (<>
    <p>{props.title}</p>
    </>)
}