import { quotes } from "../assets"

const FeedbackCard = ({content, name, title, img}) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10  sm:mr-5 mr-0 my-5 feedback-card'>
     <img src={quotes} alt="doube_quotes" className="w-[42px] h-[27px object-contain]" />
     <p className="font-poppins font-normal text-[18px] leading-[32px] text-purple-600 my-10">{ content }</p>
    </div>
  )

export default FeedbackCard