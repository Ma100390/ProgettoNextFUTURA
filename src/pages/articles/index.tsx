import ComponentWithImage from "@/componets/learnig/ComponentWithImage";
import ComponentWithProps from "@/componets/learnig/ComponetWithPages";
import MyFirstComponents from "@/componets/learnig/MyFirstComponents";

export default function ArticlesPage() {
  return (
    <>
      <p>My first page</p>
      <MyFirstComponents />
      <ComponentWithProps title='Myfirst component with props!' />
      <ComponentWithImage
        src='/image.jpeg'
        alt='ciao mondo ' />
    </>
  )
}