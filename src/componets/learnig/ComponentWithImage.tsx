import Image from "next/image"
type Product = {
    src:string,
    alt:string
}
export default function ComponentWithImage(props: Product) {
return <>
<Image
src={props.src}
alt={props.alt}
width={200}
height={200}
/>
</>

}