import React from 'react';
import MyHelmet from '../../../components/MyHelmet';
import { Controller, useForm } from 'react-hook-form';

const ApplyAsSchool = () => {

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

    const handleSubmitSchool = data => {
        console.log(data);
        reset();
    }

    let password;

    password = watch("password", "");

    return (
        <div>
            <MyHelmet>Apply as School</MyHelmet>
            <div className="hero h-[250px]" style={{ backgroundImage: `url("https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5034286fae0_ABM%20College%20internship%20blog%20main.jpg")` }}>
                <div className="hero-overlay bg-secondary bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl text-white font-bold">Join Us</h1>
                    </div>
                </div>
            </div>
            <div className='py-28'>
                <form onSubmit={handleSubmit(handleSubmitSchool)} className="">
                    <div className="bg-secondary bg-opacity-10 py-16">
                        <div className='px-10 md:px-40 flex flex-col lg:flex-row justify-around items-center gap-16'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">1. School Name*</span>
                                </label>
                                <input {...register("school_name", { required: "School Name is required" })} type="text" placeholder="School Name" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.school_name && <p className='text-error mt-3 font-semibold'>{errors.school_name.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">2. School Contact*</span>
                                </label>

                                <input {...register("school_contact", {
                                    required: {
                                        value: true,
                                        message: "School Contact is required"
                                    }, minLength: {
                                        value: 10,
                                        message: "Not Enough Numbers"
                                    }, maxLength: {
                                        value: 10,
                                        message: "Too Many Numbers"
                                    }
                                })} type="tel" placeholder="School Phone Number" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.school_contact && <p className='text-error mt-3 font-semibold'>{errors.school_contact.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">3. Number of Participants*</span>
                                </label>
                                <label className="label">
                                    <span className='label-text text-gray-500 italic'>Number of students who would participate (1 to 5)</span>
                                </label>
                                <input {...register("participants_number", {
                                    required: {
                                        value: true,
                                        message: "Number of Participants is required"
                                    },
                                    max: {
                                        value: 5,
                                        message: "Too Many Participants"
                                    },
                                    min: {
                                        value: 1,
                                        message: "Not Enough Participants"
                                    }
                                })} type="number" placeholder="Participant Number" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.participants_number && <p className='text-error mt-3 font-semibold'>{errors.participants_number.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="py-16">
                        <div className='px-10 md:px-40 flex flex-col lg:flex-row justify-around gap-16'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">4. Team Captain's Name*</span>
                                </label>
                                <input {...register("captain_name", { required: "Team Captain Name is required" })} type="text" placeholder="Team Captain's Name" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.captain_name && <p className='text-error mt-3 font-semibold'>{errors.captain_name.message}</p>}

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">5. Team Captain's Contact*</span>
                                </label>
                                <input {...register("captain_contact", {
                                    required: {
                                        value: true,
                                        message: "Team Captain's Contact is required"
                                    }, minLength: {
                                        value: 10,
                                        message: "Not Enough Numbers"
                                    }, maxLength: {
                                        value: 10,
                                        message: "Too Many Numbers"
                                    }
                                })} type="tel" placeholder="Captain's Phone Number" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.captain_contact && <p className='text-error mt-3 font-semibold'>{errors.captain_contact.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">6. Team Captains's Email*</span>
                                </label>
                                <input {...register("captain_email", { required: "Captain's email is required" })} type="email" placeholder="Captain's email" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.captain_email && <p className='text-error mt-3 font-semibold'>{errors.captain_email.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondary bg-opacity-10 py-16">
                        <div className='px-10 md:px-40 flex flex-col lg:flex-row justify-around items-center gap-16'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">7. Faculty Advisor's Name*</span>
                                </label>
                                <input {...register("advisor_name", { required: "Faculty Advisor's name is required" })} type="text" placeholder="Faculty Advisor's Name" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.advisor_name && <p className='text-error mt-3 font-semibold'>{errors.advisor_name.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">8. Faculty Advisor's Contact*</span>
                                </label>
                                <input {...register("advisor_contact", {
                                    required: {
                                        value: true,
                                        message: "Advisor's Contact is required"
                                    }, minLength: {
                                        value: 10,
                                        message: "Not Enough Numbers"
                                    }, maxLength: {
                                        value: 10,
                                        message: "Too Many Numbers"
                                    }
                                })} type="tel" placeholder="Advisor's Phone Number" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.advisor_contact && <p className='text-error mt-3 font-semibold'>{errors.advisor_contact.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">9. Faculty Advisor's Email*</span>
                                </label>
                                <input {...register("advisor_email", { required: "Faculty Advisor's email is required" })} type="text" placeholder="Faculty Advisor's Email" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.advisor_email && <p className='text-error mt-3 font-semibold'>{errors.advisor_email.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="py-16">
                        <div className='px-10 md:px-40 flex flex-col lg:flex-row justify-around gap-16'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">9. Login Email*</span>
                                </label>
                                <input {...register("email", { required: "Email is required" })} type="email" placeholder="Email" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.email && <p className='text-error mt-3 font-semibold'>{errors.email.message}</p>}

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">10. Password*</span>
                                </label>
                                <input {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Not Enough Numbers"
                                    }

                                })} type="password" placeholder="Password" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.password && <p className='text-error mt-3 font-semibold'>{errors.password.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-secondary-focus font-bold text-2xl">12. Confirm Password*</span>
                                </label>
                                <input {...register("confirm_password", {
                                    required: true,
                                    validate: (val) => {
                                        if (watch('password') !== val) {
                                            return "Your passwords do no match";
                                        }
                                    },
                                })} type="password" placeholder="Confirm Password" className="input-lg border-secondary border-0 border-b-2 focus:outline-none w-full bg-transparent" />
                                {errors.confirm_password && <p className='text-error mt-3 font-semibold'>{errors.confirm_password.message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='pt-10 w-full flex justify-center'>
                        <input className='bg-gradient-to-r from-neutral via-secondary via-95% to-accent text-white text-3xl btn capitalize border-0 px-8 rounded-3 hover:bg-gradient-to-l hover:shadow-2xl' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyAsSchool;