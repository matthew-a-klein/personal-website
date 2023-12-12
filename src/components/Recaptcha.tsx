import { LegacyRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import env from 'react-dotenv'

export interface RecaptchaProps{
handleCaptcha: ( key: string | null)=> void
recaptchaRef :LegacyRef<ReCAPTCHA>
handleExpiration: ()=> void
}
const Recaptcha = ({handleExpiration, handleCaptcha, recaptchaRef}: RecaptchaProps)=>{

return (
<ReCAPTCHA 
className='flex flex-1 justify-center mt-6'
  onChange={handleCaptcha}
  onExpired={handleExpiration}
  ref={recaptchaRef}
  //This ref can be used to call captcha related functions in case you need.
  sitekey={env.RECAPTCHA_SITE_KEY}
  theme="light"
/>)}
export default Recaptcha;
