import ContactInfo from "./ContactInfo";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import GoogleMap from "./GoogleMap";



const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
// console.log(form.current)

        emailjs.sendForm('service_y50kg0d', 'template_zesnv3q', form.current, 'SbscWwTck4Ol-xKfC')
            .then(() => {
                toast.success('Congrats! successfully sent message');
                e.target.reset()
            }, (error) => {
                toast.error(error.text);
            });
    };


    return (
        <div>
            <h3 className="bg-white text-center pt-10 text-5xl font-semibold">Connect With Us</h3>
            <ContactInfo></ContactInfo>
            <h2 className="text-center text-4xl py-5 font-semibold text-pink-500">We Are Best About This Job Solution.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                <GoogleMap></GoogleMap>
                <div className="rounded mx-auto px-10 shadow-pink-800 shadow">
                    <form ref={form} onSubmit={sendEmail} >
                        <h2 className="text-xl text-center font-semibold text-neutral-950 py-5">Send A Message</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="email"
                                name="user_name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="user_email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea  textarea-bordered" name="message" placeholder="Write your Message"></textarea>
                        </div>

                        <div className="form-control py-6">
                            <button className="btn btn-outline bg-brown-600 ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;