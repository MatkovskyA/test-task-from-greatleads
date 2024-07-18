import Form from "./Form";
import { HiddenBlock } from "./HiddenBlock";

export const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col gap-24 flex-wrap flex-1 py-16 px-4 text-white min-h-screen">
      <Form />
      <HiddenBlock/>
    </div>
  )
}